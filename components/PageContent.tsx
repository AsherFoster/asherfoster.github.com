import React from 'react';

const PageContent = (props: React.ComponentProps<any>) => (
  <main style={{
    maxWidth: '900px',
    padding: '15px',
    margin: 'auto'
  }} className='main'>
    {props.children}
    <style jsx>{`
      .main > :global(img) {
        max-width: 100%;
        text-align: center;
      }
    `}</style>
  </main>
);

export default PageContent;
