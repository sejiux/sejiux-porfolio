"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import NavBar from "./NavBar";
import MarqueeStack from "./MarqueeStack";
import RadialGradient from "./ui/radial-gradient";
import Link from "next/link";
// eslint-disable-next-line import/no-named-as-default
import DotPattern from "./ui/dot-pattern";

const Header = () => {
  return (
    <header className={cn("min-h-screen flex relative flex-col justify-between font-montserrat overflow-hidden")}>
      <NavBar />
      <div className={cn("px-6", "xl:px-10")}>
        <div className={cn("flex flex-col justify-center items-center text-center flex-grow")}>
          <div className={cn("text-center space-y-8", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:max-w-6xl", "2xl:max-w-[1800px] 2xl:space-y-14")}>
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
                      "md:text-sm",
                      "2xl:text-lg"
                    )}>
                    Art, Design & Development
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>
            <h1 className={cn("text-4xl font-medium", "xs:", "sm:", "md:", "lg:text-6xl", "xl:text-[80px]", "2xl:text-[120px]", "pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center font-semibold leading-none text-transparent from-white to-violet-500/50")}>Creation of Digital Products and Immersive Art</h1>
            <p className={cn("text-sm font-light", "lg:max-w-xl lg:mx-auto", "xl:text-base", "2xl:text-xl 2xl:max-w-4xl")}>Hey👋, I'm Selim Baouz, a FullStack Developer from the French Riviera with a strong passion for UX / UI Design and Architectural Visualization.</p>
            <div className="cursor-pointer z-10 h-full text-center font-medium">
              <div className={cn(
                "w-40 h-10 mx-auto",
                "xl:*:text-lg xl:w-48 xl:h-14 p-[2px]",
                "*:2xl:text-2xl 2xl:w-64 2xl:h-20", 
                "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
                "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
              )}>
                <Link href="/works" prefetch={true} className={cn(
                  "text-neutral-400/50", 
                  "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full",
                )}>
                Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <RadialGradient origin="top left" size={500} className="opacity-60" />
      <RadialGradient origin="top right" size={500} className="opacity-60" /> */}
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] -z-10 opacity-35",
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10 opacity-35",
          )}
        />
        <div className={cn("hidden", "md:block")}>
          <RadialGradient />
        </div>
        <div>
          <RadialGradient size={150} className="opacity-50 md:hidden" />
          <RadialGradient size={150} className="md:hidden"/>
        </div>
      </div>
      <MarqueeStack />
    </header>
  );
};

export default Header;