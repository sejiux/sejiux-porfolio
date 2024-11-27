import { WhyData } from '@/data/works';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import CardWhy from './card/CardWhy';

const WhyMe = () => {
  return (
    <section className={cn("relative flex flex-col justify-center")}>
      <div className={cn("w-full px-6 text-center space-y-6", "lg:max-w-4xl lg:mx-auto", "xl:px-0 xl:max-w-7xl")}>
        <div className="flex items-center justify-center">
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
                <div className="px-2">
                  <p className={cn("text-sm", "lg:text-base")}>
                  Pourquoi Sejiux ?
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h1 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:px-0 lg:text-6xl",
          "xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Au-Delà De Vos Attentes,<br className="hidden lg:block" /> Plus Loin Que Les Agences</h1>
        {/* absolute left-1/2 transform -translate-x-1/2 */}
        <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[700px]", "xl:text-lg xl:leading-relaxed")}>Découvrez pourquoi ma méthode surpasse les offres des agences conventionnelles.</p>
        <div className={cn("relative pt-14 w-full flex flex-col gap-8", "lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-between")}>
          <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-50 top-[65px] border-b p-4 w-auto bg-gradient-to-t from-transparent to-secondary rounded-[10px] mx-auto'>VS</div>
          {WhyData.map((data, index) => (
            <CardWhy
              key={index}
              lists={data.lists}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;