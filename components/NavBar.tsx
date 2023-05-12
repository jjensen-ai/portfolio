import styles from '@/styles/navBar.module.css';
import { useState } from 'react';

export default function NavBar() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className='flex flex-row mt-2 justify-between w-auto px-10 items-center'>
      <div>
        <div
          className={`flex relative`}
          onMouseEnter={() => setAnimate(true)}
          onMouseLeave={() => setAnimate(false)}>
          <div
            className={`text-[3rem] font-black ${styles.textStroke} ${
              animate && styles.svgAnimation
            }`}>
            j
          </div>
          <div
            className={`text-[3rem] font-black ${styles.textStroke} ${
              animate && styles.svgDown
            }`}>
            j
          </div>
          <div className='text-[3rem] font-extrabold'>.</div>
        </div>
      </div>
      <div className='w-[20rem]'>
        <ul className='flex flex-row justify-evenly'>
          <li>
            <a className='tracking-wider'>Home</a>
          </li>
          <li>
            <a className='tracking-wider'>About</a>
          </li>
          <li>
            <a className='tracking-wider'>Work</a>
          </li>
          <li>
            <a className='tracking-wider'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
