import React from 'react';
import Head from 'next/head';
import BasePage from './BasePage';
import Header from './Header';
import Footer from './Footer';
import styles from './PageLayout.css';

const PageLayout = (props) => (
  <BasePage>
    <Head>
      <title>Asher Foster{props.title ? ` - ${props.title}` : ''}</title>
    </Head>
    <Header/>
    <div id='top-section' className='theme-dark'>
      <div id='top-section-text'>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    </div>
    {props.children}
    <Footer/>
    <style jsx>{styles}</style>
  </BasePage>
);

export default PageLayout;
