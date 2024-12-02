"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "@/public/images/sejiux.png";
import { linksData } from '@/data/works';

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({isMenuOpen, setIsMenuOpen}: NavBarProps) => {
  const [isHashLink, setIsHashLink] = useState<string | undefined>("");

  useEffect(() => {
    if(window.location.href.includes(window.location.hash)) {
      setIsHashLink(`/${window.location.hash}`);
    }
  }, []);

  useEffect(() => {
    const sectionsAndHeader = document.querySelectorAll("section[id], header[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setIsHashLink(`/#${id}`);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sectionsAndHeader.forEach((element) => observer.observe(element));
  
    return () => {
      sectionsAndHeader.forEach((element) => observer.unobserve(element));
    };
  }, []);


  return (
    <nav className={cn("w-full flex justify-center items-center px-10 pt-6 fixed z-[55]", "lg:pt-8")}>
      <div className={cn("w-full flex items-center justify-between rounded-[10px] gap-4 border border-neutral-600/50 backdrop-blur-md bg-gradient-to-b from-background/50 to-[#151518] py-3 px-4", "md:w-auto md:hidden")}>
        <Link href="/" className='flex gap-4 items-center'>
          <Image src={Logo} alt="Logo of SejiuX" width={1080} height={1080} className='w-8 h-7'/>
        </Link>
        <p className='font-black text-white/90 text-2xl'>sejiux</p>
        <button
          className={cn("text-2xl", "lg:hidden")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      <div className={cn("hidden w-full items-center justify-between rounded-[10px] gap-2 border border-neutral-600/50 backdrop-blur-md bg-gradient-to-b from-background/50 to-[#151518] p-2", "md:w-auto md:flex")}>
        {linksData.map((data, index) => (
          <Link 
            key={index} 
            href={data.link} 
            onClick={() => setIsHashLink(data.link)}
            className={cn("flex gap-2 items-center text-subtitle/80 rounded-[10px] p-4", "hover:text-white", data.link === isHashLink && "bg-secondary shadow-custom-secondary backdrop-blur-xl hover:bg-primary hover:shadow-custom-primary text-white font-medium")}>
            <data.icon className='text-2xl' />
            <h3>{data.label}</h3>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
