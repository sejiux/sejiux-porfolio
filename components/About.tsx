import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import AboutMePicture from "@/public/images/sejiux_about.jpg";
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import ContraSvg from './ContraSvg';

const About = () => {
  return (
    <section className={cn("px-6 flex flex-col justify-center pb-44 space-y-14 max-w-7xl mx-auto", "lg:px-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:items-start lg:justify-between")}>
      <Image src={AboutMePicture} alt="About me" width={1080} height={1080} className={cn("rounded-3xl border-2 border-neutral-600/30")} />
      <div className={cn("space-y-6", "xl:px-14", "2xl:max-w-[1800px] 2xl:space-y-14")}>
        <h1 className={cn(
          "text-[28px] px-2 leading-normal font-semibold ",
          "text-white",
          "lg:px-0 lg:text-6xl",
          "xl:text-5xl xl:leading-[1.4]",
          "2xl:text-[100px]",
          "pointer-events-none whitespace-pre-wrap",
        )}>Derrière le Code: <br /><span className={cn("font-black text-4xl", "lg:text-6xl")}>Sélim 👋</span></h1>
        <div className={cn("flex items-center flex-wrap gap-4")}>
          {[
            {title: "+6 ans d'expériences"},
            {title: "Expert Headless"},
          ].map((data, index) => (
            <div key={index} className={cn("text-sm bg-gradient-to-b from-background to-[#151518] border border-neutral-600/30 px-4 py-2 rounded-full", "lg:text-base")}>{data.title}</div>
          ))}
        </div>
        <p className={cn("text-base font-light w-full", "lg:text-left lg:text-base lg:px-0 text-subtitle lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>
        Je suis Selim, un ancien danseur BreakDance ayant participé à World of Dance, devenu développeur fullstack et désigner web. J’ai créé Sejiux pour allier créativité et technique, en offrant des résultats de premier ordre, une collaboration fluide et des solutions adaptées aux marques. Mon expérience m’a enseigné la rigueur et l’excellence, que je mets au service de boutiques e-commerce performantes et captivantes. Ensemble, transformons votre commerce en ligne en une machine à convertir.</p>
        <div className={cn("pt-4 flex flex-col items-center gap-4", "lg:flex-row")}>
          <Link href="https://contra.com/sejiux_gm3hme5l" prefetch={true} className={cn(
            "text-white flex gap-2 items-center", 
            "w-full h-12 mx-auto",
            "md:w-40 md:h-10",
            "lg:mx-0",
            "xl:w-60 xl:h-14 p-[1px]",
            "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
            "hover:bg-primary hover:shadow-custom-primary",
          )}>
            <ContraSvg />
                Embauchez-moi
          </Link>
          <Link href="https://x.com/@sejiux" prefetch={true} className={cn(
            "text-white flex gap-2 items-center", 
            "w-full h-12 mx-auto",
            "md:w-40 md:h-10",
            "lg:mx-0",
            "xl:w-60 xl:h-14 p-[1px]",
            "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "bg-gradient-to-b from-[#151518]/10 via-background via-50% to-[#151518]/50 border-t border-neutral-600/30 shadow-custom-background backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
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