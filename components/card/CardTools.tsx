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
    <div className={cn("w-full backdrop-blur-sm rounded-3xl flex flex-col text-left justify-start items-start gap-2 p-6 border border-neutral-600/30", "lg:p-6")}>
      <div className={cn("w-full flex gap-6 items-center")}>
        <div className={cn("size-14 flex justify-center items-center border-t border-neutral-600/30 bg-gradient-to-b from-[#151518]/10 via-background via-50% to-[#151518]/50 rounded-[10px] cursor-pointer",
          "hover:bg-primary *:hover:text-white",
          "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
          "transition-all ease-in ",
          "lg:size-15"
        )}>
          <Icon className={cn("text-3xl text-white", "2xl:text-5xl")} />
        </div>
        <h3 className={cn("text-xl font-semibold", "lg:text-[22px]")}>{title}</h3>
      </div>
      <div className={cn("space-y-3")}>
        <p className={cn("text-subtitle font-normal pb-4", "lg:text-lg")}>{content}</p>
      </div>
    </div>
  );
};

export default CardTools;