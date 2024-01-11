import styles from './Header.module.css';
import Button from './components/Button';
import Space from './components/Space';
import Tabs from './components/Tabs';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.topSection}>
        <h2 className={styles.name}>
          yoonian / <span className={styles.bold}>github-issue-ex</span>
        </h2>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              backgroundColor: 'transparent',
              color: 'black',
            }}
          >
            Watch
          </Button>
          <Space />
          <Button
            style={{
              backgroundColor: 'transparent',
              color: 'black',
            }}
          >
            Fork <div className={styles.circle}>5</div>
          </Button>
          <Space />
          <Button
            style={{
              backgroundColor: 'transparent',
              color: 'black',
            }}
          >
            Star
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
