import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './index.scss';

const Index = () => (
  <BasePage>
    <Head>
      <title>Asher Foster</title>
    </Head>
    <Header hideName={true} />
    <section className={styles.topSection}>
      <img src='/static/frontend-blur.png' className={styles.topSectionBackdrop} />
      <div className={styles.topSectionMobileSlash + ' mobile'} />
      <div className={styles.topSectionWrapper}>
        <div className={styles.topSectionText}>
          <h1>Asher Foster</h1>
          <p>I like to build full stack web apps</p>
          <Link href='/portfolio'>
            <a className='arrow'>My Portfolio</a>
          </Link>
        </div>
      </div>
      <div className={styles.topSectionSlash + ' desktop'} />
      <Link href='#'>
        <a className={styles.sectionArrow}>
          <img src='/static/arrow-down-white.svg' className={styles.sectionArrow} />
        </a>
      </Link>
    </section>
    <section className={styles.frontEndSection}>
      <img src='/static/developster-blur.png' className={styles.frontEndSectionBackdrop} />
      <div className={styles.frontEndSlash} />
      <div className={styles.frontEndWrapper}>
        <div className={styles.frontEndText}>
          <h2>Front End</h2>
          <p>I've been working with code for about 5 years now, building my skills up to where they are now.
            I'm well versed in making custom front end products, using various web technologies
            including Angular, React, Vue and Typescript</p>
          <div className={styles.links}>
            <a href='//medium.com/developster-archive' className='arrow'>Developster Blog</a>
            <Link href='/experiments'>
              <a className='arrow'>Experiments</a>
            </Link>
          </div>
        </div>
      </div>
      <Link href='#'>
        <a className={styles.sectionArrow}>
          <img src='/static/arrow-down-black.svg' className={styles.sectionArrow} />
        </a>
      </Link>
    </section>
    <div className={styles.backEndSlash + ' mobile'} />
    <section className={styles.backEndSection}>
      <div className={styles.backEndWrapper}>
        <div className={styles.backEndText}>
          <h2>Back End</h2>
          <p>I've built everything from simple scraping scripts through to fully fledged <b>REST APIs</b>. Starting off with
            PHP and quickly moving into <b>Node.js</b>, I've gained a lot of experience with designing secure and performant systems.</p>
          <div className={styles.links}>
            <Link href='/portfolio'>
              <a className='arrow'>APIs</a>
            </Link>
            {/*<Link href='/experiments'>*/}
            {/*  <a className='arrow'></a>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
      <div className='flex' />
      <div className={styles.backEndImageWrapper}>
        <img src='/static/azure.png' className={styles.backEndImage} />
      </div>
      <Link href='#'>
        <a className={styles.sectionArrow}>
          <img src='/static/arrow-down-white.svg' className={styles.sectionArrow} />
        </a>
      </Link>
    </section>
    <section className={styles.cards}>
      <div className={styles.cardsItem}>
        <img src='/static/cloud-blue.svg' />
        <h2>Cloud</h2>
        <p>I've been using Azure for about 3 years, creating a variety of services.</p>
        <Link href='//github.com/asherfoster/letsencryptfunctions'>
          <a className='arrow'>Azure LetsEncrypt</a>
        </Link>
      </div>
      <div className={styles.cardsItem}>
        <img src='/static/layers-blue.svg' />
        <h2>Full Stack</h2>
        <p>Often my projects tie back end and front end together to make some crazy tool.</p>
        <Link href='//github.com/asherfoster/wtfsiw'>
          <a className='arrow'>WTFSIW?</a>
        </Link>
      </div>
      <div className={styles.cardsItem}>
        <img src='/static/edit-blue.svg' />
        <h2>Design</h2>
        <p>I've designed and built countless apps, and I don't compromise on aesthetics</p>
        <Link href='/constellation'>
          <a className='arrow'>Constellation Cold Brew</a>
        </Link>
      </div>
    </section>
    <Footer />
  </BasePage>
);

export default Index;
