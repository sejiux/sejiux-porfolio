import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { Button } from '../ui/moving-border';
import AnimatedShinyText from '../ui/animated-shiny-text';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface CardPriceProps {
  title: string;
  price: string;
  content: string;
  link: string;
  options?: {
    title: string;
  }[];
  modeSelected?: number;
  infoPrice?: string;
}

const CardPrice: FC<CardPriceProps> = ({
  title,
  price,
  content,
  link,
  options,
  modeSelected,
  infoPrice
}) => {
  return (
    <div className={cn("w-full rounded-3xl flex flex-col justify-start items-center gap-2 p-6 border border-neutral-600/30 bg-gradient-to-t from-transparent via-transparent via-70% to-[#151518]", "lg:px-8 lg:py-10")}>
      <div className={cn("space-y-6", "lg:space-y-8", title === "Maintenance" ? "text-left lg:text-center" : "text-left")}>
        <div className={cn("z-10 flex items-center pb-2", title === "Maintenance" ? "justify-start lg:justify-center" : "justify-start")}>
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
                    {title}
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <div className={cn("space-y-1")}>
          {modeSelected === 1 || title === "Maintenance" ? (
            <h3 className={cn("text-[58px] font-bold")}>{price}<span className='text-[26px]'>/mois €</span></h3>
          ) : (
            <h3 className={cn("text-[58px] font-bold")}>{price}<span className='text-[26px]'> €</span></h3>
          )}
          {modeSelected === 1 && <p className={cn("text-subtitle/80 font-normal pb-2")}>{infoPrice}</p>}
        </div>
        <p className={cn("text-subtitle/80 font-normal")}>{content}</p>
        <Link href={link} prefetch={true} target="_blank" rel="noopener noreferrer" className={cn(
          "text-white w-full", 
          "h-12 mx-auto",
          "md:h-10",
          "lg:mx-0",
          "xl:h-14 p-[1px]",
          "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
          "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
          "transition-all ease-in ",
          "border border-neutral-600/30 bg-gradient-to-bl from-neutral-600/30 to-[#151518] backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
          "hover:bg-backgroundSecondary hover:shadow-custom-background-secondary",
        )}>
                Commençons maintenant
        </Link>
        {title !== "Maintenance" && (
          <>
            <div className={cn("pt-4")}>
              <div className='w-full mx-auto border border-[#151518]/70' />
            </div>
            <div className={cn("space-y-4 py-4")}>
              {options?.map((option, index) => (
                <div key={index} className={cn('flex items-center mx-auto gap-4', "lg:mx-0")}>
                  <FaCheckCircle className='text-primary text-xl' />
                  <div className={cn("text-base text-subtitlePrice font-medium")}>{option.title}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardPrice;