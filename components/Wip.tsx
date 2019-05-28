import React from 'react';
import PageContent from './PageContent';

const Wip = () => (
    <PageContent>
      <div style={{textAlign: 'center'}}>
        <img src='/static/build.svg' style={{width: '100px'}}/>
        <h2>Work in progress</h2>
        <p>Come back later!</p>
      </div>
    </PageContent>
  );

export default Wip;
