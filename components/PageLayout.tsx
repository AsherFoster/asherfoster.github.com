import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PageHead from './PageHead';

type PageLayoutProps = {
  title: string;
  htmlTitle?: string;
  subtitle?: string;
  children?: any;
  image?: string;
  imageLight?: string;
  description?: string;
};

const PageLayout = (props: PageLayoutProps) => (
  <React.Fragment>
    <Head>
      <title>Asher Foster - {props.htmlTitle || props.title}</title>
      <meta name='description'
            content={
              props.description ?
                props.description :
                // tslint:disable-next-line:max-line-length
                "I'm Asher, and this is a portfolio thing. I'm a full stack web platform developer and this site is a collection of random web experiments"
            }
      />
    </Head>
    <Header />
    <PageHead title={props.title} subtitle={props.subtitle} image={props.image} imageLight={props.imageLight} />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default PageLayout;
