import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { Wallet } from "@/context/WalletProvider";
import { WalletContextProvider } from "@/context/WalletContextProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eventfi",
  description: "Eventfi is a decentralized platform for creating and managing events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefin.className} antialiased`}
      >
        <QueryProvider>
          <Wallet>
              <WalletContextProvider>
                {children}
              </WalletContextProvider>
          </Wallet>
        </QueryProvider>
      </body>
    </html>
  );
}
