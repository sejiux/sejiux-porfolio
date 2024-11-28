import { WhyData } from '@/data/works';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import CardWhy from './card/CardWhy';

const WhyMe = () => {
  return (
    <section className={cn("relative flex flex-col justify-center")}>
      <div className={cn("w-full px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-2xl lg:mx-auto", "xl:px-0 xl:max-w-7xl")}>
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
        <h2 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:text-4xl",
          "xl:px-0 xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Au-Delà De Vos Attentes,<br className="hidden lg:block" /> Plus Loin Que Les Agences</h2>
        {/* absolute left-1/2 transform -translate-x-1/2 */}
        <p className={cn("text-base text-center text-subtitle/80 font-light w-full px-4", "lg:text-base lg:w-[500px] lg:mx-auto", "xl:mx-auto xl:text-center xl:px-0 xl:pb-2 xl:text-lg xl:leading-relaxed xl:w-[700px]")}>Découvrez pourquoi ma méthode surpasse les offres des agences conventionnelles.</p>
        <div className={cn("relative pt-14 w-full flex flex-col gap-10", "lg:gap-14", "xl:gap-4 xl:grid xl:grid-cols-2 xl:justify-between")}>
          <div className='hidden xl:block absolute left-1/2 transform -translate-x-1/2 z-50 top-[65px] border-b p-4 w-auto bg-gradient-to-t from-transparent to-secondary rounded-[10px] mx-auto'>VS</div>
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