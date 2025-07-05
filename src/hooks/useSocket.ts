'use client'
import { useEffect, useRef, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSocketContext } from '@/contexts/SocketContext';
import { useAuthStore } from '@/store/useAuthStore';
import { toast } from 'react-hot-toast';

interface UseSocketProps {
  eventId: string;
  onNewMessage: (message: any) => void;
  onTypingUsers: (userIds: string[]) => void;
}

export function useSocket({ eventId, onNewMessage, onTypingUsers }: UseSocketProps) {
  const { publicKey } = useWallet();
  const { user } = useAuthStore();
  const { socket, isConnected } = useSocketContext();
  const typingTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!socket || !publicKey || !user || !isConnected) return;

    // Handle new messages
    const handleNewMessage = ({message}: any) => {
      
      if (message.eventId == eventId) {
        
        onNewMessage(message);
      }
    };

    // Handle typing users
    const handleTypingUsers = (data: { eventId: string; userIds: string[] }) => {
      if (data.eventId === eventId) {
        onTypingUsers(data.userIds);
      }
    };

    // Listen for new messages
    socket.on('newMessage', handleNewMessage);

    // Listen for typing users
    socket.on('typingUsers', handleTypingUsers);

    return () => {
      socket.off('newMessage', handleNewMessage);
      socket.off('typingUsers', handleTypingUsers);
    };
  }, [socket, publicKey, user, eventId, onNewMessage, onTypingUsers, isConnected]);

  const sendMessage = useCallback((content: string, attachments?: string[]) => {
    if (!socket || !isConnected) {
      toast.error('Not connected to chat server');
      return;
    }

    socket.emit('sendMessage', {
      eventId,
      content,
      attachments,
    });
  }, [socket, eventId, isConnected]);

  const markAsRead = useCallback((messageId: string) => {
    if (!socket || !isConnected) return;

    socket.emit('markAsRead', messageId);
  }, [socket, isConnected]);

  const startTyping = useCallback(() => {
    if (!socket || !isConnected) return;

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Emit typing start
    socket.emit('typingStart', eventId);

    // Set timeout to stop typing after 3 seconds
    typingTimeoutRef.current = setTimeout(() => {
      stopTyping();
    }, 3000);
  }, [socket, eventId, isConnected]);

  const stopTyping = useCallback(() => {
    if (!socket || !isConnected) return;

    socket.emit('typingStop', eventId);
  }, [socket, eventId, isConnected]);

  return {
    sendMessage,
    markAsRead,
    startTyping,
    stopTyping,
    isConnected,
  };
} 