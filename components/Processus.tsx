import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Link from 'next/link';
import CardProcessus from './card/CardProcessus';
import { ProcessusData } from '@/data/works';

const Processus = () => {
  return (
    <section className={cn("px-6 flex flex-col justify-center max-w-7xl mx-auto", "lg:px-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:items-start lg:justify-between")}>
      <div className={cn("px-6 space-y-6", "lg:sticky lg:top-24", "xl:px-0")}>
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
          "text-[28px] px-2 leading-tight font-semibold",
          "text-white text-center",
          "lg:px-0 lg:text-6xl lg:text-left",
          "xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
        )}>Votre Succès, une Méthode en <span className='text-primary'>6</span> Étapes</h2>
        <p className={cn("text-base text-center font-light w-full px-4", "lg:text-left lg:text-base lg:px-0 text-subtitle/80 lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed")}>Un accompagnement et des étapes clés pour créer une boutique à votre image, prête à séduire vos clients.</p>
        <div className={cn("pt-4")}>
          <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
            "text-white", 
            "w-[80%] h-12 mx-auto",
            "md:w-40 md:h-10",
            "lg:mx-0",
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
      <div className={cn('flex flex-col gap-4 pt-20', 'lg:py-0 lg:justify-end')}>
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