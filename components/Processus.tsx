import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Link from 'next/link';
import CardProcessus from './card/CardProcessus';
import { ProcessusData } from '@/data/works';

const Processus = () => {
  return (
    <section className={cn("px-6 flex flex-col justify-center max-w-7xl mx-auto", "md:mx-auto md:max-w-lg", "lg:max-w-4xl lg:mx-auto", "xl:max-w-7xl xl:px-0 xl:space-y-0 xl:grid xl:grid-cols-2 xl:items-start xl:justify-between")}>
      <div className={cn("px-6 space-y-6", "xl:sticky xl:top-24 xl:px-0")}>
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
                  Processus
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h2 className={cn(
          "text-[28px] px-2 text-center leading-tight font-semibold ",
          "lg:text-4xl",
          "xl:text-5xl xl:text-left xl:px-0 xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white",
        )}>Votre Succès, une Méthode en <span className='text-primary'>6</span> Étapes</h2>
        <p className={cn("text-base text-center font-light w-full px-4", "xl:text-left xl:px-0 text-subtitle/80 xl:pb-2 xl:w-[500px] xl:text-lg xl:leading-relaxed")}>Un accompagnement et des étapes clés pour créer une boutique à votre image, prête à séduire vos clients.</p>
        <div className={cn("pt-4")}>
          <Link href="mailto:im.sejiux@gmail.com" rel="preload" className={cn(
            "text-white font-medium", 
            "w-[80%] h-12 mx-auto",
            "md:w-[60%] md:h-14",
            "lg:w-60",
            "xl:mx-0 xl:h-14 p-[1px]",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
            "hover:bg-primary hover:shadow-custom-primary",
          )}>
                Travaillons Ensemble
          </Link>
        </div>
      </div>
      <div className={cn('flex flex-col gap-4 pt-20 max-w-7xl', 'xl:py-0 xl:justify-end')}>
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

export default Processus;