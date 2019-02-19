import Link from 'next/link';

const Footer = () => (
  <footer>
    <div id='footer-stripe' />
    <div className='footer-text'>
      <p>&copy; Asher Foster 2019</p>
      <span className='flex' />
      <Link href='/github'>
        <a className='header-link'>Github</a>
      </Link>
      <Link href='/twitter'>
        <a className='header-link'>Twitter</a>
      </Link>
      <Link href='/contact'>
        <a className='header-link'>Contact</a>
      </Link>
      <Link href='/privacy'>
        <a className='header-link'>Privacy Policy</a>
      </Link>
    </div>
    <style jsx>
      {`

      `}
    </style>
  </footer>
);

export default Footer;
