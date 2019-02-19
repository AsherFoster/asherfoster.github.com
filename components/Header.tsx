import Link from 'next/link';
import styles from './Header.css';

const Header = (props) => (
  <header className={props.block ? '' : 'absolute'}>
    <Link href='/'>
      <a className='nohover'>Asher Foster</a>
    </Link>
    <span className='flex'/>
    <Link href='/'>
      <a className='header-link'>Home</a>
    </Link>
    <Link href='/portfolio'>
      <a className='header-link'>Portfolio</a>
    </Link>
    <Link href='/contact'>
      <a className='header-link'>Contact</a>
    </Link>
    <style jsx>{styles}</style>
  </header>
);

export default Header;
