"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Link from 'next/link';
import { FAQsData } from '@/data/works';
import CardFAQ from './card/CardFAQ';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(FAQsData.map(() => false));
  
  return (
    <section id="faq" className={cn("px-6 flex flex-col justify-center gap-4 max-w-7xl mx-auto", "md:mx-auto md:max-w-lg", "lg:max-w-2xl", "xl:max-w-7xl xl:px-0 xl:space-y-0 xl:grid xl:grid-cols-[1fr,3fr] xl:gap-10 xl:items-start xl:justify-between")}>
      <div className={cn("space-y-6", "xl:px-0 xl:sticky xl:top-24")}>
        <div className={cn("space-y-6 text-left p-6 bg-gradient-to-bl from-transparent via-transparent via-70% to-[#151518] border border-neutral-600/30 rounded-3xl", "xl:p-10 xl:space-y-8")}>
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
          <h2 className={cn(
            "text-2xl sm:text-[28px] px-2 text-white text-center leading-tight font-bold",
            "lg:px-0 lg:text-4xl",
            "xl:text-5xl xl:leading-[1.4]",
            "pointer-events-none whitespace-pre-wrap",
          )}>
            Une question ? 
          </h2>
          <p className={cn("text-base text-center font-light w-full px-4", "lg:text-base text-subtitle/80 lg:w-[500px]", "xl:pb-2 xl:px-0 xl:text-lg xl:leading-relaxed")}>Si votre question n'est pas abordée ici, n'hésitez pas à me contacter.</p>
          <div className={cn("pt-4")}>
            <Link href="mailto:im.sejiux@gmail.com" rel="preload" className={cn(
              "text-white font-medium", 
              "w-full h-12 mx-auto",
              "md:h-10",
              "lg:mx-0",
              "xl:h-14 p-[1px]",
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
        {FAQsData.map((data, index) => (
          <CardFAQ
            key={index}
            index={index}
            title={data.title}
            content={data.content}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;