"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender } from "react-icons/si";

const Header = () => {
  return (
    <main className={cn("min-h-screen px-6 font-montserrat overflow-hidden")}>
      <div className={cn("flex flex-col justify-center items-center text-center h-[80vh]",  "lg:h-[88.6vh]", "xl:h-[82.7vh]")}>
        <div className={cn("text-center space-y-8", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:max-w-6xl")}>
          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800",
              )}
            >
              <Button
                borderRadius="1.75rem"
              >
                <AnimatedShinyText 
                  className={cn(
                    "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400",
                    "text-xs",
                    "md:text-base",
                  )}>
                    Art, Design & Development
                </AnimatedShinyText>
              </Button>
            </div>
          </div>
          <h1 className={cn("text-4xl font-medium", "xs:", "sm:", "md:", "lg:text-6xl", "xl:text-[80px]", "pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center font-semibold leading-none text-transparent from-white to-violet-500/50")}>Creation of Digital Products and Immersive Art</h1>
          <p className={cn("text-sm font-light", "lg:max-w-xl lg:mx-auto", "xl:text-base")}>Hey👋, I'm Selim, a fullstack developer from the French Riviera with a strong passion for ux / ui design and architectural visualization.</p>
          <div className="cursor-pointer z-10 h-full text-center font-medium">
            <button className={cn(
              "w-28 h-10",
              "xl:*:text-lg xl:w-48 xl:h-14 p-[2px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <p className={cn(
                "text-neutral-400/50", 
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )}>
                Get Started
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className={cn("relative mx-auto", "lg:max-w-2xl lg:h-32", "xl:max-w-6xl xl:h-40 pb-2")}>
        <div>
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-violet-800 to-transparent h-px w-3/4" />
          <div className="absolute lg:inset-x-64 xl:inset-x-[450px] top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute lg:inset-x-64 xl:inset-x-[450px] top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />
        </div>
    
        <div className="flex flex-col justify-center items-center w-full h-full border-b">
          <div className={cn("absolute z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl", "lg:max-w-2xl", "xl:max-w-7xl")}>
            <Marquee pauseOnHover className="[--duration:20s]">
              <div className={cn("flex items-center gap-10 px-3", "xl:gap-20 xl:px-8")}>
                <FaHtml5 className={cn("lg:text-5xl", "xl:text-5xl")} />
                <FaCss3 className={cn("lg:text-5xl", "xl:text-5xl")} />
                <SiTypescript className={cn("lg:text-5xl", "xl:text-5xl")} />
                <FaReact className={cn("lg:text-5xl", "xl:text-5xl")} />
                <SiNextdotjs className={cn("lg:text-5xl", "xl:text-5xl")} />
                <SiZod className={cn("lg:text-5xl", "xl:text-5xl")} />
                <SiPrisma className={cn("lg:text-5xl", "xl:text-5xl")} />
                <FaFigma className={cn("lg:text-5xl", "xl:text-5xl")} />
                <SiBlender className={cn("lg:text-5xl", "xl:text-5xl")} />
              </div>
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
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
      {/* <NeonGradientCard borderRadius={100} borderSize={0} className="items-center justify-center text-center absolute -bottom-[700px]" /> */}
    </main>
  );
};

export default Header;