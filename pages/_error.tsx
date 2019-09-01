import React from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './_error.scss';

export interface ErrorProps {
  statusCode?: number;
}

export function ErrorPage({statusCode}: ErrorProps) {
  return (
    <BasePage>
      <Header/>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.sadEmoji}>:(</p>
          <h1>Error {statusCode ? statusCode : 'on client'}</h1>
          <p className='subtitle'>Something went wrong displaying this page</p>
          <p className={styles.links}>
            <a href='#' onClick={() => history.back()}>Back</a>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </p>
        </div>
      </div>
      <Footer dark />
    </BasePage>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : null;
  return { statusCode };
};

export default ErrorPage;
