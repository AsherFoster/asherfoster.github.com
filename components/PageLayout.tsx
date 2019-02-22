import Header from './Header';
import Footer from './Footer';
import rootStyles from './root.css';
import styles from './PageLayout.css';
import Head from 'next/head';

const PageLayout = (props) => (
  <React.Fragment>
    <Head>
      <title>Asher Foster{props.title ? ` - ${props.title}` : ''}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
    </Head>
    <Header/>
    <div id='top-section'>
      <div id='top-section-stripe-1' className='backdrop'/>
      <div id='top-section-stripe-2' className='backdrop'/>
      <div id='top-section-text'>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    </div>
    {props.children}
    <Footer/>
    <style jsx>{rootStyles}</style>
    <style jsx>{styles}</style>
  </React.Fragment>
);

export default PageLayout;
