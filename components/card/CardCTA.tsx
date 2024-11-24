import { cn } from '@/lib/utils';
import React from 'react';
import GridPattern from '../ui/grid-pattern';
import Link from 'next/link';

const CardCTA = () => {
  return (
    <div className={cn("w-full px-6 py-14 flex flex-col justify-center space-y-14 max-w-7xl mx-auto", "lg:px-0 lg:py-0 lg:space-y-0")}>
      <div className={cn("w-full rounded-3xl bg-transparent border-t border-r border-l border-neutral-600/30 p-2")}>
        <div className={cn("rounded-3xl relative px-10 py-14 border border-neutral-600/30", "lg:px-28 lg:py-32")}>
          <GridPattern gradient />
          <div className={cn("space-y-14")}>
            <h3 className={cn('mx-auto max-w-4xl text-left text-xl font-semibold leading-normal', "lg:leading-[1.4]", "xl:leading-[1.4] lg:text-4xl lg:text-center")}>
            Chaque boutique est le fruit d'une réflexion et d'une exécution sur-mesure, pour des résultats bien au-delà des boutiques e-commerce classiques.
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

export default CardCTA;