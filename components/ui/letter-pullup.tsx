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
  duration
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: duration || 0.6, staggerChildren: delay || 0.05 }},
    exit: { y: -100, opacity: 0, transition: { duration: duration || 0.6 }}
  };

  return (
    <motion.div
      className="flex justify-center items-center gap-2"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pullupVariant}
      key={words}
    >
      {letters.map((letter, i) => (
        <motion.h5
          key={i}
          className={className}
          variants={{
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { delay: delay && i * delay }},
            exit: { y: -100, opacity: 0, transition: { delay: delay && i * delay }},
          }}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h5>
      ))}
    </motion.div>
  );
}
