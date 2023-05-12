import NavBar from '@/components/NavBar';
import Content from '@/components/Content';
import styles from '@/styles/content.module.css';

export default function Home() {
  return (
    <main>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.scrollingWrapper}`}>
          <div className={`${styles.scrollingSpeed}`}>
            <NavBar />
            <Content />
          </div>
        </div>
      </div>
    </main>
  );
}
