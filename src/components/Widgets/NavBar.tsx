import Link from "next/link";
import React from "react";

const NavBar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Rentals", href: "#" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <div className="w-full flex justify-center pt-8 pb-4 bg-transparent" >
      <div className="flex justify-between items-center p-4 w-fit gap-10 mb-4 px-2 py-2 rounded-xl bg-white/10 text-white/80 text-sm font-medium tracking-wide shadow backdrop-blur-md border border-white/10 z-10">
        <div className="text-2xl font-extrabold text-white tracking-tight mr-6">EventFi</div>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link href={link.href}>{link.name}</Link>
          ))}
        </div>

        <div className="px-6 py-2 rounded-lg bg-[#845EC2] text-white font-semibold shadow hover:bg-[#6d4fa1] transition-colors text-base cursor-pointer">
            Login
        </div>
      </div>
    </div>
  );
};

export default NavBar;
