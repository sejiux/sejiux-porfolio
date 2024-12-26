import { cn } from '@/lib/utils';
import { FC } from 'react';

interface CardBenefitProps {
    title: string;
    symbole: string;
    percentage: string;
}

const CardBenefit: FC<CardBenefitProps> = ({
  title,
  symbole,
  percentage
}) => {
  return (
    <div className={cn("w-full backdrop-blur-sm rounded-3xl flex flex-col justify-center items-center text-center gap-2 p-6 border border-neutral-600/30", "lg:px-6 py-12")}>
      <div>
        <div className={cn("w-full flex gap-6 justify-center items-center")}>
          <h2 className={cn("text-[58px] font-bold")}><span className={cn("text-primary")}>{symbole}</span>{percentage}<span className='text-[26px]'>%</span></h2>
        </div>
        <h3 className={cn("text-lg text-subtitle/80")}>{title}</h3>
      </div>
    </div>
  );
};

export default CardBenefit;