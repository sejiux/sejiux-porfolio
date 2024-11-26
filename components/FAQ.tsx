import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Link from 'next/link';
import CardProcessus from './card/CardProcessus';
import { ProcessusData } from '@/data/works';

const FAQ = () => {
  return (
    <section className={cn("px-6 flex flex-col-reverse justify-center gap-14 max-w-7xl mx-auto", "lg:px-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start lg:justify-between")}>
      <div className={cn("space-y-6", "lg:sticky lg:top-24", "xl:px-0")}>
        <div className={cn("space-y-4 text-left p-6 bg-gradient-to-bl from-transparent via-transparent via-70% to-[#151518] border border-neutral-600/30 rounded-3xl", "lg:p-10 lg:space-y-8")}>
          <div className={cn("z-10 flex items-center justify-center")}>
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
                  FAQ
                    </p>
                  </div>
                </AnimatedShinyText>
              </Button>
            </div>
          </div>
          <h1 className={cn(
            "text-[28px] px-2 leading-tight font-semibold",
            "text-white text-center",
            "lg:px-0 lg:text-6xl",
            "xl:text-5xl xl:leading-[1.4]",
            "2xl:text-[100px]",
            "pointer-events-none whitespace-pre-wrap",
          )}>Une question ? </h1>
          <p className={cn("text-base text-center font-light w-full px-4", "lg:text-base lg:px-0 text-subtitle/80 lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed")}>Un accompagnement et des étapes clés pour créer une boutique à votre image, prête à séduire vos clients.</p>
          <div className={cn("pt-4")}>
            <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
              "text-white", 
              "w-full h-12 mx-auto",
              "md:h-10",
              "lg:mx-0",
              "xl:h-14 p-[1px]",
              "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-primary hover:shadow-custom-primary",
            )}>
                Poser une question
            </Link>
          </div>
        </div>
      </div>
      <div className={cn('flex flex-col gap-4 py-10', 'lg:py-0 lg:justify-end')}>
        {ProcessusData.map((data, index) => (
          <CardProcessus
            key={index}
            title={data.title}
            content={data.content}
            step={data.step}
            icon={data.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;