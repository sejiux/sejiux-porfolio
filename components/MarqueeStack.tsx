"use client";
import Marquee from "@/components/ui/marquee";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender } from "react-icons/si";

const MarqueeStack = () => {
  return (
    <div className={cn("relative mx-auto w-full h-[70px] z-10", "lg:h-32", "xl:h-24")}>
      <div>
        <div className="absolute inset-x-10 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-24 lg:inset-x-64 xl:inset-x-[700px] top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-24 lg:inset-x-64 xl:inset-x-[700px] top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />
      </div>
    
      <div className="flex flex-col justify-center items-center w-full h-full border-b">
        <div className={cn("absolute z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl", "lg:max-w-2xl", "xl:max-w-7xl")}>
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className={cn("flex items-center gap-10 px-3", "xl:gap-20 xl:px-8")}>
              <FaHtml5 className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <FaCss3 className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <SiTypescript className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <FaReact className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <SiNextdotjs className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <SiZod className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <SiPrisma className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <FaFigma className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
              <SiBlender className={cn("text-[22px]", "lg:text-3xl", "xl:text-3xl")} />
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black" />
        </div>
                
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
    
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"/>
      </div>
      {/* <div>
          <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-px w-3/4" />
          <div className="absolute lg:inset-x-64 xl:inset-x-[450px] bottom-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute lg:inset-x-64 xl:inset-x-[450px] bottom-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />
        </div> */}
    </div>
  );
};

export default MarqueeStack;