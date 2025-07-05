import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import { Program, AnchorProvider, web3, Idl } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import axios from 'axios';
import IDL from '../idl/ticket_program2.json';
import { BN } from '@project-serum/anchor';

interface NFTMetadata {
  name: string;
  symbol: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
  properties?: {
    files: Array<{
      uri: string;
      type: string;
    }>;
    category: string;
  };
}

export type UserType = {
  attendee?: {};
  organizer?: {};
  admin?: {};
};

export interface CreateEventResult {
  txSignature: string;
  eventPDA: PublicKey;
}

export interface UserProfile {
  wallet: PublicKey;
  userType: UserType;
  verified: boolean;
  createdAt: BN;
}

export interface Event {
  organizer: PublicKey;
  title: string;
  description: string;
  location: string;
  startTime: BN;
  endTime: BN;
  createdAt: BN;
  updatedAt: BN;
  isLive: boolean;
}

export interface Ticket {
  event: PublicKey;
  owner: PublicKey;
  ticketType: number;
  isUsed: boolean;
  minted: boolean;
  createdAt: BN;
  nftMint: PublicKey | null;
}

export class EventFiProgram {
  private program: Program;
  private connection: Connection;
  private provider: AnchorProvider;

  constructor(connection: Connection, provider: AnchorProvider, programId: PublicKey) {
    this.connection = connection;
    this.provider = provider;
    this.program = new Program(IDL as Idl, programId, provider);
  }

  async initializeProfile(
    userType: UserType,
    user: PublicKey
  ): Promise<string> {
    try {
      const [profilePDA] = await PublicKey.findProgramAddress(
        [Buffer.from('profile'), user.toBuffer()],
        this.program.programId
      );

      // Check if profile already exists
      try {
        const existingProfile = await this.program.account.userProfile.fetch(profilePDA);
        console.log('Profile already exists:', existingProfile);
        return 'Profile already exists';
      } catch (error) {
        // Profile doesn't exist, proceed with initialization
        console.log('Initializing new profile for user:', user.toBase58());
      }

      const tx = await this.program.methods
        .initializeProfile(userType)
        .accounts({
          profile: profilePDA,
          user: user,
          systemProgram: web3.SystemProgram.programId,
        })
        .rpc();

      return tx;
    } catch (error: any) {
      console.error('Error in initializeProfile:', error);
      if (error.message.includes('already in use')) {
        throw new Error('Profile already exists');
      }
      throw error;
    }
  }

  async updateUserType(
    userType: UserType,
    user: PublicKey
  ): Promise<string> {
    const [profilePDA] = await PublicKey.findProgramAddress(
      [Buffer.from('profile'), user.toBuffer()],
      this.program.programId
    );

    const tx = await this.program.methods
      .updateUserType(userType)
      .accounts({
        profile: profilePDA,
        user: user,
      })
      .rpc();

    return tx;
  }

  async verifyProfile(
    user: PublicKey,
    adminProfile: PublicKey
  ): Promise<string> {
    const [profilePDA] = await PublicKey.findProgramAddress(
      [Buffer.from('profile'), user.toBuffer()],
      this.program.programId
    );

    const tx = await this.program.methods
      .verifyProfile()
      .accounts({
        profile: profilePDA,
        adminProfile: adminProfile,
        user: user,
      })
      .rpc();

    return tx;
  }

  async createEvent(
    title: string,
    description: string,
    location: string,
    startTime: number,
    endTime: number,
    user: PublicKey
  ): Promise<CreateEventResult> {
    try {
      // Validate input lengths based on program constraints
      if (title.length > 100) throw new Error("Title is too long (max 100 characters)");
      if (description.length > 300) throw new Error("Description is too long (max 300 characters)");
      if (location.length > 100) throw new Error("Location is too long (max 100 characters)");

      // First check if user is an organizer
      const [organizerProfilePDA] = await PublicKey.findProgramAddress(
        [Buffer.from('profile'), user.toBuffer()],
        this.program.programId
      );

      const userProfile = await this.getUserProfile(user);
      if (!userProfile.userType.organizer) {
        throw new Error("Only organizers can create events");
      }

      // Create event PDA using the same seeds as the Rust program
      const [eventPDA] = await PublicKey.findProgramAddress(
        [
          Buffer.from('event'),
          user.toBuffer(),
          Buffer.from(title)
        ],
        this.program.programId
      );

      console.log('Creating event with:', {
        title,
        description,
        location,
        startTime,
        endTime,
        user: user.toBase58(),
        eventPDA: eventPDA.toBase58(),
        organizerProfilePDA: organizerProfilePDA.toBase58()
      });

      const tx = await this.program.methods
        .createEvent(title, description, location, new BN(startTime), new BN(endTime))
        .accounts({
          event: eventPDA,
          organizerProfile: organizerProfilePDA,
          user: user,
          systemProgram: web3.SystemProgram.programId,
        })
        .rpc();

      return {
        txSignature: tx,
        eventPDA: eventPDA
      };
    } catch (error: any) {
      console.error('Error in createEvent:', error);
      if (error.code === 6000) throw new Error("Only organizers can create events");
      throw error;
    }
  }

