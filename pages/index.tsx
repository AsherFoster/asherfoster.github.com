import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './index.css';
import rootStyles from '../components/root.css';

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Asher Foster</title>
    </Head>
    <Header hideName={true} />
    <section className='section section-slashed theme-dark' id='top-section'>
      <img src='/static/frontend-blur.png' className='section-backdrop'/>
      <div className='section-slash mobile' />
      <div className='section-text-wrapper theme-dark'>
        <div className='section-text'>
          <h1>Asher Foster</h1>
          <p>Full stack web and cloud developer</p>
          <Link href='/portfolio'>
            <a className='arrow'>My Portfolio</a>
          </Link>
        </div>
      </div>
      <div className='section-slash desktop' />
      <Link href='#'>
        <a className='section-arrow'>
          <img src='/static/arrow-down-white.svg' className='section-arrow' />
        </a>
      </Link>
    </section>
    <section className='section section-slashed theme-light' id='front-end-section'>
      <img src='/static/developster-blur.png' className='section-backdrop'/>
      <div className='section-slash desktop' />
      <div className='section-text-wrapper theme-light'>
        <div className='section-text'>
          <h1>Front End</h1>
          <p>I've been working with code for about 5 years now, building my skills up to where they are now.
            I'm well versed in making custom front end products, using various web technologies
            including <b>Angular</b>, <b>React</b>, <b>Vue</b> and <b>Typescript</b></p>
          <div className='section-links'>
            <a href='//medium.com/developster-archive' className='arrow'>Developster Blog</a>
            <Link href='/experiments'>
              <a className='arrow'>Experiments</a>
            </Link>
          </div>
        </div>
      </div>
      <Link href='#'>
        <a className='section-arrow'>
          <img src='/static/arrow-down-black.svg' className='section-arrow' />
        </a>
      </Link>
      <div className='section-slash mobile' />
    </section>
    <section className='section theme-dark' id='back-end-section'>
      <div className='section-slash mobile' />
      <div className='section-text-wrapper theme-dark'>
        <div className='section-text'>
          <h1>Back End</h1>
          <p>I've built everything from simple scraping scripts through to fully fledged <b>REST APIs</b>. Starting off with
            PHP and quickly moving into <b>Node.js</b>, I've gained a lot of experience with designing secure and performant systems.</p>
          <div className='section-links'>
            <Link href='/portfolio'>
              <a className='arrow'>APIs</a>
            </Link>
            <Link href='/experiments'>
              <a className='arrow'></a>
            </Link>
          </div>
        </div>
      </div>
      <img src='/static/azure.png' className='section-image'/>
      <Link href='#'>
        <a className='section-arrow'>
          <img src='/static/arrow-down-white.svg' className='section-arrow' />
        </a>
      </Link>
    </section>
    <section className='cards theme-light' id='cards-section'>
      <div className='cards-item'>
        <img src='/static/cloud-blue.svg' />
        <h2 className='font-display'>Cloud</h2>
        <p>I've been using Azure for about 3 years, creating a variety of services.</p>
        <Link href='/blog/azure'>
          <a className='arrow'>Azure Work</a>
        </Link>
      </div>
      <div className='cards-item'>
        <img src='/static/layers-blue.svg' />
        <h2 className='font-display'>Full Stack</h2>
        <p>Often my projects tie back end and front end together to make some crazy tool.</p>
        <Link href='/blog/azure'>
          <a className='arrow'>Server Status</a>
        </Link>
      </div>
      <div className='cards-item'>
        <img src='/static/edit-blue.svg' />
        <h2 className='font-display'>Design</h2>
        <p>I've designed and built countless apps, and aesthetics are always important to me.</p>
        <Link href='/blog/azure'>
          <a className='arrow'>Portfolio Development</a>
        </Link>
      </div>
    </section>
    <Footer />
    <style jsx>{styles}</style>
    <style jsx>{rootStyles}</style>
  </React.Fragment>
);

export default Index;
