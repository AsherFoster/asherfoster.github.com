import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import rootStyles from './root.css';
import {pageview} from '../lib/gtag';

Router.events.on('routeChangeComplete', (url: string) => pageview(url));

const PageLayout = (props) => (
  <React.Fragment>
    <Head>
      <title>Asher Foster</title>
    </Head>
    {props.children}
    <style jsx>{rootStyles}</style>
  </React.Fragment>
);

export default PageLayout;
