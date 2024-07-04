"use client";
import Marquee from "@/components/ui/marquee";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiThreedotjs } from "react-icons/si";

const MarqueeStack = () => {
  return (
    <div className={cn("relative mx-auto w-full h-[70px] z-10", "lg:h-32", "xl:h-24", "2xl:h-32")}>
      <div>
        <div className={cn("absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-[2px] w-3/4 blur-sm", "lg:inset-x-20", "2xl:inset-x-28")}/>
        <div className={cn("absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-px w-3/4", "lg:inset-x-20", "2xl:inset-x-28")} />
        <div className={cn("absolute inset-x-[160px] top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm", "lg:inset-x-64", "xl:inset-x-[700px]", "2xl:inset-x-[900px]")} />
        <div className={cn("absolute inset-x-[160px] top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4", "lg:inset-x-64", "xl:inset-x-[700px]", "2xl:inset-x-[900px]")} />
      </div>
    
      <div className="flex flex-col justify-center items-center w-full h-full border-b">
        <div className={cn("absolute z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl", "lg:max-w-2xl", "xl:max-w-7xl", "2xl:max-w-[1200px]")}>
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className={cn("flex items-center gap-10 px-3", "xl:gap-20 xl:px-8")}>
              <FaHtml5 className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <FaCss3 className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiTypescript className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <FaReact className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiNextdotjs className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiZod className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiPrisma className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiGreensock className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiThreedotjs className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiGit className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <FaFigma className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
              <SiBlender className={cn("text-[22px]", "lg:text-3xl", "2xl:text-5xl")} />
            </div>
          </Marquee>
          <div className={cn("pointer-events-none absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-black")} />
          <div className={cn("pointer-events-none absolute inset-y-0 right-0 w-2/4 bg-gradient-to-l from-black")} />
        </div>
                
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
    
        <div className={cn("absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]", "2xl:[mask-image:radial-gradient(450px_400px_at_top,transparent_20%,white)]")} />
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