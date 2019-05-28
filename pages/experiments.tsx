import React from 'react';
import 'isomorphic-fetch';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';
import styles from './experiments.scss';

interface Props {
  experiments: string[];
}

const Experiments = ({experiments}: Props) => (
  <PageLayout title='Experiments'>
    <PageContent>
      <p>I like to make lots of small projects. Here's where I stick lots of the web based ones.
        Be warned: I build them to work, not to look good </p>
      <ol className={styles.list}>
        {experiments.map((experiment, i) => (
          <li key={i} className={styles.link}>
            <a href={'/experiments/' + i}>{i}.&nbsp;
              <span className={styles.underlineyBit}>
                {typeof experiment === 'string' ? experiment : `Experiment #${i}`}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </PageContent>
  </PageLayout>
);

Experiments.getInitialProps = async () => {
  const res = await fetch('//asherfoster.com/experiments/experiments.json');
  const names = (await res.json()) as string[];
  return {experiments: names || ['Failed to load']};
};

export default Experiments;
