import { cn } from '@/lib/utils';
import React from 'react';
import GridPattern from '../ui/grid-pattern';
import Link from 'next/link';

const CardBenefit = () => {
  return (
    <div className={cn("w-full px-6 flex flex-col justify-center max-w-7xl mx-auto", "lg:px-0 lg:space-y-0")}>
      <div className={cn("w-full rounded-3xl bg-transparent border-t border-r border-l border-neutral-600/30 p-2")}>
        <div className={cn("rounded-3xl relative p-6 border border-neutral-600/30", "lg:p-10")}>
          <GridPattern />
          <div className={cn("space-y-14")}>
            <h3 className={cn('text-center mx-auto max-w-4xl text-2xl lg:text-5xl font-semibold leading-snug', "lg:leading-[1.3]")}>
              Je ne construis pas seulement des boutiques, je transforme votre vision en une expérience ecommerce mémorable.
            </h3>
            <Link href="mailto:im.sejiux@gmail.com" prefetch={true} className={cn(
              "text-white", 
              "w-full h-12 mx-auto",
              "md:w-40 md:h-10",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-primary hover:shadow-custom-primary",
            )}>
                  Travaillons Ensemble
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBenefit;