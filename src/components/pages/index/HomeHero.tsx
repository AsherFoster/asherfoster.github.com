import styles from './HomeHero.module.css';
import useSwirly from '../../../lib/useSwirly';
import Wave from './Wave';

const HomeHero = () => {
  const swirlyRef = useSwirly({ color: '#FF4081', size: 12, margin: 25 });

  return (
    <div className={styles.hero}>
      <canvas ref={swirlyRef} className={styles.swirly} />
      <div className={styles.heroCopy}>
        <h1>Hello, world!</h1>
        <p>Blah blah subtitle</p>
      </div>

      <Wave className={styles.primaryWave} />
    </div>
  );
};

export default HomeHero;
