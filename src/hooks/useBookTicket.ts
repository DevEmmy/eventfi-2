import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosConfig";
import { useProgram } from "./useProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-hot-toast";
import { PublicKey } from "@solana/web3.js";

interface BookTicketPayload {
  eventId: string;
  type: string;
  _id: string;
}

interface BookTicketResponse {
  success: boolean;
  data: {
    ticketPublicKey: string;
    transactionSignature: string;
    eventId: string;
    type: string;
    _id: string;
  };
}

export const useBookTicket = () => {
  const program = useProgram();
  const { publicKey } = useWallet();

  return useMutation({
    mutationFn: async (data: BookTicketPayload) => {
      if (!program || !publicKey) {
        throw new Error("Wallet not connected");
      }

      try {
        console.log('Attempting to buy ticket with:', {
          eventId: data.eventId,
          type: data.type,
          walletPublicKey: publicKey.toBase58()
        });

        // Validate the event ID is a valid public key
        let eventPublicKey: PublicKey;
        try {
          eventPublicKey = new PublicKey(data.eventId);
          console.log('Event public key created successfully:', eventPublicKey.toBase58());
        } catch (error) {
          console.error('Invalid event public key:', data.eventId);
          throw new Error('Invalid event ID format');
        }

        // First, buy the ticket on-chain
        const txSignature = await program.buyTicket(
          eventPublicKey,
          parseInt(data.type), // Convert string type to number
          publicKey
        );
        console.log("txSignature", txSignature);
        // Then, create the ticket in the backend with blockchain details
        const response = await axiosInstance.post<BookTicketResponse>('/events/purchase', {
          ...data,
          blockchainTxHash: txSignature
        });

        return response.data;
      } catch (error: any) {
        console.error("Failed to book ticket:", error);
        if (error.message.includes("Wallet not connected")) {
          throw new Error("Please connect your wallet first");
        }
        if (error.message.includes("Invalid event ID format")) {
          throw new Error("Invalid event ID format");
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      toast.success("Ticket booked successfully!");
      
      console.log("Ticket booking response:", data);
    },
    onError: (error: any) => {
      console.error("Failed to book ticket:", error);
      toast.error(error.message || "Failed to book ticket");
    }
  });
};
