"use client";
import Marquee from "@/components/ui/marquee";
import { stacksData } from "@/data/works";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MarqueeStack = ({reverse}: {reverse?: boolean}) => {
  return (
    <div className={cn("relative mx-auto w-full h-[80px] z-10", "lg:h-32", "xl:h-24", "2xl:h-32")}>
      {/* <div>
        <div className={cn("absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-[2px] w-3/4 blur-sm", "lg:inset-x-20", "2xl:inset-x-28")}/>
        <div className={cn("absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-px w-3/4", "lg:inset-x-20", "2xl:inset-x-28")} />
        <div className={cn("absolute inset-x-[160px] top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm", "lg:inset-x-64", "xl:inset-x-[700px]", "2xl:inset-x-[900px]")} />
        <div className={cn("absolute inset-x-[160px] top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4", "lg:inset-x-64", "xl:inset-x-[700px]", "2xl:inset-x-[900px]")} />
      </div> */}
    
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className={cn("absolute z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl", "lg:max-w-2xl", "xl:max-w-7xl", "2xl:max-w-[1200px]")}>
          <Marquee pauseOnHover className="[--duration:20s]" reverse={reverse}>
            <div className={cn("flex items-center gap-6 px-2", "xl:gap-12 xl:px-4")}>
              {
                stacksData.map((data, index) => (
                  <Link key={index} href={data.link} target="_blank" rel="noopener noreferrer" className={cn(
                    "border-[0.1px] border-neutral-600/50 bg-gradient-to-b from-background to-[#151518] rounded-[10px] p-3",
                    "hover:bg-gradient-to-b hover:from-primary hover:to-secondary"
                  )}>
                    <data.icon key={index} className={cn("text-xl text-white/70", "lg:text-[28px]", "2xl:text-5xl")} />
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
    
        <div className={cn("absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,background)]", "2xl:[mask-image:radial-gradient(450px_400px_at_top,transparent_20%,background)]")} />
      </div>
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