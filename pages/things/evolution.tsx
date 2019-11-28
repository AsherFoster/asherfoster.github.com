import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageContent from '../../components/PageContent';

const Evolution = () => (
  <PageLayout title='evolution' subtitle='welcome to mk 7' image='/static/projects/evolution.jpg'>
    <PageContent>
      <h2>Work in progress page: have some pretty images instead</h2>
      <img src='/static/projects/constellation-render-1.jpg' alt='A couple of constellation bottles' />
      <img src='/static/projects/constellation-render-2.jpg' alt='A smol constellation bottle' />
    </PageContent>
  </PageLayout>
);

export default Evolution;
