import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './index.css';
import rootStyles from '../components/root.css';

const Index = () => (
  <React.Fragment>
    <Header/>
    <img src='../static/background.jpg' className='background-img'/>
    <div id='header-bg' className='backdrop'/>
    <div id='stripe-0' className='backdrop'/>
    <div id='splash'>
      <div id='stripe-1' className='stripe stripe-rev'/>
      <div className='splash-text'>
        <h1>Hi, I'm Asher</h1>
        <p>Full stack web and cloud developer</p>
      </div>
    </div>
    <div id='section-1' className='section'>
      <div id='stripe-2' className='stripe'/>
      <div className='section-text'>
        <h2>Front End</h2>
        <p>I've had years of experience messing around with front end development, starting with Angular.js,
          and ending up here, at React + Next.js</p>
        <div className='section-links'>
          <Link href='/experiments'>
            <a>Experiments ></a>
          </Link>
          <a href='//medium.com/developster-archive'>Developster Blog&nbsp;></a>
        </div>
      </div>
      <div className='section-image'>
        <img src='../static/frontend.png'/>
      </div>
    </div>
    <div id='section-2' className='section section-rev'>
      <div id='stripe-3' className='stripe stripe-rev'/>
      <div className='section-image'>
        <img src='../static/backend.png'/>
      </div>
      <div className='section-text'>
        <h2>Back End</h2>
        <p>I do back end too, building REST APIs, as well as various cloud services</p>
        <div className='section-links'>
          <a href='//github.com/AsherFoster/APIs'>API Server ></a>
          <a href='//github.com/AsherFoster/ServerStatus/'>Server Status ></a>
        </div>
      </div>
    </div>
    <div id='section-3' className='section'>
      <div id='stripe-4' className='stripe'/>
      <div className='section-item'>
        <img src='../static/cloud.svg'/>
        <h3>Cloud</h3>
        <a href='/wip'>Azure work&nbsp;></a>
      </div>
      <div className='section-item'>
        <img src='../static/layers.svg'/>
        <h3>Full stack</h3>
        <a href='//github.com/AsherFoster/ServerStatus/'>Server Status app&nbsp;></a>
      </div>
      <div className='section-item'>
        <img src='../static/edit.svg'/>
        <h3>Design</h3>
        <a href='/wip'>Portfolio Development&nbsp;></a>
      </div>
    </div>
    <Footer/>
    <style jsx>{styles}</style>
    <style jsx>{rootStyles}</style>
  </React.Fragment>
);

export default Index;
