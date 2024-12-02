import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface CardFAQProps {
    title: string;
    content: string;
    isOpen: boolean[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
    index: number;
}

const CardFAQ: FC<CardFAQProps> = ({
  title,
  content,
  isOpen,
  setIsOpen,
  index
}) => {
  const handleFaqClick = (index: number) => {
    const newFaqStates = [...isOpen];
    newFaqStates[index] = !newFaqStates[index];
    setIsOpen(newFaqStates);
  };
      
  return (
    <div className='flex gap-4 items-start w-full'>
      <div onClick={() => handleFaqClick(index)} className={cn("cursor-pointer w-full backdrop-blur-sm rounded-3xl flex flex-col text-left justify-start items-start gap-2 p-6 bg-gradient-to-bl from-transparent via-transparent via-70% to-[#151518] border border-neutral-600/30", "lg:py-8 lg:px-10")}>
        <div className={cn("w-full flex justify-between items-center gap-10", "lg:gap-4")}>
          <h3 className={cn("lg:text-[20px]")}>{title}</h3>
          <IoIosArrowDropdownCircle className={cn("text-4xl rounded-full min-w-min border-2 border-primary fill-primary duration-300", isOpen[index] ? "rotate-180" : "rotate-0")} />
        </div>
        <AnimatePresence>
          {isOpen[index] && (
            <>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={cn("space-y-6 pt-6 overflow-hidden")}>
                  <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    exit={{ y: 10 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className={cn("w-full border-[0.02px] border-neutral-600/30")} />
                  </motion.div>

                  <div className={cn("text-subtitle/80 font-normal", "lg:text-lg")}>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {content}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardFAQ;