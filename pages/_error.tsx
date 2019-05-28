import React from 'react';
import {NextContext} from 'next';
import Link from 'next/link';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './_error.scss';

export type ErrorProps = {
  statusCode?: number;
};

class ErrorPage extends React.Component {
  public props: ErrorProps = {};
  public static getInitialProps({ res, err }: NextContext) {
    const statusCode = res ? res.statusCode : err ? (err as any).statusCode : null;
    return { statusCode };
  }
  public render() {
    return (
      <BasePage>
        <Header/>
        <div className={styles.wrapper}>
          <div>
            <p className={styles.sadEmoji}>:(</p>
            <h1>Error {this.props.statusCode ? this.props.statusCode : 'on client'}</h1>
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
}

export default ErrorPage;
