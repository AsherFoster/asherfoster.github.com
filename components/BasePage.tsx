import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {pageview} from '../lib/gtag';

Router.events.on('routeChangeComplete', (url: string) => pageview(url));

const BasePage = (props: {children: any, dark?: boolean}) => {
  useEffect(() => {
    if (!props.dark) return;
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  });
  return (
    <React.Fragment>
      <Head>
        <title>Asher Foster</title>
      </Head>
      {props.children}
    </React.Fragment>
  );
};

export default BasePage;
