import Link from 'next/link';

const Header = () => (
  <header>
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
  </header>
);

export default Header;
