import React from 'react';

const PageContent = (props: React.ComponentProps<any>) => (
  <div style={{
    maxWidth: '900px',
    padding: '15px',
    margin: 'auto'
  }}>
    {props.children}
  </div>
);

export default PageContent;
