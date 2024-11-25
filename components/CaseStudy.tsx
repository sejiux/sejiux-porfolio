import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import Image from 'next/image';
import LogoHelloPurly from "@/public/images/hellopurly-logo.webp";
import CoverHelloPurly from "@/public/images/hellopurly-mobile.png";
import ProfileClientHelloPurly from "@/public/images/profile-hellopurly.jpg";

const CaseStudy = () => {
  return (
    <section className={cn("-z-10 relative flex flex-col justify-center")}>
      <div className={cn("w-full px-6 text-center space-y-6", "lg:max-w-4xl lg:mx-auto lg:space-y-10", "xl:px-0 xl:max-w-7xl")}>
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
                  Étude de cas
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
        )}>Des Résultats Concrets et<br className="hidden lg:block" /> des Histoires Inspirantes</h1>
        <p className={cn("text-base font-light w-full px-4 pb-14", "lg:text-base lg:px-0 lg:mx-auto text-subtitle/80 lg:w-[700px]", "xl:text-lg xl:leading-relaxed")}>Découvrez comment HelloPurly, après avoir investi 1000 € dans une agence reconnue pour un résultat décevant, a vu sa boutique totalement transformée.</p>
        <div className={cn("relative py-14 w-full flex flex-col gap-4", "lg:gap-0 lg:grid lg:grid-cols-2 lg:justify-between lg:items-center")}>
          <div className={cn("space-y-4 text-left p-6 bg-gradient-to-bl from-transparent via-transparent via-70% to-[#151518] border border-neutral-600/30 rounded-3xl", "lg:p-8 lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-3xl lg:rounded-tl-3xl")}>
            <div className={cn("w-full", "lg:w-[50%]")}>
              <Image src={LogoHelloPurly} alt="logo HelloPurly" width={1080} height={1080} />
            </div>
            <div className={cn("flex items-center flex-wrap gap-4")}>
              {[
                {title: "Refonte Design"},
                {title: "Développement Headless"},
              ].map((data, index) => (
                <div key={index} className={cn("text-sm bg-gradient-to-b from-background to-[#151518] border border-neutral-600/30 px-4 py-2 rounded-full")}>{data.title}</div>
              ))}
            </div>
            <p className={cn("py-4 text-sm font-light w-full text-subtitleCard",  "lg:w-[500px] lg:leading-relaxed")}>
              "Après une expérience décevante avec une agence qui m'a créé une boutique shopify avec un thème custom (le design était vraiment moche), j'ai décidé de faire appel à Sejiux pour rattraper leur travail.<br />Dès le départ, il a été super professionnel et à l'écoute. Il a su me rassurer et m'a tenu informé chaque jour de l'avancement du projet.<br />Sa communication était excellente, et il a toujours pris le temps de répondre à mes questions. Grâce à lui, ma boutique a enfin le design que je voulais. Je recommande vivement Sejiux!"
            </p>
            <div className={cn("flex items-center gap-2", "lg:gap-4")}>
              <Image src={ProfileClientHelloPurly} alt="Profile Client HelloPurly" width={1080} height={1080} className={cn('rounded-full bg-cover size-10')} />
              <div className={cn("space-y-2")}>
                <p className={cn("text-sm")}>@abelchicharito</p>
                <p className={cn("text-xs text-subtitleCard")}>Fondateur HelloPurly</p>
              </div>
            </div>
          </div>
          <Image src={CoverHelloPurly} alt="About me" width={1080} height={1080} className={cn("rounded-3xl border-2 border-neutral-600/30", "lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-3xl lg:rounded-br-3xl")} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;