import { cn } from '@/lib/utils';
import { FC } from 'react';
import { IconType } from 'react-icons/lib/iconBase';

interface CardWhyProps {
    lists: {
        icon: IconType;
        content: string;
    }[];
    title: string;
}

const CardWhy: FC<CardWhyProps> = ({
  lists,
  title
}) => {
  return (
    <div className={cn("w-full backdrop-blur-sm rounded-3xl flex flex-col gap-2 p-6 bg-gradient-to-b from-transparent via-transparent via-70% to-[#151518] border-b border-neutral-600/30", "lg:p-6")}>
      <div className={cn('mx-auto text-3xl', title === "Sejiux" ? "font-black text-white/80" : "font-semibold")}>
        {title}
      </div>
      <div className='py-4'>
        <div className='border w-full border-neutral-600/10' />
      </div>
      {lists.map((list, index) => (
        <div key={index} className={cn(
          'flex items-center gap-4 rounded-[10px] py-4 px-5', 
          "lg:mx-0", 
          index % 2 === 0 ?
            title === "Sejiux" ? "bg-gradient-to-r from-secondary/50 via-transparent via-70% to-transparent" : "bg-gradient-to-r from-[#151518]/70 via-transparent via-70% to-transparent" : "bg-transparent"
        )}>
          <div> 
            <list.icon className={cn('text-xl font-medium', title === "Autres Agences" ? "text-subtitlePrice" : "text-white")} />
          </div>
          <p className={cn("font-medium text-left", "lg:text-lg", title === "Autres Agences" ? "text-subtitlePrice" : "text-white")}>{list.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardWhy;