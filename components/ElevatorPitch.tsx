import styles from '@/styles/ElevatorPitch.module.css';
import AnimatedText from '@/components/AnimateText';

export default function Pitch() {
  return (
    <div className='flex flex-col h-screen w-screen px-[5rem] relative bg-white'>
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
          Let's standout together and break the mold.
        </h2>
        <h2 className='text-[1.5rem] tracking-wide leading-relaxed'>
          Learning, innovating and developing endlessly.
        </h2>
      </div>
      <div>
        <div className='text-[12rem] font-black tracking-[2rem] mt-[5.25rem] flex justify-center opacity-10'>
          Toolkit
        </div>
        <div className='text-[2rem] font-black mt-[5.25rem] flex justify-center absolute top-[25rem] left-[20rem]'>
          Toolkit
        </div>
      </div>
    </div>
  );
}
