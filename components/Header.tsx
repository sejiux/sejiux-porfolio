"use client";

import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GridPattern from "./ui/grid-pattern";
import { SiShopify } from "react-icons/si";
import NavBar from "./NavBar";
import { useState } from "react";
import { ModalMenu } from "./ModalMenu";
import MarqueeStack from "@/components/MarqueeStack";

const HeaderPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <header id="home" className={cn("overflow-hidden min-h-[100svh] flex relative flex-col justify-between", "md:min-h-full md:gap-36", "xl:justify-center", "2xl:min-h-full 2xl:gap-36")}>
      <GridPattern gradient />
      <div className="h-10">
        <NavBar isMenuOpen={isOpenModal} setIsMenuOpen={setIsOpenModal} />
      </div>
      <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-2xl", "xl:px-10 xl:max-w-full")}>
        <div className="z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full text-base text-white transition-all ease-in hover:cursor-pointer bg-transparent hover:bg-neutral-800 h-12",
            )}
          >
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-b from-background to-[#151518]"
            >
              <AnimatedShinyText 
                className={cn(
                  "inline-flex items-center justify-center px-4 py-0 transition ease-out hover:duration-300 hover:text-neutral-400 text-white/70 font-normal",
                  "text-sm",
                  "md:text-sm",
                )}>
                <div className="flex gap-3 items-center lg:px-2">
                  <div className="rounded-full border-b border-neutral-600/50 bg-gradient-to-b from-background to-[#151518] p-1.5">
                    <SiShopify className={cn("text-lg text-primary")} />
                  </div>
                  <p className={cn("text-sm flex gap-1", "lg:text-base")}>
                        Partenaire Shopify Dev
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h1 className={cn(
          "text-[28px] px-2 leading-tight font-semibold",
          "lg:px-0 lg:text-[38px]",
          "xl:text-6xl xl:leading-[1.3]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Une Boutique qui Transforme<br className="hidden lg:block" /> chaque visiteur en Client</h1>
        
        <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed xl:w-[700px]")}>Je crée des boutiques avec un taux de conversion si élevé que vos visiteurs se sentiront bêtes de refuser votre offre.</p>
        <div className={cn("pt-4")}>
          <Link href="https://cal.com/sejiux/appel-de-decouverte" target="_blank" rel="preload" className={cn(
            "text-white font-medium", 
            "w-[80%] h-12 mx-auto",
            "md:w-[60%] md:h-14",
            "lg:w-60",
            "p-[1px]",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
            "hover:bg-primary hover:shadow-custom-primary",
          )}>
                Réserver votre appel
          </Link>
        </div>
      </div>
      <div className="-space-y-5 mb-4">
        <MarqueeStack />
        <MarqueeStack reverse />
      </div>
      {isOpenModal && (
        <ModalMenu
          isMenuOpen={isOpenModal}
          setIsMenuOpen={setIsOpenModal}
        />
      )}
    </header>
  );
};

export default HeaderPage;