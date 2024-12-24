import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Link from 'next/link';
import MarqueeStack from './MarqueeStack';
import { stacksData } from '@/data/works';

const Tools = () => {
  return (
    <section className={cn("flex flex-col justify-center max-w-7xl mx-auto", "md:mx-auto md:max-w-lg", "lg:max-w-4xl", "xl:max-w-7xl xl:grid xl:grid-cols-2 xl:items-center xl:justify-between xl:gap-8")}>
      <div className={cn("px-6 space-y-6", "lg:px-0")}>
        <div className={cn("z-10 flex items-center justify-center", "xl:justify-start")}>
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
                  Outils et Technologies
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h2 className={cn(
          "text-[28px] px-2 leading-tight font-semibold",
          "text-white text-center",
          "lg:px-0 lg:text-4xl",
          "xl:text-left xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
        )}><span className='text-primary'>{stacksData.length}</span> Outils au Service <br className="hidden lg:block" />de l'Excellence</h2>
        <p className={cn("text-base text-center text-subtitle/80 font-light w-full px-4", "lg:text-base lg:w-[500px] lg:mx-auto", "xl:mx-0 xl:text-left xl:px-0 xl:pb-2 xl:text-lg xl:leading-relaxed")}>Je combine des technologies de pointe et des outils reconnus pour concevoir des boutiques performantes et sur-mesure.</p>
        <div className={cn("pt-4")}>
          <Link href="mailto:im.sejiux@gmail.com" rel="preload" className={cn(
            "text-white", 
            "w-[80%] h-12 mx-auto",
            "md:w-[60%] md:h-14",
            "lg:w-60",
            "xl:mx-0",
            "xl:w-60 xl:h-14 p-[1px]",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
            "hover:bg-primary hover:shadow-custom-primary",
          )}>
                Travaillons Ensemble
          </Link>
        </div>
      </div>
      <div className={cn('flex flex-col gap-4 pt-16', 'xl:py-0 xl:justify-end')}>
        <div className={cn("lg:-space-y-3 relative overflow-hidden")}>
          <MarqueeStack title />
          <MarqueeStack reverse title />
          <MarqueeStack title />
          
        </div>
      </div>
    </section>
  );
};

export default Tools;