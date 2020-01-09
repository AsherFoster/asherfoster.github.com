import React from 'react';
import { NextPageContext } from 'next';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import styles from './_error.module.css';
import Stars from '../components/Stars';

export interface ErrorProps {
  statusCode?: number;
}

export function ErrorPage({statusCode}: ErrorProps) {
  return (
    <BasePage dark>
      <Header />
      <div className={styles.errorWrapper}>
        <Stars className={styles.errorImage} />
        <div>
          <h1>{statusCode === 404 ? 404 : 'oops'}</h1>
        </div>
        {statusCode !== 404 && <h2 className={styles.errorInfo}>error {statusCode ? statusCode : 'on client'}</h2>}
      </div>
    </BasePage>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
