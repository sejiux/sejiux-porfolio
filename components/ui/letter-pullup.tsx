"use client";

import { motion } from "framer-motion";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
  duration?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
  duration,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: duration || 0.6, staggerChildren: delay || 0.05 } },
    exit: { y: -100, opacity: 0, transition: { duration: duration || 0.6 } },
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pullupVariant}
        key={words}
      >
        {letters.map((letter, i) => (
          <div key={i}>
            <motion.h5
              variants={{
                initial: { y: 100, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: delay && i * delay } },
                exit: { y: -100, opacity: 0, transition: { delay: delay && i * delay } },
              }}
            >
              <span className={className}>
                {letter === " " ? <>&nbsp;</> : letter}
              </span>
            </motion.h5>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
