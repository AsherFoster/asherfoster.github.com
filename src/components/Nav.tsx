import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.navContent}>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/experiments">
        <a>experiments</a>
      </Link>
      <a href="//twitter.com/asherfoster">
        <img src="/assets/img/logo-twitter.svg" className={styles.iconLink} />
      </a>
      <a href="//github.com/asherfoster">
        <img src="/assets/img/logo-github.svg" className={styles.iconLink} />
      </a>
    </div>
  </nav>
);

export default Nav;
