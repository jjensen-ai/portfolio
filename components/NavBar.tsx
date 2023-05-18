import styles from '@/styles/navBar.module.css';
import { useState } from 'react';

export default function NavBar() {
  const [brandAnimate, setBrandAnimate] = useState(false);
  const [brandReverse, setBrandReverse] = useState(false);

  return (
    <div
      className={`flex flex-row justify-between w-auto px-10 items-center ${styles.navBar}`}>
      <div>
        <div
          className={`flex relative`}
          onMouseEnter={() => setBrandAnimate(true)}
          onMouseLeave={() => {
            setBrandReverse(true), setBrandAnimate(false);
          }}>
          <div
            className={`text-[3rem] font-black ${styles.textStroke} ${
              brandAnimate
                ? styles.textUp
                : brandReverse && styles.textDownEmpty
            }`}>
            j
          </div>
          <div
            className={`text-[3rem] ml-[4px] font-black ${styles.textStroke} ${
              brandAnimate
                ? styles.textDown
                : brandReverse && styles.textUpEmpty
            }`}>
            j
          </div>
          <div className='text-[3rem] font-extrabold'>.</div>
        </div>
      </div>
      <div className='w-[20rem]'>
        <ul className='flex flex-row justify-evenly'>
          <li>
            <a className='tracking-wider text-white'>Home</a>
          </li>
          <li>
            <a className='tracking-wider text-white'>About</a>
          </li>
          <li>
            <a className='tracking-wider text-white'>Work</a>
          </li>
          <li>
            <a className='tracking-wider text-white'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
