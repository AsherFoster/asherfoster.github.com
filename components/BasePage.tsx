import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {pageview} from '../lib/gtag';

Router.events.on('routeChangeComplete', (url: string) => pageview(url));

const BasePage = (props: {children: any}) => (
  <React.Fragment>
    <Head>
      <title>Asher Foster</title>
    </Head>
    {props.children}
  </React.Fragment>
);

export default BasePage;
