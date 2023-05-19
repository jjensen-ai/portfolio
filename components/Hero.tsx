import styles from '@/styles/hero.module.css';
import GithubIcon from '@/public/icons/GithubIcon';
import TwitterIcon from '@/public/icons/TwitterIcon';
import LinkedInIcon from '@/public/icons/LinkedInIcon';

export default function Hero() {
  return (
    <div
      className={`flex flex-col w-screen md:h-[52rem] h-[48rem] md:px-[5rem] px-[3rem] md:pb-[14rem] pb-[8rem] text-white justify-between ${styles.displayPic} ${styles.slanted}`}>
      <div className='flex flex-col mt-10'>
        <h1 className={`${styles.tagLine}`}>Developer</h1>
        <h1 className={`${styles.tagLine}`}>UX UI Enthusiast</h1>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <span className={`${styles.name} tracking-wide`}>Jordon</span>
          <span className={`${styles.name} tracking-wide`}>Jensen</span>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='tracking-wide sm:flex hidden text-[1.5rem]'>
            Socials.
          </h1>
          <ul className='flex sm:flex-row flex-col items-center justify-between sm:w-[10rem] w-[0.25rem] sm:h-14 h-[10rem]'>
            <li>
              <a>
                <div className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                  <GithubIcon />
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                  <TwitterIcon />
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                  <LinkedInIcon />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
