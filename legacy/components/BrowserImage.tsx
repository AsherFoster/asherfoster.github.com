import React from 'react';

export interface Props {
  className?: string;
  chromeColor?: string;
  src?: string;
  children?: React.ReactNode;
  alt?: string;
}

function BrowserImage(props: Props) {
  return (<div className={props.className}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 447 18' style={{width: '100%', display: 'block'}}>
      <g fill='none' fillRule='evenodd'>
        {/* tslint:disable:max-line-length */}
        <path fill={props.chromeColor || '#98989D'} d='M0,18 L0,3.72413793 C0,1.67586207 1.55228296,0 3.44951768,0 L443.550482,0 C445.447717,0 447,1.67586207 447,3.72413793 L447,18 L0,18 Z'/>
        <path fill='#F64848' d='M12.1939954,9 C12.1939954,10.6568182 10.8073851,12 9.09699769,12 C7.38661033,12 6,10.6568182 6,9 C6,7.34318182 7.38661033,6 9.09699769,6 C10.8073851,6 12.1939954,7.34318182 12.1939954,9'/>
        <path fill='#2DC432' d='M32.8406467,9 C32.8406467,10.6568182 31.4540363,12 29.743649,12 C28.0332616,12 26.6466513,10.6568182 26.6466513,9 C26.6466513,7.34318182 28.0332616,6 29.743649,6 C31.4540363,6 32.8406467,7.34318182 32.8406467,9'/>
        <path fill='#FAB625' d='M22.517321,9 C22.517321,10.6568182 21.1307107,12 19.4203233,12 C17.709936,12 16.3233256,10.6568182 16.3233256,9 C16.3233256,7.34318182 17.709936,6 19.4203233,6 C21.1307107,6 22.517321,7.34318182 22.517321,9'/>
        {/* tslint:enable:max-line-length */}
      </g>
    </svg>
    {props.src ? (<img src={props.src} style={{width: '100%', display: 'block'}} alt={props.alt} />) : props.children}
  </div>);
}

export default BrowserImage;
