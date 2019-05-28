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
};

const PageLayout = (props: PageLayoutProps) => (
  <React.Fragment>
    <Head>
      <title>Asher Foster - {props.htmlTitle || props.title}</title>
    </Head>
    <Header />
    <PageHead title={props.title} subtitle={props.subtitle} />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default PageLayout;
