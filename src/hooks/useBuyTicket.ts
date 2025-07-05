import { useMutation } from "@tanstack/react-query";
import { useProgram } from "./useProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-hot-toast";
import { PublicKey } from "@solana/web3.js";

interface BuyTicketParams {
  eventPublicKey: string;
  ticketType: number;
}

export const useBuyTicket = () => {
  const program = useProgram();
  const { publicKey } = useWallet();

  const mutation = useMutation({
    mutationFn: async ({ eventPublicKey, ticketType }: BuyTicketParams) => {
      if (!program || !publicKey) {
        throw new Error("Wallet not connected");
      }

      try {
        const txSignature = await program.buyTicket(
          new PublicKey(eventPublicKey),
          ticketType,
          publicKey
        );
        console.log("txSignature", txSignature);

        return txSignature;
      } catch (error: any) {
        console.error("Failed to buy ticket:", error);
        throw error;
      }
    },
    onSuccess: (txSignature) => {
      // toast.success("Ticket purchased successfully!");
      console.log("Transaction signature:", txSignature);
    },
    onError: (error: any) => {
      console.error("Failed to buy ticket:", error);
      // toast.error(error.message || "Failed to buy ticket");
    }
  });

  return {
    buyTicket: mutation.mutate,
    isBuying: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}; 