import React from 'react';
import styles from './PageHead.scss';

type PageHeadProps = {
  title: string;
  subtitle?: string;
};

const PageHead = (props: PageHeadProps) => (
  <div className={styles.topSection}>
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  </div>
);

export default PageHead;
