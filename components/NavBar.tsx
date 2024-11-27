"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "@/public/images/sejiux.png";
import { linksData } from '@/data/works';
import { usePathname } from 'next/navigation';

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({isMenuOpen, setIsMenuOpen}: NavBarProps) => {
  const [isHashLink, setIsHashLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if(window.location.href.includes(window.location.hash)) {
      setIsHashLink(`/${window.location.hash}`);
    }
  }, []);


  return (
    <nav className={cn("w-full flex justify-center items-center px-10 pt-6 fixed z-40")}>
      <div className={cn("w-full flex items-center justify-between rounded-[10px] gap-4 border border-neutral-600/50 backdrop-blur-md bg-gradient-to-b from-background/50 to-[#151518] py-3 px-4", "lg:w-auto lg:hidden")}>
        <Link href="/" className='flex gap-4 items-center'>
          <Image src={Logo} alt="Logo of SejiuX" width={1080} height={1080} className='w-8 h-7'/>
        </Link>
        <p className='font-black text-white/90 text-2xl'>sejiux</p>
        <button
          className={cn("text-2xl z-50", "lg:hidden")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      <div className={cn("hidden w-full items-center justify-between rounded-[10px] gap-2 border border-neutral-600/50 backdrop-blur-md bg-gradient-to-b from-background/50 to-[#151518] p-2", "lg:w-auto lg:flex")}>
        {linksData.map((data, index) => (
          <Link 
            key={index} 
            href={data.link} 
            onClick={() => setIsHashLink(data.link)}
            className={cn("text-subtitle/80 rounded-[10px] px-8 py-4", "hover:text-white", !isHashLink && data.link === pathname || data.link === isHashLink && "bg-secondary shadow-custom-secondary backdrop-blur-xl hover:bg-primary hover:shadow-custom-primary text-white font-medium")}>
            <h3>{data.label}</h3>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
