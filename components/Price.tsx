"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import { PricesFixeData } from '@/data/works';
import CardPrice from './card/CardPrice';

const Price = () => {
  const [modeSelected, setModeSelected] = useState(0);
  return (
    <section className={cn("relative flex flex-col justify-center")}>
      <div className={cn("px-6 text-center space-y-6", "lg:max-w-4xl lg:mx-auto", "xl:px-10 xl:max-w-full")}>
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
                  Tarification
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
          "2xl:text-[100px]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Des Tarifs Clairs et Accessibles<br className="hidden lg:block" /> pour un Impact Mesurable</h1>
        <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[700px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Choisissez le plan qui convient le mieux à vos besoins.</p>
        <div className={cn("space-y-1 pt-8")}>
          <div className='mx-auto w-max rounded-full flex items-center bg-[#151518] p-2'>
            {[
              {
                id: 0,
                title: "Standard"
              },
              {
                id: 1,
                title: "Mensuel"
              },
            ].map((data, index) => (
              <div key={index} className={cn("py-3 px-6 rounded-full cursor-pointer", modeSelected === data.id && "bg-neutral-600/30")} onClick={() => setModeSelected(data.id)}>
                <p className={cn("text-lg", modeSelected === data.id ? "text-white" : "text-subtitle/80")}>{data.title}</p>
              </div>
            ))}
          </div>
          <div className={cn("relative py-14 w-full max-w-4xl flex flex-col gap-4", "lg:grid lg:grid-cols-2 lg:py-0 lg:pt-14")}>
            {PricesFixeData(modeSelected).map((data, index) => (
              <CardPrice
                key={index}
                title={data.title}
                price={data.price}
                content={data.content}
                link={data.link}
                options={data.options}
                modeSelected={modeSelected}
                infoPrice={data.infoPrice}
              />
            ))}
            <div className="col-span-2 max-w-xl w-full mx-auto">
              <CardPrice
                title="Maintenance"
                price="250"
                content="Bénéficiez d'un support technique et de mises à jour régulières pour une expérience utilisateur optimale."
                link="mailto:im.sejiux@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;