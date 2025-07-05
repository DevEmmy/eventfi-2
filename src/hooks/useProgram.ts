import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { AnchorProvider, Program, Wallet, Idl } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { useMemo } from 'react';
import { EventFiProgram } from '@/lib/program';
import IDL from '../idl/ticket_program2.json';

export const useProgram = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const program = useMemo(() => {
    if (!wallet.publicKey || !wallet.signTransaction || !wallet.signAllTransactions) {
      console.log('Wallet not fully connected');
      return null;
    }

    const anchorWallet = {
      publicKey: wallet.publicKey,
      signTransaction: wallet.signTransaction,
      signAllTransactions: wallet.signAllTransactions,
    } as Wallet;

    const provider = new AnchorProvider(
      connection,
      anchorWallet,
      { commitment: 'confirmed' }
    );

    try {
      // Use the program ID from the smart contract
      const programId = new PublicKey('2xaoCPoYvk8yQ5kenFekEaxAhupX9i3YgdfFevm6gvE1');
      console.log('Program ID created successfully:', programId.toBase58());
      
      const program = new EventFiProgram(connection, provider, programId);
      console.log('Program initialized successfully');
      
      return program;
    } catch (error) {
      console.error('Failed to initialize program:', error);
      return null;
    }
  }, [connection, wallet]);

  return program;
}; 