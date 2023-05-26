import styles from '@/styles/ElevatorPitch.module.css';
import AnimatedText from '@/components/AnimateText';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Pitch() {
  const basicList = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Supabase'];
  const advancedList = ['Next', 'Figma', 'React', 'Angular', 'MongoDB', 'Git'];
  const positionRef = useRef(null);
  const isInView = useInView(positionRef);

  const { scrollYProgress } = useScroll();
  const xSmoothing = useSpring(scrollYProgress, {
    damping: 150,
    stiffness: 800,
  });

  const textScrollValueRight = useTransform(
    xSmoothing,
    [0, 1],
    ['-100%', '15%'],
    {
      clamp: false,
    }
  );
  const textScrollValueLeft = useTransform(xSmoothing, [0, 1], ['100%', '0%'], {
    clamp: false,
  });

  useEffect(() => {
    isInView;
  }, [isInView]);
  return (
    <div className='flex flex-col h-[100rem] w-screen px-[5rem] relative bg-white'>
      <div className='mt-[6.5rem] flex flex-col items-end'>
        <h1 className='text-[3rem] font-black text-zinc-800'>
          Driven by curiousity and {''}
          <AnimatedText word='creativity' />.
        </h1>
        <br />
        <h2 className='text-[1.5rem] tracking-wide leading-relaxed'>
          Striving to make brands{' '}
          <span className='font-bold text-[1.75rem] tracking-tight'>BOLD</span>{' '}
          on the web.
        </h2>

        <h2 className='text-[1.5rem] tracking-wide leading-relaxed'>
          Learning, innovating and developing endlessly.
        </h2>
      </div>
      <div>
        <div className='text-[12rem] font-black tracking-[2rem] mt-[5.25rem] flex justify-center opacity-10'>
          Toolkit
        </div>
        <div className='flex flex-col absolute top-[25rem] left-0 w-full flex-nowrap'>
          <motion.div
            style={{ translateX: textScrollValueRight }}
            className='flex'>
            {basicList.map((item: string, index: number) => {
              return (
                <div key={index} className='flex'>
                  <h1 className='text-[3.25rem] font-light tracking-widest opacity-80'>
                    {item}
                  </h1>
                  <h1 className='text-[4rem] leading-[3rem] mx-2'>.</h1>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className='flex justify-end'
            style={{ translateX: textScrollValueLeft }}>
            {advancedList.map((item: string, index: number) => {
              return (
                <div key={index} className='flex justify-end'>
                  <h1 className='text-[3.25rem] font-light tracking-widest'>
                    {item}
                  </h1>
                  <h1 className='text-[4rem] leading-[3rem] mx-2'>.</h1>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
