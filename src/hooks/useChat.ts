import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosConfig';
import { useWallet } from '@solana/wallet-adapter-react';

export interface Message {
  _id: string;
  eventId: string;
  senderId: {
    _id: string;
    username: string;
    profileImage?: string;
    ticketType?: string;
  };
  content: string;
  attachments?: string[];
  readBy: string[];
  createdAt: Date;
}

interface ChatRoom {
  _id: string;
  name: string;
  description?: string;
  participants: string[];
  isActive: boolean;
  lastMessage?: {
    content: string;
    createdAt: Date;
  };
  eventId: {
    name: string;
    startDate: string;
    bannerUrl: string;
  };
}

interface SendMessagePayload {
  content: string;
  attachments?: string[];
}

export const useChat = (eventId?: string) => {
  const { publicKey } = useWallet();
  const queryClient = useQueryClient();

  // Get event chat messages
  const useEventChat = () => {
    return useQuery({
      queryKey: ['chat', 'messages', eventId],
      queryFn: async (): Promise<Message[]> => {
        if (!eventId) throw new Error('Event ID is required');
        const response = await axiosInstance.get(`/chat/event/${eventId}`);
        return response.data.data;
      },
      enabled: !!eventId && !!publicKey,
    });
  };

  // Get unread message count
  const useUnreadCount = () => {
    return useQuery({
      queryKey: ['chat', 'unread', eventId],
      queryFn: async (): Promise<number> => {
        if (!eventId) throw new Error('Event ID is required');
        const response = await axiosInstance.get(`/chat/event/${eventId}/unread`);
        return response.data.data;
      },
      enabled: !!eventId && !!publicKey,
    });
  };

  // Get user's chat rooms
  const useChatRooms = () => {
    return useQuery({
      queryKey: ['chat', 'rooms'],
      queryFn: async (): Promise<ChatRoom[]> => {
        const response = await axiosInstance.get('/chat/rooms');
        return response.data.data;
      },
      enabled: !!publicKey,
    });
  };

  // Mark message as read
  const useMarkAsRead = () => {
    return useMutation({
      mutationFn: async (messageId: string) => {
        const response = await axiosInstance.post(`/chat/message/${messageId}/read`);
        return response.data.data;
      },
      onSuccess: () => {
        // Invalidate relevant queries
        queryClient.invalidateQueries({ queryKey: ['chat', 'unread', eventId] });
        queryClient.invalidateQueries({ queryKey: ['chat', 'messages', eventId] });
      },
    });
  };

  // Send new message
  const useSendMessage = () => {
    return useMutation({
      mutationFn: async (payload: SendMessagePayload) => {
        if (!eventId) throw new Error('Event ID is required');
        const response = await axiosInstance.post(`/chat/event/${eventId}`, {
          ...payload,
        });
        return response.data.data;
      },
      onSuccess: () => {
        // Invalidate messages query
        queryClient.invalidateQueries({ queryKey: ['chat', 'messages', eventId] });
        // Invalidate chat rooms to update last message
        queryClient.invalidateQueries({ queryKey: ['chat', 'rooms'] });
      },
    });
  };

  return {
    useEventChat,
    useUnreadCount,
    useChatRooms,
    useMarkAsRead,
    useSendMessage,
  };
}; 