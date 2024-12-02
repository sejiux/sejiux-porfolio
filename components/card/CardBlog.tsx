"use client";
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

interface CardBlogProps {
    title: string;
    date: string;
    readingTime: string;
    link: string;
    category: string;
    image?: string | StaticImageData;
}

const CardBlog: FC<CardBlogProps> = ({
  title,
  date,
  readingTime,
  category,
  link,
  image
}) => {
  return (
    <Link href={link} prefetch={true} target="_blank" rel="noopener noreferrer" className={cn("w-full group cursor-pointer rounded-3xl text-left border border-neutral-600/30 bg-gradient-to-bl from-transparent via-transparent via-50% to-[#151518]")}>
      <div className='relative h-full flex flex-col'>
        <div className='relative w-full h-0 pb-[60%] overflow-hidden rounded-t-3xl'>
          <Image src={image ?? ""} alt="Image du blog" width={1080} height={1080} className='absolute inset-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'/>
        </div>
        <div className={cn("absolute top-5 right-5 bg-white rounded-full p-4 cursor-pointer z-10 group-hover:bg-background *:group-hover:text-white")}>
          <FaArrowRight className="text-background text-2xl -rotate-45" />
        </div>
        <div className={cn("p-6 flex flex-col justify-between items-start gap-4 flex-grow", "lg:space-y-2 lg:px-6 lg:py-5")}>
          <div className={cn("flex gap-2 items-center", "lg:gap-3")}>
            <h6 className={cn("text-subtitle/50")}>{category}</h6>
            <div className={cn("size-2 rounded-full bg-subtitle/20")} /> 
            <h6 className={cn("text-subtitle/50")}>{date}</h6>
          </div>
          <p className={cn("text-[#E4E4E6] text-xl font-medium pb-4 w-[90%]", "lg:text-[22px]")}>{title}</p>
          <p className={cn("text-subtitle/50")}>{readingTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;