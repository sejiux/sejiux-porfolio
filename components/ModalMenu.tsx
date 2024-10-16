"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from 'framer-motion';
import { linksData, socialsData } from "@/data/works";
import { Dispatch, SetStateAction } from "react";

interface ModalMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
    pathname: string;
}
const ModalMenu = ({isMenuOpen, setIsMenuOpen, pathname}: ModalMenuProps) => {
  return (
    <>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute lg:hidden w-full h-[100dvh] text-center bg-black bg-opacity-65 backdrop-blur-md z-30"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -150, opacity: 0 }}
            className="pt-6 relative w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2 flex flex-col">
              {linksData.map((data, index) => (
                <Link key={index} href={data.link} className={cn(
                  "text-4xl font-bold font-montserrat p-2",
                  pathname === data.link ? "text-white" : "text-neutral-400/50"
                )}>
                  {data.label}
                </Link>
              ))}
            </div>
            <motion.div 
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -70, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              className="absolute bottom-0 w-full flex justify-evenly items-end z-50 p-6">
              {socialsData.map((data, index) => (
                <Link key={index} href={data.link} target="_blank" rel="noopener noreferrer" className={cn(
                  "p-[2px]",
                  "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
                  "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
                )}>
                  <data.icon className={cn(
                    "text-white", 
                    "bg-gradient-to-t from-transparent via-black via-50% to-green-500 p-1 hover:text-green-500 border border-white/5 backdrop-blur-xl flex items-center justify-center w-full h-full text-xl antialiased rounded-full",
                    "2xl:text-2xl",
                    "hover:bg-gradient-b hover:from-green-500 hover:via-50% hover:via-black hover:to-transparent",
                  )} />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ModalMenu;