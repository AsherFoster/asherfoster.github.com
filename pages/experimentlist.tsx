import React from 'react';
import 'isomorphic-fetch';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';
import styles from './experimentlist.module.css';

interface Props {
  experiments: string[];
}

const Experimentlist = ({experiments}: Props) => (
  <PageLayout title='experiments' image='/static/img/countdown.jpg'>
    <PageContent>
      <p>I like to make lots of small projects. Here's where I stick lots of the web based ones.
        Be warned: I build them to work, not to look good </p>
      <ol className={styles.list}>
        {
          experiments ?
            experiments.map((experiment, i) => (
              <li key={i} className={styles.link}>
                <a href={'/experiments/' + i}>{i}.&nbsp;
                  <span className={styles.underlineyBit}>
                {typeof experiment === 'string' ? experiment : `Experiment #${i}`}
              </span>
                </a>
              </li>
            )) : (<span>Failed to load experiments :(</span>)}
      </ol>
    </PageContent>
  </PageLayout>
);

Experimentlist.getInitialProps = async () => {
  try {
    const res = await fetch('//asherfoster.com/experiments/experiments.json');
    const names = (await res.json()) as string[];
    return {experiments: names};
  } catch (e) {
    return {experiments: null};
  }
};

export default Experimentlist;
