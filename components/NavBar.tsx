"use client";
import React, { Dispatch, SetStateAction } from 'react';
import { socialsData } from "@/data/works";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({isMenuOpen, setIsMenuOpen}: NavBarProps) => {
  return (
    <nav className={cn("w-full p-6 z-50", "px-10", "2xl:py-10")}>
      <div className={cn("flex justify-between items-center")}>
        <Link href="/">
          <p className={cn('font-bold text-2xl')}>sejiux</p>
        </Link>
        <button
          className={cn("text-3xl", "lg:hidden")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoCloseOutline /> : <TbMenu />}
        </button>
        <div className={cn("hidden", "lg:flex lg:items-center lg:gap-4", "2xl:gap-6")}>
          {socialsData.map((data, index) => (
            <Link key={index} href={data.link} target="_blank" rel="noopener noreferrer" className={cn(
              "p-[2px]",
              "2xl:p-[4px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <data.icon className={cn(
                "text-neutral-400/50", 
                "xl:text-xl",
                "2xl:text-3xl",
                "bg-gradient-to-r p-1 from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )} />
            </Link>
          ))}
          <div className="cursor-pointer z-10 h-full text-center font-medium">
            <div className={cn(
              "w-28 h-10 mx-auto",
              "xl:*:text-sm xl:w-28 xl:h-10 p-[2px]", 
              "*:2xl:text-xl 2xl:w-48 2xl:h-14", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <Link href="mailto:slmrsv.bz@gmail.com" className={cn(
                "text-neutral-400/50", 
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
