import { BenefitsData } from '@/data/works';
import { cn } from '@/lib/utils';
import React from 'react';
import CardBenefit from './card/CardBenefit';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import { FaCheckCircle } from 'react-icons/fa';

const Benefit = () => {
  return (
    <section className={cn("px-6 w-full flex flex-col-reverse space-y-14 max-w-7xl mx-auto", "lg:px-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:justify-between lg:justify-items-end lg:gap-10 lg:items-start")}>
      <div className={cn('w-full flex flex-col gap-4 pt-20 pb-10', 'lg:py-0 lg:grid lg:grid-cols-2')}>
        {BenefitsData.map((data, index) => (
          <CardBenefit
            key={index}
            title={data.title}
            symbole={data.symbole}
            percentage={data.percentage}
          />
        ))}
      </div>
      <div className={cn("w-full space-y-6", "xl:max-w-xl", "2xl:space-y-14")}>
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
                  "2xl:text-lg"
                )}>
                <div className="px-2">
                  <p className={cn("text-sm", "lg:text-base")}>
                  Avantages
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h1 className={cn(
          "text-[28px] px-2 text-center leading-normal font-semibold ",
          "text-white",
          "lg:px-0 lg:text-6xl lg:text-left",
          "xl:text-5xl xl:leading-[1.4]",
          "2xl:text-[100px]",
          "pointer-events-none whitespace-pre-wrap",
        )}>Le Futur du Commerce en Ligne</h1>
        <p className={cn("text-base text-center font-light w-full px-4", "lg:text-left lg:text-base lg:px-0 text-subtitle lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Transformez l'expérience d'achat en ligne de votre marque avec des avantages qui propulsent votre boutique.</p>
        <div className={cn("flex items-center flex-wrap gap-4")}>
          {[
            {title: "Une personnalisation sans limites"},
            {title: "Un accompagnement dédié"},
            {title: "Des tarifs flexibles"},
            {title: "Des solutions évolutives"},
          ].map((data, index) => (
            <div key={index} className={cn('flex items-center mx-auto gap-2', "lg:mx-0")}>
              <FaCheckCircle className='text-primary text-xl' />
              <div className={cn("text-base font-medium")}>{data.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;