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
import { useState } from "react";
import { usePathname } from 'next/navigation';
import ModalMenu from "./ModalMenu";

const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn("min-h-[100dvh] flex relative flex-col justify-between font-montserrat overflow-hidden")}>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={cn("px-6", "xl:px-10", "2xl:px-14")}>
        <div className={cn("flex flex-col justify-center items-center text-center flex-grow")}>
          <div className={cn("text-center space-y-10", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:max-w-7xl", "2xl:max-w-[1800px] 2xl:space-y-14")}>
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
                      "text-sm",
                      "md:text-sm",
                      "2xl:text-lg"
                    )}>
                    Design & Developpement
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>
            <h1 className={cn("text-[35px] px-2", "lg:px-0 lg:text-6xl", "xl:text-[80px] xl:leading-[1.12]", "2xl:text-[100px]", "pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center font-semibold leading-none text-transparent from-white to-violet-500/50")}>Création World-Class de Produits Digitaux</h1>
            <p className={cn("text-base font-light w-full px-4", "lg:px-0 lg:max-w-xl lg:mx-auto text-white/85", "xl:text-lg xl:leading-relaxed", "2xl:text-xl 2xl:max-w-4xl")}>Modernisez votre présence en ligne avec des sites web modernes et memorables.</p>
            <div className="cursor-pointer z-10 h-full text-center font-medium">
              <div className={cn(
                "w-52 h-12 mx-auto",
                "md:w-40 md:h-10",
                "xl:*:text-lg xl:w-60 xl:h-14 p-[2px]",
                "*:2xl:text-2xl 2xl:w-64 2xl:h-20", 
                "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
                "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
              )}>
                <Link href="/works" prefetch={true} className={cn(
                  "text-neutral-400/50", 
                  "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-base antialiased rounded-full",
                )}>
                Voir Mon Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_left,black,transparent,transparent)] -z-10 opacity-35",
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,black,transparent,transparent)] -z-10 opacity-35",
          )}
        />
        <div className={cn("hidden", "md:block")}>
          <RadialGradient className="-z-50"/>
        </div>
        <div>
          <RadialGradient size={180} className="opacity-50 md:hidden -z-50" />
          <RadialGradient size={170} className="md:hidden -z-50"/>
        </div>
      </div>

      <MarqueeStack />
      <ModalMenu pathname={pathname} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default HeaderPage;