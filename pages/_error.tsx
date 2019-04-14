import React from 'react';
import Link from 'next/link';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './_error.css';

class Error extends React.Component {
  public static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  public render() {
    return (
      <BasePage>
        <Header/>
        <div className='wrapper theme-dark'>
          <div className='text'>
            <p className='sad-emoji font-display'>:(</p>
            <h1>Error {this.props.statusCode ? this.props.statusCode : 'on client'}</h1>
            <p className='subtitle'>Something went wrong displaying this page</p>
            <p className='links'>
              <a href='#' onClick={() => history.back()}>Back</a>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </p>
          </div>
        </div>
        <Footer dark />
        <style jsx>{styles}</style>
      </BasePage>
    );
  }
}

export default Error;
