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
      footer {
        color: #FFF;
        font-family: 'Roboto Mono', 'Courier Sans', monospace;
      }
      #footer-stripe {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 100px 100vw;
        border-color: transparent transparent #058CDC transparent;
        z-index: -2;
      }
      .footer-text {
        display: flex;
        background: #058CDC;
      }
      .footer-text * {
        margin: 18px;
      }
      `}
    </style>
  </footer>
);

export default Footer;
