import React from 'react';
import styles from './PageHead.module.css';

type PageHeadProps = {
  title: string;
  subtitle?: string;
  image?: string;
  imageLight?: string;
};

const PageHead = (props: PageHeadProps) => (
  <header className={styles.heroWrapper}>
    <div className={styles.heroText}>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    { props.image ? (
      <div className={styles.heroImageWrapper}>
        <div className={styles.heroTriangle}/>
        <img className={styles.heroImage + (props.imageLight ? ' only-dark' : '')} src={props.image}/>
        {props.imageLight ? <img className={styles.heroImage + ' only-light'} src={props.imageLight}/> : null}
      </div>
    ) : null}
  </header>
);

export default PageHead;
