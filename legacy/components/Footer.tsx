import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => (
  <footer>
    <div className={styles.footerText}>
      <p>&copy; Asher Foster {new Date().getFullYear()}</p>
      <span className='flex'/>
      <div>
        <Link href='/'>
          <a >Home</a>
        </Link>
        <a href='//github.com/AsherFoster'>Github</a>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
