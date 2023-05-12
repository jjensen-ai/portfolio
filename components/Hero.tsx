import styles from '@/styles/hero.module.css';
import GithubIcon from '@/public/icons/GithubIcon';
import TwitterIcon from '@/public/icons/TwitterIcon';
import LinkedInIcon from '@/public/icons/LinkedInIcon';

export default function Hero() {
  return (
    <div
      className={`flex flex-col w-full h-[43rem] relative ${styles.displayPic}`}>
      <div className='flex justify-end mt-[2rem]'>
        <div className='absolute right-0 pr-5 mt-4'>
          <h1 className={`${styles.tagLine}`}>Developer</h1>
          <h1 className={`${styles.tagLine}`}>UX UI Enthusiast</h1>
        </div>
      </div>
      <div className='flex absolute bottom-16 w-full pl-12 items-center justify-between'>
        <div className='flex flex-col'>
          <span className={`${styles.name} tracking-wide `}>Jordon</span>
          <span className={`${styles.name} tracking-wide`}>Jensen</span>
        </div>
        <div className='flex flex-col absolute right-[8rem] items-center'>
          <h1 className='tracking-wide text-[1.5rem]'>Socials.</h1>
          <div>
            <ul className='flex flex-row justify-between w-[10rem]'>
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
    </div>
  );
}
