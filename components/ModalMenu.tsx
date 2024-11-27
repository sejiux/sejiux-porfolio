"use client";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { linksData, socialsData } from "@/data/works";

import { cn } from "@/lib/utils";


interface ModalMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}

export function ModalMenu({ isMenuOpen, setIsMenuOpen, pathname }: ModalMenuProps) {
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleStopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 lg:hidden w-full h-[100dvh] text-center bg-background bg-opacity-65 backdrop-blur-md z-50"
          onClick={handleCloseMenu}
        >
          <div
            className="pt-6 relative w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center"
            onClick={handleStopPropagation}
          >
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="space-y-2 flex flex-col">
                {linksData.map((data, index) => (
                  <Link
                    key={index}
                    href={data.link}
                    className={`text-4xl font-bold font-montserrat p-2 ${
                      pathname === data.link
                        ? "text-white"
                        : "text-neutral-400/50"
                    }`}
                  >
                    {data.label}
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full z-50 p-8">
                <motion.div
                  initial={{ x: -70, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -70, opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.2 }}
                >
                  <div className="flex justify-evenly items-end">
                    {socialsData.map((data, index) => (
                      <Link
                        key={index}
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "p-[2px]",
                          "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-lg", 
                          "transition-all ease-in",
                          "border-[0.1px] border-neutral-600/50 bg-gradient-to-b from-background to-[#151518] rounded-[10px] p-3",
                          "hover:bg-gradient-to-b hover:from-secondary hover:to-primary"
                        )}
                      >
                        <data.icon className="text-white flex items-center justify-center w-full h-full text-xl antialiased" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
