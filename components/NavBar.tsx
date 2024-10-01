"use client";
import React, { Dispatch, SetStateAction } from 'react';
import { socialsData } from "@/data/works";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMenuOrder } from "react-icons/tb";

import Image from 'next/image';
import Logo from "@/public/images/Logo_transparent.png";
import { GiNinjaStar } from "react-icons/gi";

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({isMenuOpen, setIsMenuOpen}: NavBarProps) => {
  return (
    <nav className={cn("w-full p-6 z-50", "px-8", "2xl:py-10")}>
      <div className={cn("flex justify-between items-center")}>
        <Link href="/" className='flex gap-4 items-center'>
          <Image src={Logo} alt="Logo of SejiuX" width={50} height={50} />
          <p className={cn('font-black font-montserrat text-2xl hidden lg:block')}>SejiuX</p>
        </Link>
        <button
          className={cn("text-3xl", "lg:hidden")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <GiNinjaStar /> : <TbMenuOrder />}
        </button>
        <div className={cn("hidden", "lg:flex lg:items-center lg:gap-4", "2xl:gap-6")}>
          {socialsData.map((data, index) => (
            <Link key={index} href={data.link} target="_blank" rel="noopener noreferrer" className={cn(
              "p-[2px]",
              "2xl:p-[4px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/50 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <data.icon className={cn(
                "text-white", 
                "xl:text-xl",
                "2xl:text-3xl",
                "bg-gradient-to-t from-transparent via-black via-50% to-green-500 p-1 hover:text-green-500 border border-white/5 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full",
                "hover:bg-gradient-b hover:from-green-500 hover:via-50% hover:via-black hover:to-transparent"
              )} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
