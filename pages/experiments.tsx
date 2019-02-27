import 'isomorphic-fetch';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';

interface Props {
  experiments: string[];
}

const Experiments = ({experiments}: Props) => (
  <PageLayout title='Experiments'>
    <PageContent>
      <p>I like to make lots of small projects. Here's where I stick lots of the web based ones.
        Be warned: I build them to work, not to look good </p>
      <ol>
        {experiments.map((experiment, i) => (
          <li key={i}>
            <a href={'/experiments/' + i}>{i}.&nbsp;
              <span className='underliney-bit'>{typeof experiment === 'string' ? experiment : `Experiment #${i}`}</span>
            </a>
          </li>
        ))}
      </ol>
    </PageContent>
    <style jsx>{`
ol {
  list-style: none;
  padding-left: 0;
}
li a {
  padding: 12px 24px;
  display: block;
}
li a:hover {
  background: rgba(0,0,0,0.04);
  text-decoration: none;
}
li:hover .underliney-bit {
  text-decoration: underline;
}
      `}</style>
  </PageLayout>
);

Experiments.getInitialProps = async () => {
  const res = await fetch('//asherfoster.com/experiments/experiments.json');
  return {experiments: (await res.json()) as string[]};
};

export default Experiments;
