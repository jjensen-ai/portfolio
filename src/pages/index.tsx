import NavBar from '@/components/NavBar';
import Content from '@/components/Content';
import styles from '@/styles/content.module.css';

export default function Home() {
  return (
    <main>
      <div className={`${styles.contentContainer}`}>
        <NavBar />
        <div className={`${styles.scrollingWrapper}`}>
          <Content />
        </div>
      </div>
    </main>
  );
}
