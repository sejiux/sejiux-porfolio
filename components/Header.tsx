"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import NavBar from "./NavBar";
import MarqueeStack from "./MarqueeStack";
import Link from "next/link";
// eslint-disable-next-line import/no-named-as-default
import DotPattern from "./ui/dot-pattern";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import ModalMenu from "./ModalMenu";
import { SiShopify } from "react-icons/si";

const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn("min-h-[100dvh] flex relative flex-col justify-between font-montserrat overflow-hidden")}>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={cn("px-6", "xl:px-10", "2xl:px-14 -mt-20")}>
        <div className={cn("flex flex-col justify-center items-center text-center flex-grow")}>
          <div className={cn("text-center space-y-10", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:max-w-6xl", "2xl:max-w-[1800px] 2xl:space-y-14")}>
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
                      <SiShopify className="text-green-500/80 text-xl" />
                      Unlock Your Brand's Potential
                    </div>
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>
            <h1 className={cn("text-[30px] px-2 leading-tight font-bold", "lg:px-0 lg:text-6xl", "xl:text-[75px] xl:leading-[1.12]", "2xl:text-[100px]", "pointer-events-none whitespace-pre-wrap bg-white bg-clip-text text-center")}>A Memorable Ecommerce Tailored to your Brand</h1>
            <p className={cn("text-base font-light w-full px-4", "lg:px-0 lg:mx-auto text-white/85 lg:pb-2", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Take your brand to the next level with a tailor-made headless store</p>
            <div className="cursor-pointer z-10 h-full text-center font-medium">
              <div className={cn(
                "w-52 h-12 mx-auto",
                "md:w-40 md:h-10",
                "xl:*:text-lg xl:w-60 xl:h-14 p-[2px]",
                "*:2xl:text-2xl 2xl:w-64 2xl:h-20", 
                "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
                "transition-all ease-in border-white/50 bg-transparent"
              )}>
                <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
                  "text-white", 
                  "bg-gradient-to-b from-transparent via-black via-50% to-green-500 border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-base antialiased rounded-full",
                  "hover:bg-gradient-t hover:from-green-500 hover:via-50% hover:via-black hover:to-transparent"
                )}>
                Get in touch
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