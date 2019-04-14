import React from 'react';
import PageLayout from '../components/PageLayout';

const Contact = () => (
  <PageLayout title='Contact me'>
    <div className='wrapper'>
      <p>Contact forms are difficult, so DM me on something!</p>
      <a href='//twitter.com/asherfoster' className='subtle contact-button'>
        Twitter
      </a>
      <a href='//keybase.io/asherfoster' className='subtle contact-button'>
        Keybase
      </a>
    </div>
    <style jsx>{`
    .wrapper {
      text-align: center;
      margin: 20px 0;
    }
    .contact-button {
      display: block;
      border-radius: 6px;
      margin: 5px auto;
      padding: 6px;
      text-align: center;
      background: #d6d6d6;
      max-width: 200px;
    }
    .contact-button:hover {
      background: #c4c4c4;
    }
    `}</style>
  </PageLayout>
);

export default Contact;
