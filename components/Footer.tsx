import React from 'react';
import Link from 'next/link';
import styles from './Footer.css';

const Footer = (props) => (
  <footer>
    <div className={'footer-text ' + (props.dark ? 'theme-dark' : 'theme-light')}>
      <p>&copy; Asher Foster 2019</p>
      <span className='flex'/>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <a href='//github.com/AsherFoster'>Github</a>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
    <style jsx>{styles}</style>
  </footer>
);

export default Footer;
