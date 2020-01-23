import React, {useEffect} from 'react';
import Head from 'next/head';

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
        <title>asher foster</title>
      </Head>
      {props.children}
    </React.Fragment>
  );
};

export default BasePage;