  async buyTicket(
    eventPublicKey: PublicKey,
    ticketType: number,
    buyer: PublicKey
  ): Promise<string> {
    try {
      // Log the program ID being used
      console.log('Using program ID:', this.program.programId.toBase58());

      // Generate a random ticket seed
      const ticketSeed = new BN(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

      // Find the ticket PDA using the same seeds as the smart contract
      const [ticketPDA, ticketBump] = await PublicKey.findProgramAddress(
        [
          Buffer.from('ticket'),
          eventPublicKey.toBuffer(),
          buyer.toBuffer(),
          ticketSeed.toArrayLike(Buffer, 'le', 8)
        ],
        this.program.programId
      );

      console.log('Buying ticket with:', {
        event: eventPublicKey.toBase58(),
        ticketType,
        ticketSeed: ticketSeed.toString(),
        buyer: buyer.toBase58(),
        ticketPDA: ticketPDA.toBase58(),
        ticketBump,
        programId: this.program.programId.toBase58()
      });

      // Log available program methods
      console.log('Available program methods:', Object.keys(this.program.methods));

      const tx = await this.program.methods
        .buyTicket(ticketSeed, ticketType)
        .accounts({
          ticket: ticketPDA,
          event: eventPublicKey,
          user: buyer,
          systemProgram: web3.SystemProgram.programId,
        })
        .rpc();
        console.log(ticketPDA)
      return tx;
    } catch (error: any) {
      console.error('Error in buyTicket:', error);
      // Log more details about the error
      if (error.logs) {
        console.error('Transaction logs:', error.logs);
      }
      if (error.programErrorStack) {
        console.error('Program error stack:', error.programErrorStack);
      }
      throw error;
    }
  }

  async getUserProfile(user: PublicKey): Promise<UserProfile> {
    const [profilePDA] = await PublicKey.findProgramAddress(
      [Buffer.from('profile'), user.toBuffer()],
      this.program.programId
    );

    const profile = await this.program.account.userProfile.fetch(profilePDA);
    return profile as UserProfile;
  }

  async getEvent(eventPublicKey: PublicKey): Promise<Event> {
    const event = await this.program.account.event.fetch(eventPublicKey);
    return event as Event;
  }

  async getTicket(ticketPublicKey: PublicKey): Promise<Ticket> {
    const ticket = await this.program.account.ticket.fetch(ticketPublicKey);
    return ticket as Ticket;
  }

  async mintTicketNft(
    ticketPublicKey: PublicKey,
    eventPublicKey: PublicKey,
    metadataUri: string,
    payer: PublicKey
  ): Promise<string> {
    try {
      const ticket = await this.getTicket(new PublicKey("HkBMTcKHU8UuHhfaFiwg82LDurt2ZL6X7rheMFgUTKJu"));
      
      // Check if ticket is already minted
      if (ticket.minted) {
        throw new Error("Ticket already minted as NFT");
      }

      // Check if user is the ticket owner
      console.log(payer.toBase58());
      console.log(ticket.owner.toBase58());
      if (!ticket.owner.equals(payer)) {
        throw new Error("Only ticket owner can mint NFT");
      }

      // Create mint account
      const mint = web3.Keypair.generate();
      
      // Get associated token account
      const [tokenAccount] = await PublicKey.findProgramAddress(
        [
          payer.toBuffer(),
          TOKEN_PROGRAM_ID.toBuffer(),
          mint.publicKey.toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
      );

      // Get metadata account
      const [metadata] = await PublicKey.findProgramAddress(
        [
          Buffer.from('metadata'),
          Buffer.from(MPL_TOKEN_METADATA_PROGRAM_ID.toString()),
          mint.publicKey.toBuffer(),
        ],
        new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID)
      );

      // Get master edition account
      const [masterEdition] = await PublicKey.findProgramAddress(
        [
          Buffer.from('metadata'),
          Buffer.from(MPL_TOKEN_METADATA_PROGRAM_ID.toString()),
          mint.publicKey.toBuffer(),
          Buffer.from('edition'),
        ],
        new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.toString())
      );

      // Validate and format URI
      if (!metadataUri || typeof metadataUri !== 'string') {
        throw new Error("Invalid URI: must be a non-empty string");
      }

      // Ensure URI is properly formatted
      const formattedUri = metadataUri.trim();
      if (formattedUri.length < 36) {
        throw new Error("Invalid URI: must be a valid metadata URI of at least 36 characters");
      }

      // Log the URI details for debugging
      console.log("URI details:", {
        original: metadataUri,
        formatted: formattedUri,
        length: formattedUri.length,
        isValid: formattedUri.length >= 36
      });

      // Create a new transaction
      const transaction = new Transaction();

      // Log the URI being used
      console.log("Using URI for minting:", {
        uri: formattedUri,
        length: formattedUri.length,
        isHttps: formattedUri.startsWith('https://')
      });

      // Add the mint NFT instruction
      const mintNftInstruction = await this.program.methods
        .mintTicketNft(formattedUri)
        .accounts({
          ticket: ticketPublicKey,
          event: eventPublicKey,
          mint: mint.publicKey,
          tokenAccount: tokenAccount,
          metadata: metadata,
          masterEdition: masterEdition,
          payer: payer,
          systemProgram: web3.SystemProgram.programId,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          rent: web3.SYSVAR_RENT_PUBKEY,
          tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
        })
        .instruction();

      // Add the mint NFT instruction to transaction
      transaction.add(mintNftInstruction);

      // Get a recent blockhash
      const { blockhash, lastValidBlockHeight } = await this.connection.getLatestBlockhash('confirmed');
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = payer;

      // Make sure the mint account is marked as a signer
      transaction.partialSign(mint);

      // Sign with the wallet
      const signedTransaction = await this.provider.wallet.signTransaction(transaction);

      // Send transaction
      console.log("Sending transaction...");
      const signature = await this.connection.sendRawTransaction(signedTransaction.serialize(), {
        skipPreflight: false, // Enable preflight checks
        maxRetries: 3,
      });

      console.log("Waiting for confirmation...");
      const confirmation = await this.connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature
      }, "confirmed");

