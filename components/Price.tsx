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
    <section className={cn("relative flex flex-col justify-center max-w-7xl mx-auto items-center")}>
      <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-2xl lg:mx-auto", "xl:px-10 xl:max-w-full")}>
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
                  Tarification
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h2 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:px-0 lg:text-[38px]",
          "xl:px-0 xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Des Tarifs Clairs et Accessibles<br className="hidden lg:block" /> pour un Impact Mesurable</h2>
        <p className={cn("text-subtitle/80 text-base font-light w-full px-4 pb-10", "lg:text-base lg:mx-auto lg:w-[500px]", "xl:px-0 xl:pb-4 xl:text-lg xl:leading-relaxed xl:w-[700px]")}>Choisissez le plan qui convient le mieux à vos besoins.</p>
        <div className={cn("pt-10", "lg:pt-0")}>
          <div className='mx-auto w-max rounded-full flex items-center justify-center bg-[#151518]  p-2'>
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
          <div className={cn("relative pt-14 w-full max-w-4xl flex flex-col gap-4", "xl:grid xl:grid-cols-2")}>
            {PricesFixeData(modeSelected).map((data, index) => (
              <CardPrice
                key={index}
                title={data.title}
                price={data.price}
                truePrice={data.truePrice}
                content={data.content}
                link={data.link}
                options={data.options}
                modeSelected={modeSelected}
              />
            ))}
            <div className="col-span-2 max-w-xl w-full mx-auto">
              <CardPrice
                title="Maintenance"
                price="250"
                content="Bénéficiez d'un support technique pour une expérience utilisateur optimale."
                link="mailto:im.sejiux@gmail.com"
                options={[
                  {
                    title: "Support client disponible 5j/7",
                  },
                  {
                    title: "Réponse sous 24 heures",
                  },
                  {
                    title: "Optimisation des performances",
                  },
                  {
                    title: "Correction des bugs",
                  },
                  {
                    title: "Mises à jour de sécurité",
                  },
                  {
                    title: "Transfert d'hébergement",
                  },
                  {
                    title: "Migration des données",
                  },
                  {
                    title: "Changement de nom de domaine",
                  },
                  {
                    title: "Gestion des DNS",
                  },
                  {
                    title: "Suivi et optimisation SEO",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;