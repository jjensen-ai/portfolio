import { motion } from 'framer-motion';

export default function AnimatedText({ word = '' }: { word: string }) {
  const textString = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.22, delayChildren: 0.02 * i },
    }),
  };

  const letter = {
    visible: {
      opacity: 1,
      top: [5, -10, 5, 0],
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <motion.span variants={textString} initial='hidden' whileInView='visible'>
      {word.split('').map((char: string, index: number) => {
        return (
          <motion.span
            className='relative'
            key={char + '-' + index}
            variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
