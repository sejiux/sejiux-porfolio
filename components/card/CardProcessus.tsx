import { cn } from '@/lib/utils';
import { FC } from 'react';
import { IconType } from 'react-icons/lib/iconBase';

interface CardProcessusProps {
    title: string;
    content: string;
    step: string;
    icon: IconType;
}

const CardProcessus: FC<CardProcessusProps> = ({
  title,
  content,
  step,
  icon: Icon
}) => {
  return (
    <div className={cn("w-full backdrop-blur-sm rounded-3xl flex flex-col text-left justify-start items-start gap-2 p-6 bg-gradient-to-bl from-transparent via-transparent via-70% to-[#151518] border border-neutral-600/30", "lg:p-8")}>
      <div className={cn("w-full pb-4 flex justify-between items-center")}>
        <div className={cn("w-full flex gap-6 items-center")}>
          <div className={cn("size-14 flex justify-center items-center border border-neutral-600/30 bg-gradient-to-bl from-neutral-600/30 to-[#151518] rounded-[10px] cursor-pointer",
            "hover:bg-primary *:hover:text-white",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "lg:size-15"
          )}>
            <Icon className={cn("text-2xl text-primary")} />
          </div>
          <h3 className={cn("text-xl font-semibold", "lg:text-[22px]")}>{title}</h3>
        </div>
        <div className={cn("text-2xl py-2 px-6 bg-primary bg-clip-text text-transparent", "lg:text-4xl")}>
          <p className='font-black'>{step}</p>
        </div>
      </div>
      <p className={cn("text-subtitle/80 font-normal pt-3", "lg:text-lg")}>{content}</p>
    </div>
  );
};

export default CardProcessus;