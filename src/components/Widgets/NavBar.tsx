"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, CloseCircle } from "iconsax-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletAuth } from "@/hooks/useWalletAuth";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Rentals", href: "#" },
    { name: "About Us", href: "/about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { publicKey, connect, disconnect, signMessage } = useWallet();
  const { authenticate, isAuthenticating } = useWalletAuth();
  const { user } = useAuthStore();
  useEffect(() => {
    if (publicKey && !user) {
      console.log("auth");
      authenticate();
    }
    console.log("user", user);
  }, [publicKey, user, authenticate]);

  return (
    <div className="w-full flex justify-center pt-8 pb-4 bg-transparent relative">
      <div className="flex justify-between items-center p-4 gap-10 max-w-7xl mx-4 px-4 py-2 rounded-xl bg-white/10 text-white/80 text-sm font-medium tracking-wide shadow backdrop-blur-md border border-white/10 z-10">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
          EventFi
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>



        {/* Desktop Login Button */}
        <div className="hidden md:block">
          {/* <button className="px-6 py-2 rounded-lg bg-[#845EC2] text-white font-semibold shadow hover:bg-[#6d4fa1] transition-colors text-base cursor-pointer">
            Connect Wallet
          </button> */}

          {publicKey ? (
            // <Button
            //   className="w-[210px] h-10  flex text-[13px] items-center"
            //   onClick={() => disconnect()}
            // >
            //   <WalletFormatter publicKey={publicKey.toString()} />
            // </Button>
            <div className="flex items-center gap-2">
              <Image src={user?.profileImage as string} alt="" unoptimized width={100} height={100} className="rounded-full w-12 h-12 border-4 border-[#845EC2]" />
              <div>
                <p className="">{user?.username}</p>
                <Link href="/dashboard" className="flex text-[12px] text-gray-400 underline items-center">
                    view dashboard
                </Link>
              </div>

            </div>
          ) : (
            <WalletMultiButton children={<div className="!bg-purple-100 !rounded-2xl !text-sm">Connect Wallet</div>}/>
          )}
        </div>
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CloseCircle color="#ffffff" size={24} />
          ) : (
            <Menu color="#ffffff" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg z-20 md:hidden">
          <div className="p-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10">
            {publicKey ? (
            // <Button
            //   className="w-[210px] h-10  flex text-[13px] items-center"
            //   onClick={() => disconnect()}
            // >
            //   <WalletFormatter publicKey={publicKey.toString()} />
            // </Button>
            <div className="flex items-center gap-2">
              <Image src={user?.profileImage as string} alt="" unoptimized width={100} height={100} className="rounded-full w-12 h-12 border-4 border-[#845EC2]" />
              <div>
                <p className="">{user?.username}</p>
                <Link href="/dashboard" className="flex text-[12px] text-gray-400 underline items-center">
                    view dashboard
                </Link>
              </div>

            </div>
          ) : (
            <WalletMultiButton children={<div className="!bg-purple-100  !rounded-2xl !text-sm">Connect Wallet</div>}/>
          )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
