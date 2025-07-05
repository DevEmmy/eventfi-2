import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosConfig";

interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  bannerUrl: string;
  category: string;
  venue?: {
    name: string;
    city: string;
    country: string;
  };
  ticketTiers: Array<{
    price: number;
    name: string;
    quantity: number;
  }>;
  organizer: string;
  mintAsNFT?: boolean;
}

export const useEvent = (eventId: string) => {
  return useQuery({
    queryKey: ['event', eventId],
    queryFn: async (): Promise<Event> => {
      const response = await axiosInstance.get(`/events/${eventId}`);
      return response.data.data;
    },
    enabled: !!eventId
  });
};

export const useEventTicket = (eventId: string) => {
  return useQuery({
    queryKey: ['eventTicket', eventId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/tickets/event/${eventId}`);
      return response.data.data;
    },
    enabled: !!eventId,
    retry: false // Don't retry if user hasn't purchased a ticket
  });
};
