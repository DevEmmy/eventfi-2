import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosConfig";
import bs58 from "bs58";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useProgram } from "./useProgram";
import { UserType } from "@/lib/program";
import { toast } from "react-hot-toast";

export const useWalletAuth = () => {
  const { publicKey, signMessage } = useWallet();
  const { setAuth, clearAuth } = useAuthStore();
  const router = useRouter();
  const program = useProgram();

  const authMutation = useMutation({
    mutationFn: async () => {
      if (!publicKey || !signMessage) throw new Error("Wallet not connected");

      const walletAddress = publicKey.toBase58();
      
      // Step 1: Get nonce
      const nonceRes = await axiosInstance.get(`/users/nonce`, {
        params: { wallet: walletAddress },
      });
      const nonce = nonceRes.data.nonce;

      // Step 2: Sign nonce
      const encodedMessage = new TextEncoder().encode(nonce);
      const signedMessage = await signMessage(encodedMessage);
      const signature = bs58.encode(signedMessage);

      // Step 3: Verify signature
      const verifyRes = await axiosInstance.post(`/users/verify`, {
        walletAddress,
        signature,
      });

      return verifyRes.data;
    },
    onSuccess: async ({ token, user }) => {
      setAuth(token, user);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Initialize profile if program is available
      if (program && publicKey) {
        try {
          const result = await program.initializeProfile({ organizer: {} }, publicKey);
          if (result === 'Profile already exists') {
            console.log('Profile already initialized');
          } else {
            toast.success("Profile initialized successfully!");
          }
        } catch (error: any) {
          if (error.message === 'Profile already exists') {
            console.log('Profile already exists, continuing...');
          } else {
            console.error("Profile initialization error:", error);
            toast.error("Failed to initialize profile: " + error.message);
          }
        }
      }

      if(!user.username){
        router.push("/dashboard/settings")
      }
    },
    onError: (error: any) => {
      console.error("❌ Wallet login failed", error.response?.data || error.message);
      clearAuth();
      toast.error("Authentication failed. Please try again.");
    }
  });

  return {
    authenticate: authMutation.mutate,
    isAuthenticating: authMutation.isPending,
    error: authMutation.error,
  };
};
