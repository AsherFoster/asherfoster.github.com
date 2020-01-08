import React from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import Noise from '../components/Noise';
import styles from './_error.module.css';

export interface ErrorProps {
  statusCode?: number;
}

export function ErrorPage({statusCode}: ErrorProps) {
  return (
    <BasePage>
      <Header/>
      <div className={styles.errorWrapper}>
        <Noise className={styles.errorImage} />
        <div>
          <h1>oops</h1>
          <h2>error {statusCode ? statusCode : 'on client'}</h2>
          <p className={styles.errorLinks}>
            <Link href='/'>
              <a>Home</a>
            </Link>
            //
            <a href='#' onClick={() => history.back()}>Back</a>
          </p>
        </div>
      </div>
    </BasePage>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
