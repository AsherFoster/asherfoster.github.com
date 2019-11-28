import React from 'react';

const PageContent = (props: React.ComponentProps<any>) => (
  <main style={{
    maxWidth: '900px',
    padding: '15px',
    margin: 'auto'
  }}>
    {props.children}
  </main>
);

export default PageContent;
