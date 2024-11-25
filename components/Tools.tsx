import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Link from 'next/link';
import MarqueeStack from './MarqueeStack';

const Tools = () => {
  return (
    <section className={cn("flex flex-col justify-center pt-20 space-y-20 max-w-7xl mx-auto", "lg:pt-0 lg:px-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:items-center lg:justify-between")}>
      <div className={cn("px-6 space-y-6", "lg:space-y-10", "xl:px-0")}>
        <div className={cn("z-10 flex items-center justify-center", "lg:justify-start")}>
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
                  Outils et Technologies
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h1 className={cn(
          "text-[28px] px-2 leading-tight font-semibold",
          "text-white text-center",
          "lg:px-0 lg:text-6xl lg:text-left",
          "xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
        )}><span className='text-primary'>23</span> Outils au Service  <br className="hidden lg:block" />de l'Excellence</h1>
        <p className={cn("text-base text-center font-light w-full px-4", "lg:text-left lg:text-base lg:px-0 text-subtitle/80 lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Je combine des technologies de pointe et des outils reconnus pour concevoir des boutiques performantes et sur-mesure.</p>
        <div className={cn("pt-4")}>
          <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
            "text-white", 
            "w-[80%] h-12 mx-auto",
            "md:w-40 md:h-10",
            "lg:mx-0",
            "xl:w-60 xl:h-14 p-[1px]",
            "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
            "hover:bg-primary hover:shadow-custom-primary",
          )}>
                Travaillons Ensemble
          </Link>
        </div>
      </div>
      <div className={cn('flex flex-col gap-4 py-10', 'lg:py-0 lg:justify-end')}>
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