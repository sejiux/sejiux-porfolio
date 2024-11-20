"use client";
import React, { Dispatch, SetStateAction } from 'react';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMenuOrder } from "react-icons/tb";
import Image from 'next/image';
import { GiNinjaStar } from "react-icons/gi";

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({isMenuOpen, setIsMenuOpen}: NavBarProps) => {
  return (
    <nav className={cn("w-full flex justify-center items-center p-10")}>
      <div className={cn("w-full flex items-center justify-between rounded-[10px] gap-4 border border-neutral-600/50 bg-gradient-to-b from-background to-[#151518] py-2 px-4", "lg:w-auto lg:hidden")}>
        <Link href="/" className='flex gap-4 items-center'>
          <Image src="/images/sejiux-logo.png" alt="Logo of SejiuX" width={1080} height={1080} className='size-10'/>
        </Link>
        <p className='font-medium text-xl'>Sejiux Studio</p>
        <button
          className={cn("text-3xl z-50", "lg:hidden")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <GiNinjaStar /> : <TbMenuOrder />}
        </button>
        {/* <div className={cn("hidden", "lg:flex lg:items-center lg:gap-4", "2xl:gap-6")}>
          {socialsData.map((data, index) => (
            <Link key={index} href={data.link} target="_blank" rel="noopener noreferrer" className={cn(
              "p-[2px]",
              "2xl:p-[4px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-lg", 
              "transition-all ease-in border-white/50 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <data.icon className={cn(
                "text-white", 
                "xl:text-xl",
                "2xl:text-2xl",
                "bg-gradient-to-t from-transparent via-black via-50% to-primary p-1 hover:text-primary border border-white/5 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-lg",
                "hover:bg-gradient-b hover:from-primary hover:via-50% hover:via-black hover:to-transparent"
              )} />
            </Link>
          ))}
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
