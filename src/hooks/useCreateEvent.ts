import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from 'next/navigation';
import { useProgram } from "./useProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-hot-toast";
import { toastError, toastSuccess } from "@/utils/toast";

interface EventFormData {
  name: string;
  description: string;
  category: string;
  tags: string;
  startDate: string;
  endDate: string;
  timezone: string;
  eventType: string;
  venue?: {
    name: string;
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  ticketTiers: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  isFree: boolean;
  bannerUrl: string;
  socialLinks: {
    twitter?: string;
    discord?: string;
    telegram?: string;
    website?: string;
  };
}

export const useCreateEvent = () => {
  const router = useRouter();
  const program = useProgram();
  const { publicKey } = useWallet();

  const mutation = useMutation({
    mutationFn: async (eventData: EventFormData) => {
      if (!program || !publicKey) {
        throw new Error("Wallet not connected");
      }

      // Validate input lengths
      if (eventData.name.length > 50) {
        throw new Error("Event name must be 50 characters or less");
      }
      if (eventData.description.length > 200) {
        throw new Error("Description must be 200 characters or less");
      }
      
      const location = eventData.venue?.address || eventData.onlineUrl || "";
      if (location.length > 100) {
        throw new Error("Location must be 100 characters or less");
      }

      // Convert dates to timestamps
      const startTimestamp = Math.floor(new Date(eventData.startDate).getTime() / 1000);
      const endTimestamp = Math.floor(new Date(eventData.endDate).getTime() / 1000);

      try {
        // Create event on-chain
        const { txSignature, eventPDA } = await program.createEvent(
          eventData.name,
          eventData.description,
          location,
          startTimestamp,
          endTimestamp,
          publicKey
        );

        // Create event in backend with blockchain details
        const response = await axiosInstance.post('/events', {
          ...eventData,
          blockchainEventId: eventPDA.toBase58(),
          blockchainTxHash: txSignature
        });

        return response.data;
      } catch (error: any) {
        // Handle specific error cases
        if (error.message.includes("User must be an organizer")) {
          throw new Error("You must be an organizer to create events. Please update your profile type first.");
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      toastSuccess("Event created successfully!");
      router.push(`/events/${data._id}`);
    },
    onError: (error: any) => {
      console.error("Failed to create event:", error);
      toastError(error.message || "Failed to create event");
    }
  });

  return {
    createEvent: mutation.mutate,
    isCreating: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
