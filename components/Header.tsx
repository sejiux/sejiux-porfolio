"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import NavBar from "./NavBar";
import MarqueeStack from "./MarqueeStack";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import ModalMenu from "./ModalMenu";
import GridPattern from "./ui/grid-pattern";
import { Spotlight } from "./ui/Spotlight";

const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn("min-h-[100dvh] flex relative flex-col justify-between font-montserrat overflow-hidden")}>
      <Spotlight className="absolute -top-10 left-40 lg:left-1/4 transform -translate-x-1/2 scale-150 fill-primary/50" fill="primary" />
      <Spotlight className="absolute top-0 left-10 lg:left-36 transform translate-x-1/4 scale-75 fill-primary/50" fill="primary" />
      <Spotlight className="absolute top-10 -left-20 lg:left-[35%] transform translate-x-1/4 scale-150 fill-primary/50" fill="primary" />
      <GridPattern />
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={cn("px-6", "xl:px-10", "2xl:px-14 -mt-20")}>
        <div className={cn("flex flex-col justify-center items-center text-center flex-grow")}>
          <div className={cn("text-center space-y-10", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:max-w-full", "2xl:max-w-[1800px] 2xl:space-y-14")}>
            <div className="z-10 flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-[#111219] hover:bg-neutral-800 h-10",
                )}
              >
                <Button
                  borderRadius="1.75rem"
                >
                  <AnimatedShinyText 
                    className={cn(
                      "inline-flex items-center justify-center px-4 py-0 transition ease-out hover:duration-300 hover:text-neutral-400",
                      "text-sm",
                      "md:text-sm",
                      "2xl:text-lg"
                    )}>
                    <div className="flex gap-3 items-center">
                      <p className={cn("text-[16px] flex gap-1")}>
                        Votre vision, sans limites
                      </p>
                    </div>
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>
            <h1 className={cn(
              "text-[32px] px-2 leading-tight font-bold",
              "lg:px-0 lg:text-6xl",
              "xl:text-6xl xl:leading-[1.2]",
              "2xl:text-[100px]",
              "pointer-events-none whitespace-pre-wrap",
              "bg-gradient-to-b from-white/70 via-white via-50% to-white/70 bg-clip-text text-transparent text-center"
            )}>Boutiques Headless Mémorables<br className="hidden lg:block" /> pour les Marques</h1>
            <p className={cn("text-base font-light w-full px-4", "lg:px-0 lg:mx-auto text-white/85 lg:pb-2", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Nous sommes prêts à commencer, tout ce que vous avez à faire est de demander.</p>
            <div className="cursor-pointer z-10 h-full text-center font-medium">
              <div className={cn(
                "w-52 h-12 mx-auto",
                "md:w-40 md:h-10",
                "xl:*:text-lg xl:w-60 xl:h-14 p-[2px]",
                "*:2xl:text-2xl 2xl:w-64 2xl:h-20", 
                "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-2xl", 
                "transition-all ease-in border-white/50 bg-transparent"
              )}>
                <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
                  "text-white", 
                  "bg-gradient-to-b from-transparent via-black via-50% to-primary border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-base antialiased rounded-2xl",
                  "hover:bg-gradient-t hover:from-primary hover:via-50% hover:via-black hover:to-transparent"
                )}>
                Entrez en contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <DotPattern
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
        /> */}
        {/* <div className={cn("hidden", "md:block")}>
          <RadialGradient className="-z-50"/>
        </div>
        <div>
          <RadialGradient size={180} className="opacity-50 md:hidden -z-50" />
          <RadialGradient size={170} className="md:hidden -z-50"/>
        </div> */}
      </div>

      <MarqueeStack />
      <ModalMenu pathname={pathname} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default HeaderPage;