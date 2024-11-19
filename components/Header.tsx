"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import MarqueeStack from "./MarqueeStack";
import Link from "next/link";
import GridPattern from "./ui/grid-pattern";
import { SiShopify } from "react-icons/si";
/* import { Spotlight } from "./ui/Spotlight"; */

const HeaderPage = () => {

  return (
    <header className={cn("min-h-[100svh] flex relative flex-col justify-between font-montserrat overflow-hidden")}>
      {/* <Spotlight className="absolute -top-10 left-40 lg:left-1/4 transform -translate-x-1/2 scale-150 fill-primary/50" fill="primary" />
      <Spotlight className="absolute top-0 left-10 lg:left-36 transform translate-x-1/4 scale-75 fill-primary/50" fill="primary" />
      <Spotlight className="absolute top-10 -left-20 lg:left-[35%] transform translate-x-1/4 scale-150 fill-primary/50" fill="primary" /> */}
      <GridPattern />
      {/* <Image src={SejiuxLogo} alt="Logo" width={1080} height={1080} className="mx-auto w-28 h-28 mt-10"/> */}
      <div></div>
      <div className={cn("px-6", "xl:px-10", "2xl:px-14")}>
        <div className={cn("flex flex-col justify-center items-center text-center flex-grow")}>
          <div className={cn("text-center space-y-10", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:max-w-full", "2xl:max-w-[1800px] 2xl:space-y-14")}>
            <div className="z-10 flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full text-base text-white transition-all ease-in hover:cursor-pointer bg-transparent hover:bg-neutral-800 h-12",
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
                      <div className="border rounded-full border-neutral-700 p-1">
                        <SiShopify className="text-xl text-secondary" />
                      </div>
                      <p className={cn("text-[16px] flex gap-1")}>
                        Partenaire Shopify
                      </p>
                    </div>
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>
            <div className={cn("space-y-6 pb-4")}>
              <h1 className={cn(
                "text-[28px] px-2 leading-tight font-bold",
                "lg:px-0 lg:text-6xl",
                "xl:text-6xl xl:leading-[1.2]",
                "2xl:text-[100px]",
                "pointer-events-none whitespace-pre-wrap",
                "bg-gradient-to-b from-white/70 via-white via-50% to-white/70 bg-clip-text text-transparent text-center"
              )}>Une Boutique Mémorable<br className="hidden lg:block" /> pour votre Marque</h1>
              <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-white/65 lg:pb-2 lg:w-[700px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Je crée votre boutique sur-mesure avec Shopify Headless, conçues pour booster vos conversions, optimiser votre SEO et maximiser vos performances.</p>
            </div>
            <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
              "text-white", 
              "w-56 h-12 mx-auto",
              "md:w-40 md:h-10",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-primary hover:shadow-custom-primary",
            )}>
                Entrez en contact
            </Link>
          </div>
        </div>
      </div>
      <div className="-space-y-5 mb-4">
        <MarqueeStack />
        <MarqueeStack reverse />
      </div>
    </header>
  );
};

export default HeaderPage;