import React from 'react';
import Link from 'next/link';

export interface TextBadgeProps {
  children: any;
  routerLink?: string;
  onClick?: (...props: any) => any;
  href?: string;
}

const styles = {
  a: {
    fontStyle: 'normal',
    color: 'inherit'
  },
  badge: {
    background: '#EDEDED',
    borderRadius: 4,
    display: 'inline-block',
    margin: 2,
    padding: 4
  }
};

const TextBadge = (props: TextBadgeProps) => {
  const Badge = () => (<div style={styles.badge}>{props.children}</div>);
  if (props.routerLink) {
    return (<Link href={props.routerLink}>
      <a className='subtle' style={styles.a}><Badge /></a>
    </Link>);
  }
  if (props.onClick || props.href) {
    return (<a className='subtle' style={styles.a} href={props.href || '#'} onClick={props.onClick}><Badge /></a>);
  }
  return Badge();
};

export default TextBadge;
