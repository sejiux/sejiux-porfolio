"use client";
import { linksData } from "@/data/works";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { SparklesCore } from "./ui/sparkles";

const NavBar = () => {
  return (
    <nav className={cn("w-full p-6", "px-10", "2xl:py-10")}>
      <div className={cn("flex justify-center lg:justify-between lg:items-center")}>
        <Link href="/" target="_blank" rel="noopener noreferrer" className={cn(
          "relative *:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-2xl", 
          "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
        )}>
          <Button
            borderRadius="1rem"
            className="relative"
          >
            <AnimatedShinyText
              className={cn(
                "inline-flex items-center justify-center px-2 py-2 transition ease-out hover:duration-300 hover:text-neutral-400",
              )}>
              <div className="space-y-1.5 p-2">
                <div className={cn("rounded-full w-7 h-3 ml-4 bg-white border-2 border-violet-500")} />
                <div className={cn("rounded-full w-7 h-3 bg-white border-2 border-violet-800")} />
              </div>
            </AnimatedShinyText>
            <SparklesCore
              id="2"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full absolute"
              particleColor="#FFFFFF"
            />
          </Button>
        </Link>
        <div className={cn("hidden", "lg:flex lg:items-center lg:gap-4", "2xl:gap-6")}>
          {linksData.map((data, index) => (
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