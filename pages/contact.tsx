import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from './contact.scss';

const Contact = () => (
  <PageLayout title='Contact me'>
    <div className={styles.wrapper}>
      <p>Contact forms are difficult, so DM me on something!</p>
      <a href='//twitter.com/asherfoster' className={styles.contactButton}>
        Twitter
      </a>
      <a href='//keybase.io/asherfoster' className={styles.contactButton}>
        Keybase
      </a>
    </div>
  </PageLayout>
);

export default Contact;
