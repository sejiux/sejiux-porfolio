import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface CardPriceProps {
  title: string;
  content: string;
  link: string;
  options?: {
    title: string;
  }[];
  infoPrice?: string;
}

const CardPrice: FC<CardPriceProps> = ({
  title,
  content,
  link,
  options,
}) => {
  return (
    <div className={cn("w-full rounded-3xl flex flex-col justify-start items-center gap-2 p-6 border border-neutral-600/30 bg-gradient-to-t from-transparent via-transparent via-70% to-[#151518]", "lg:px-8 lg:py-10")}>
      <div className={cn("space-y-6", title === "Maintenance" ? "text-left lg:text-center" : "text-left")}>
        <h3 className={cn("text-4xl pt-3 sm:text-base font-bold")}>{title}</h3>
        <p className={cn("text-subtitle/80 font-normal pb-3")}>{content}</p>
        <Link href={link} target="_blank" rel="preload" className={cn(
          "text-white w-full", 
          "h-12 mx-auto",
          "md:h-14",
          "xl:mx-0 xl:h-14 p-[1px]",
          "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
          "transition-all ease-in ",
          "border border-neutral-600/30 bg-gradient-to-bl from-neutral-600/30 to-[#151518] backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
          "hover:bg-primary hover:from-primary hover:to-primary hover:shadow-custom-primary hover:transition-none",
        )}>
          Réserver votre appel
        </Link>
        <div className={cn("pt-4")}>
          <div className='w-full mx-auto border border-[#151518]/70' />
        </div>
        <div className={cn("space-y-2 py-4")}>
          {options?.map((option, index) => (
            <div key={index} className={cn('flex items-center mx-auto gap-4', "lg:mx-0")}>
              <FaCheckCircle className='text-primary text-xl' />
              <div className={cn("text-base text-subtitlePrice font-medium")}>{option.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPrice;