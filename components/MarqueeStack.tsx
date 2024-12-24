"use client";
import Marquee from "@/components/ui/marquee";
import { stacksData } from "@/data/works";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface MarqueeStackProps {
  reverse?: boolean;
  title?: boolean;
}
const MarqueeStack: FC<MarqueeStackProps> = ({
  reverse,
  title
}) => {
  const [shiftedData, setShiftedData] = useState(stacksData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  useEffect(() => {
    const shuffled = [...stacksData].sort(() => Math.random() - 0.5);
    setShiftedData(shuffled);
  }, []); 
  
  if (!isMounted) return null;
  return (
    <div className={cn("relative mx-auto w-full h-[80px] z-10", "lg:h-24")}>
      {/* <div>
        <div className={cn("absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-[2px] w-3/4 blur-sm", "lg:inset-x-20")}/>
        <div className={cn("absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-px w-3/4", "lg:inset-x-20")} />
        <div className={cn("absolute inset-x-[160px] top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm", "lg:inset-x-64", "xl:inset-x-[700px]")} />
        <div className={cn("absolute inset-x-[160px] top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4", "lg:inset-x-64", "xl:inset-x-[700px]")} />
      </div> */}
      {isMounted && (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className={cn("absolute z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl", "lg:max-w-2xl", "xl:max-w-7xl")}>
            <Marquee pauseOnHover className={cn("[--duration:28s]", title && "[--duration:60s]")} reverse={reverse}>
              <div className={cn("flex items-center gap-6 px-2", "lg:gap-12 lg:px-4", 
                title && "gap-3 px-0 lg:gap-4 lg:px-2"
              )}>
                {
                  shiftedData.map((data, index) => (
                    <Link key={index} href={data.link} target="_blank" rel="preload" className={cn(
                      "border-[0.1px] border-neutral-600/50 bg-gradient-to-b from-background to-[#151518] rounded-[10px] p-3",
                      "hover:bg-gradient-to-b hover:from-secondary hover:to-primary",
                      title && "flex gap-3 items-center px-6"
                    )}>
                      <data.icon key={index} className={cn("text-xl text-white/70", "lg:text-[28px]", title && "lg:text-2xl")} />
                      {title && <p className="font-medium py-2 text-lg">{data.name}</p>}
                    </Link>
                  ))
                }
              </div>
            </Marquee>
            <div className={cn("pointer-events-none absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-background")} />
            <div className={cn("pointer-events-none absolute inset-y-0 right-0 w-2/4 bg-gradient-to-l from-background")} />
          </div>
                
          {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}
    
          <div className={cn("absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,background)]")} />
        </div>
      )}
    
      {/* <div>
          <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-px w-3/4" />
          <div className="absolute lg:inset-x-64 xl:inset-x-[450px] bottom-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute lg:inset-x-64 xl:inset-x-[450px] bottom-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />
        </div> */}
    </div>
  );
};

export default MarqueeStack;