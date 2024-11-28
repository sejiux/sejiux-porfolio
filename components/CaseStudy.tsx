"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Image from 'next/image';
import LogoHelloPurly from "@/public/images/hellopurly-logo.webp";
import ProfileClientHelloPurly from "@/public/images/profile-hellopurly.jpg";
import { CaseStudyData } from '@/data/works';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const CaseStudy = () => {
  const [bigImageIndex, setBigImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setBigImageIndex(index);
  };

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
                  Étude de cas
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
        )}>Un Résultat Concret et une <br className="hidden lg:block" />Histoire Qui Peut Être La Vôtre</h2>
        <p className={cn("text-subtitle/80 text-base font-light w-full px-4 pb-10", "lg:text-base lg:mx-auto lg:w-[500px]", "xl:px-0 xl:pb-4 xl:text-lg xl:leading-relaxed xl:w-[700px]")}>Découvrez comment Abel, après avoir investi 1000 € dans une agence reconnue pour un résultat décevant, a vu sa boutique totalement transformée.</p>
        <div className={cn("relative w-full flex flex-col gap-4", "xl:pt-10 xl:grid xl:grid-cols-2 xl:justify-between xl:items-center")}>
          <div className={cn("space-y-4 text-left p-6 bg-gradient-to-bl from-transparent via-transparent via-70% to-[#151518] border border-neutral-600/30 rounded-3xl", "lg:p-10")}>
            <div className={cn("w-[80%]", "lg:w-[60%]")}>
              <Image src={LogoHelloPurly} alt="logo HelloPurly" width={1080} height={1080} />
            </div>
            <div className={cn("flex items-center flex-wrap gap-3")}>
              {[
                {title: "Refonte Design"},
                {title: "Développement Headless"},
              ].map((data, index) => (
                <div key={index} className={cn("text-sm bg-gradient-to-b from-background to-[#151518] border border-neutral-600/30 px-4 py-2 rounded-full")}>{data.title}</div>
              ))}
            </div>
            <p className={cn("py-4 text-[15px] font-light w-full text-subtitle",  "lg:w-[500px] lg:leading-relaxed")}>
              "Après une expérience décevante avec une agence qui m'a créé une boutique shopify avec un thème custom (le design était vraiment moche), j'ai décidé de faire appel à Sejiux pour rattraper leur travail. Dès le départ, il a été super professionnel et à l'écoute. Il a su me rassurer et m'a tenu informé chaque jour de l'avancement du projet. Sa communication était excellente, et il a toujours pris le temps de répondre à mes questions. Grâce à lui, ma boutique a enfin le design que je voulais. Je recommande vivement Sejiux!"
            </p>
            <div className={cn("flex items-center gap-2", "lg:gap-4")}>
              <Image src={ProfileClientHelloPurly} alt="Profile Client HelloPurly" width={1080} height={1080} className={cn('rounded-full bg-cover size-12')} />
              <div>
                <p className={cn("text-base")}>@abelchicharito</p>
                <p className={cn("text-sm text-subtitle")}>Fondateur de HelloPurly</p>
              </div>
            </div>
          </div>
          <div className='relative size-full'>
            <div className={cn("overflow-hidden rounded-3xl size-full relative",
            )}>
              <Link href="https://hellopurly.fr" prefetch={true} target="_blank" rel="noopener noreferrer" className={cn("absolute top-5 right-5 bg-white rounded-full p-4 cursor-pointer z-10 hover:bg-background *:hover:text-white")}>
                <FaArrowRight className="text-background text-2xl -rotate-45" />
              </Link>
              <Image src={CaseStudyData[bigImageIndex].image.src} alt="Main Image of HelloPurly" width={1080} height={1080} className={cn("rounded-3xl size-full",
              )} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-20% to-background/90" />
            </div>
            <div className={cn("absolute left-1/2 transform -translate-x-1/2 bottom-4 flex gap-2 items-center justify-center mx-auto")}>
              {CaseStudyData.map((study, index) => (
                <div 
                  key={index} 
                  className={cn('relative w-full rounded-xl cursor-pointer overflow-hidden border')} 
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={study.image.src}
                    alt={study.alt}
                    className={cn(
                      'rounded-sm mx-auto size-14',
                      "lg:size-20 lg:rounded-[10px]"
                    )}
                    width={1080}
                    height={1080}
                    onClick={() => handleImageClick(index)}
                  />
                  {bigImageIndex !== index && (
                    <div className={cn("absolute inset-0 bg-background/60 border border-white/20 rounded-sm hover:bg-background/0", "lg:rounded-[10px]")} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;