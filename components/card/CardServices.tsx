import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { IconType } from 'react-icons/lib/iconBase';

interface CardServicesProps {
    title: string;
    content: string;
    icon: IconType;
}
const CardServices: FC<CardServicesProps> = ({
  title,
  content,
  icon: Icon
}) => {
  return (
    <div className={cn("w-full rounded-3xl flex flex-col justify-center items-center gap-2 p-6 border border-neutral-600/30 bg-gradient-to-bl from-transparent via-transparent via-50% to-[#151518]", "lg:px-4 lg:py-5")}>
      <div className={cn("p-6", "lg:p-10")}>
        <div className={cn("size-14 flex justify-center items-center border-b border-white/80 bg-gradient-to-b from-primary to-secondary rounded-[10px] cursor-pointer",
          "hover:bg-primary hover:shadow-custom-primary *:hover:text-white",
          "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
          "transition-all ease-in ",
        )}>
          <Icon className={cn("text-2xl text-white")} />
        </div>
      </div>
      <div className={cn("space-y-2", "lg:space-y-3")}>
        <h3 className={cn("text-xl font-semibold text-[#E4E4E6]", "lg:text-[22px]")}>{title}</h3>
        <p className={cn("text-subtitle/80 font-normal pb-4", "lg:text-lg")}>{content}</p>
      </div>
    </div>
  );
};

export default CardServices; 