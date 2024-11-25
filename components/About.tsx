import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import AboutMePicture from "@/public/images/sejiux_about.jpg";
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import ContraSvg from './ContraSvg';

const About = () => {
  return (
    <section className={cn("px-6 flex flex-col justify-center space-y-14 max-w-7xl mx-auto", "lg:px-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:items-center lg:justify-between")}>
      <Image src={AboutMePicture} alt="About me" width={1080} height={1080} className={cn("rounded-3xl border-2 border-neutral-600/30")} />
      <div className={cn("space-y-6", "xl:px-14 xl:space-y-8", "2xl:max-w-[1800px]")}>
        <div className={cn("space-y-4", "lg:space-y-6")}>
          <h1 className={cn(
            "text-xl leading-normal font-medium",
            "text-subtitleCard",
            "lg:px-0 lg:text-6xl",
            "xl:text-3xl xl:leading-[1.4]",
            "2xl:text-[100px]",
            "pointer-events-none whitespace-pre-wrap",
          )}>Derrière Sejiux :</h1>
          <p className={cn("font-black text-5xl", "lg:text-6xl")}>Sélim 👋</p>
        </div>
        <div className={cn("flex items-center flex-wrap gap-3")}>
          {[
            {title: "+6 ans d'expériences"},
            {title: "Expert Headless"},
          ].map((data, index) => (
            <div key={index} className={cn("text-sm bg-gradient-to-b from-background to-[#151518] border border-neutral-600/30 px-4 py-2 rounded-full", "lg:text-base")}>{data.title}</div>
          ))}
        </div>
        <p className={cn("text-base font-light w-full", "lg:text-left lg:text-base lg:px-0 text-subtitleCard lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>
        Je suis Selim, un ancien danseur BreakDance ayant participé à World of Dance, devenu développeur fullstack et désigner web. J’ai créé Sejiux Studio pour allier créativité et technique, en offrant des résultats de premier ordre, une collaboration fluide et des solutions adaptées aux marques. Ensemble, transformons votre commerce en ligne en une machine à convertir.</p>
        <div className={cn("pt-4 flex flex-col items-center gap-4", "lg:flex-row")}>
          <Link href="https://contra.com/im_sejiux" prefetch={true} target="_blank" rel="noopener noreferrer" 
            className={cn(
              "text-white flex gap-2 items-center", 
              "w-full h-12 mx-auto",
              "md:w-40 md:h-10",
              "lg:mx-0",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "bg-gradient-to-b from-primary to-secondary flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-primary hover:shadow-custom-primary",
            )}>
            <ContraSvg />
                Embauchez-moi
          </Link>
          <Link href="https://x.com/@sejiux" prefetch={true} target="_blank" rel="noopener noreferrer" 
            className={cn(
              "text-white flex gap-2 items-center", 
              "w-full h-12 mx-auto",
              "md:w-40 md:h-10",
              "lg:mx-0",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "border border-neutral-600/30 bg-gradient-to-bl from-neutral-600/30 to-[#151518] flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-backgroundSecondary hover:shadow-custom-background-secondary",
            )}>
            <FaXTwitter />
                Suivez-moi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;