      if (confirmation.value.err) {
        console.error("Transaction failed:", confirmation.value.err);
        throw new Error(`Transaction failed: ${JSON.stringify(confirmation.value.err)}`);
      }

      console.log("Transaction confirmed:", signature);
      console.log(`Explorer URL: https://explorer.solana.com/tx/${signature}?cluster=devnet`);

      return signature;
    } catch (error: any) {
      console.error('Error in mintTicketNft:', error);
      
      // Enhanced error handling
      if (error.name === 'SendTransactionError') {
        try {
          const logs = error.logs || [];
          console.error("Transaction logs:", logs.join('\n'));

          // Special handling for the fallback error
          if (logs.some((log: string) => log.includes("InstructionFallbackNotFound"))) {
            console.error("This is a discriminator issue. The program cannot recognize the instruction.");
            throw new Error("The NFT minting program does not recognize this instruction. Please contact support.");
          }

          // Check for specific program errors
          if (logs.some((log: string) => log.includes("Program log: Error:"))) {
            const errorLog = logs.find((log: string) => log.includes("Program log: Error:"));
            throw new Error(`Program error: ${errorLog}`);
          }

          throw new Error(`Transaction failed: ${error.message}\n\nLogs: ${logs.join('\n')}`);
        } catch (logError) {
          // Fall back to standard error
        }
      }

      if (error.code === 6000) throw new Error("Ticket already minted as NFT");
      if (error.code === 6001) throw new Error("Only ticket owner can mint NFT");
      throw error;
    }
  }

  async uploadMetadata(
    name: string,
    description: string,
    imageUrl: string,
    attributes?: Array<{ trait_type: string; value: string }>,
    ticketId?: string,
    ownerAddress?: string
  ): Promise<string> {
    try {
      // Validate required fields
      if (!ticketId) {
        throw new Error('Ticket ID is required for metadata upload');
      }

      if (!imageUrl) {
        throw new Error('Image URL is required for metadata upload');
      }

      // Ensure imageUrl is properly formatted
      const formattedImageUrl = imageUrl.trim();
      if (!formattedImageUrl.startsWith('http')) {
        throw new Error('Image URL must be a valid HTTP(S) URL');
      }

      const metadata = {
        name: name || 'Event Ticket NFT',
        description: description || 'A ticket NFT for an event',
        image: formattedImageUrl,
        attributes: attributes || [],
        ownerAddress,
        ticketId,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      console.log('Uploading metadata:', {
        ticketId,
        imageUrl: formattedImageUrl,
        attributesCount: attributes?.length || 0
      });

      const response = await axios.post('https://eventfi-backend.onrender.com/api/nft/metadata', metadata, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to upload metadata to backend');
      }

      // Construct the metadata URL
      const metadataUrl = `https://eventfi-backend.onrender.com/api/nft/metadata/${ticketId}`;
      
      // Validate the metadata URL
      if (metadataUrl.length < 36) {
        throw new Error('Generated metadata URL is too short');
      }

      if (!metadataUrl.startsWith('https://')) {
        throw new Error('Metadata URL must be a valid HTTPS URL');
      }

      console.log('Metadata uploaded successfully:', {
        url: metadataUrl,
        length: metadataUrl.length,
        ticketId,
        isValid: metadataUrl.length >= 36 && metadataUrl.startsWith('https://')
      });

      return metadataUrl;
    } catch (error) {
      console.error('Error uploading metadata:', error);
      throw error;
    }
  }
} 