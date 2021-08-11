import React from 'react';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';

const Contact = () => (
  <PageLayout title='say hello' image='/static/img/me.jpg'>
    <PageContent>
      <p>Contact forms are difficult, so DM me on something!</p>
      <a href='//twitter.com/asherfoster'>
        Twitter
      </a>
      <br />
      <a href='//keybase.io/asherfoster'>
        Keybase
      </a>
    </PageContent>
  </PageLayout>
);

export default Contact;
