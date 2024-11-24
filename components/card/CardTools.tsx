import { cn } from '@/lib/utils';
import { FC } from 'react';
import { IconType } from 'react-icons/lib/iconBase';

interface CardToolsProps {
    title: string;
    content: string;
    icon: IconType;
}

const CardTools: FC<CardToolsProps> = ({
  title,
  content,
  icon: Icon
}) => {
  return (
    <div className={cn("w-full backdrop-blur-sm rounded-3xl flex flex-col text-left justify-start items-start gap-2 p-6 bg-gradient-to-bl from-transparent via-transparent via-50% to-white/[0.05] border border-neutral-600/30", "lg:p-8")}>
      <div className={cn("w-full flex gap-6 items-center")}>
        <div className={cn("size-12 flex justify-center items-center border-b border-white/80 bg-gradient-to-b from-primary to-secondary rounded-[10px] cursor-pointer",
          "hover:bg-primary hover:shadow-custom-primary *:hover:text-white",
          "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
          "transition-all ease-in ",
          "lg:size-15"
        )}>
          <Icon className={cn("text-3xl text-white", "2xl:text-5xl")} />
        </div>
        <h3 className={cn("text-xl font-semibold", "lg:text-[22px]")}>{title}</h3>
      </div>
      <p className={cn("text-subtitle font-normal pt-3", "lg:text-lg")}>{content}</p>
    </div>
  );
};

export default CardTools;