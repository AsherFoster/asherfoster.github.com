import React from 'react';
import Link from 'next/link';
import styles from './Footer.scss';

export type FooterProps = {
  dark?: boolean;
};

const Footer = (props: FooterProps) => (
  <footer>
    <div className={styles.footerText + (props.dark ? ' ' + styles.footerDark : '')}>
      <p>&copy; Asher Foster 2019</p>
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
