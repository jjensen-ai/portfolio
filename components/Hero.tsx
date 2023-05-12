import styles from '@/styles/hero.module.css';

export default function Hero() {
  return (
    <div className='flex flex-col w-full h-[88.2vh] relative'>
      <div className='flex justify-end mt-[2rem]'>
        <div className='absolute right-0 mt-4'>
          <h1 className={`${styles.tagLine}`}>Developer</h1>
          <h1 className={`${styles.tagLine}`}>UX UI Enthusiast</h1>
        </div>
      </div>
      <div className='flex flex-col absolute bottom-0 pl-8'>
        <span className={`${styles.name} tracking-wide `}>Jordon</span>
        <span className={`${styles.name} tracking-wide`}>Jensen</span>
      </div>
    </div>
  );
}
