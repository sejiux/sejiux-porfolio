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
    <div className='bg-gradient-to-br from-[#151518] via-background via-80% to-secondary rounded-3xl p-[1px] '>
      <div className={cn("w-full rounded-3xl flex flex-col justify-start items-start gap-2 p-6 border border-neutral-600/30 bg-gradient-to-bl from-background via-background via-70% to-white/[0.03]", "lg:p-8")}>
        <div className={cn("w-full pb-4 flex justify-between items-center")}>
          <div className={cn("size-14 flex justify-center items-center border border-neutral-600/30 bg-gradient-to-bl from-white/[0.03] via-transparent via-50% to-white/[0.03] shadow-custom-background backdrop-blur-xl rounded-[10px] cursor-pointer",
            "hover:bg-primary *:hover:text-white",
            "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
            "transition-all ease-in ",
            "lg:size-15"
          )}>
            <Icon className={cn("text-3xl text-white/70", "2xl:text-5xl")} />
          </div>
          <div className={cn("text-sm py-2 px-6 bg-gradient-to-b from-primary to-secondary border-b border-white/30 rounded-full", "lg:text-base")}>
            <p>Étape {step}</p>
          </div>
        </div>
        <div className={cn("space-y-3")}>
          <h3 className={cn("text-xl font-semibold", "lg:text-[22px]")}>{title}</h3>
          <p className={cn("text-subtitle font-normal pb-4", "lg:text-lg")}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProcessus;