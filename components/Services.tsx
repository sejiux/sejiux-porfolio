import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';

export const experimental_ppr = true;

const Services = () => {
  return (
    <section className={cn("flex flex-col justify-center pb-44")}>
      <div className={cn("px-6 text-center space-y-6", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:px-10 xl:max-w-full", "2xl:max-w-[1800px] 2xl:space-y-14 2xl:px-14")}>
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
                  "2xl:text-lg"
                )}>
                <div className="px-2">
                  <p className={cn("text-sm", "lg:text-base")}>
                  Rejoignez la révolution
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h1 className={cn(
          "text-[28px] px-2 leading-tight font-semibold",
          "lg:px-0 lg:text-6xl",
          "xl:text-[55px] xl:leading-[1.2]",
          "2xl:text-[100px]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center"
        )}>L’avènement d’une nouvelle <br className="hidden lg:block" /> ère pour votre Boutique</h1>
        <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-white/65 lg:pb-2 lg:w-[700px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Découvrez comment je redéfinis l’e-commerce avec Shopify Headless en apportant des solutions uniques et une forte valeur ajoutée pour votre marque.</p>
      </div>
    </section>
  );
};

export default Services;