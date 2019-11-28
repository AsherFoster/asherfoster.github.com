import React from 'react';

function Code(props) {
  const source = props.source;
  const lines = source.split('\n').map((l, i) => {
    // Hack to replace double spaces with double nbsp
    return (<div key={i}>{l.replace(/\s\s/g, '\u00A0\u00A0')}</div>);
  });
  return (<code>
    {lines}
  </code>);
}

export default Code;
