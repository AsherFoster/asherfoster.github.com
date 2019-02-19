import Link from 'next/link';
import styles from './Footer.css';

const Footer = (props) => (
    <footer>
        <div id='footer-stripe' style={{borderBottomWidth: props.stripeHeight || 200}}/>
        <div className='footer-text'>
            <p>&copy; Asher Foster 2019</p>
            <span className='flex'/>
            <a className='header-link' href='//github.com/AsherFoster'>Github</a>
            <a className='header-link' href='//twitter.com/asherfoster'>Twitter</a>
            <Link href='/contact'>
                <a className='header-link'>Contact</a>
            </Link>
        </div>
        <style jsx>{styles}</style>
    </footer>
);

export default Footer;
