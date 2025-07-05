import { useMutation } from "@tanstack/react-query";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { EventFiProgram } from "@/lib/program";
import { PublicKey } from "@solana/web3.js";
import { toastError, toastSuccess } from "@/utils/toast";
import { BN, AnchorProvider } from "@project-serum/anchor";
import IDL from "@/idl/ticket_program2.json";

interface MintTicketParams {
  ticketPublicKey: string;
  eventPublicKey: string;
  name: string;
  description: string;
  imageUrl: string;
  ticketId: string;
  attributes?: Array<{ trait_type: string; value: string }>;
}

export const useMintTicketNFT = () => {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const { connection } = useConnection();

  return useMutation({
    mutationFn: async (params: MintTicketParams) => {
      if (!publicKey || !signTransaction || !signAllTransactions) {
        throw new Error("Wallet not connected");
      }

      console.log("params", params);

      try {
        // Validate public keys
        let ticketPDA: PublicKey;
        let eventPDA: PublicKey;
        
        try {
          ticketPDA = new PublicKey(params.ticketPublicKey);
          eventPDA = new PublicKey(params.eventPublicKey);
        } catch (error) {
          console.error('Invalid public key:', error);
          throw new Error('Invalid ticket or event public key');
        }

        // Create provider
        const provider = new AnchorProvider(
          connection,
          {
            publicKey,
            signTransaction,
            signAllTransactions,
          },
          { commitment: "confirmed" }
        );

        const program = new EventFiProgram(
          connection,
          provider,
          new PublicKey(IDL.metadata.address)
        );

        // Upload metadata to backend
        const metadataUrl = await program.uploadMetadata(
          params.name,
          params.description,
          params.imageUrl,
          params.attributes,
          params.ticketId,
          publicKey.toBase58()
        );
        console.log("metadataUrl", metadataUrl);

        console.log('Minting NFT with params:', {
          ticketPDA: ticketPDA.toBase58(),
          eventPDA: eventPDA.toBase58(),
          metadataUrl,
          payer: publicKey.toBase58(),
        });

        const tx = await program.mintTicketNft(
          ticketPDA,
          eventPDA,
          metadataUrl,
          publicKey
        );

        return tx;
      } catch (error: any) {
        console.error("Error in mintTicketNft:", error);
        if (error.message.includes("Wallet not connected")) {
          throw new Error("Please connect your wallet first");
        }
        if (error.message.includes("Invalid public key")) {
          throw new Error(error.message);
        }
        if (error.message.includes("Ticket account not found")) {
          throw new Error("Ticket not found. Please make sure you have purchased the ticket first.");
        }
        throw error;
      }
    },
    onSuccess: (tx) => {
      console.log("NFT minted successfully:", tx);
      toastSuccess("Ticket NFT minted successfully!");
    },
    onError: (error: any) => {
      console.error("Failed to mint ticket NFT:", error);
      toastError(error.message || "Failed to mint ticket NFT");
    },
  });
}; 