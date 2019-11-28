import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageContent from '../../components/PageContent';

const Evolution = () => (
  <PageLayout title='evolution' subtitle='welcome to mk 7' image='/static/projects/evolution.jpg'>
    <PageContent>
      <h2>I've iterated though far too many websites</h2>
      <p>Every time I want to test out a new tech, or just get sick of the last one, I update this site. They've been built with everything
        from PHP, Plain HTML/CSS, Angular, and finally React/Next. I'm sure this isn't the last version, but it's definitely the best.</p>
      <div className='evolution-images'>
        <img src='/static/history/mk1.jpg' alt='Mark 1' />
        <caption>Even in 2015 I made sure it had a dark theme</caption>
        <img src='/static/history/mk2.jpg' alt='Mark 2' />
        <caption>2016. I went through a photography phase. I'm sorry.</caption>
        <img src='/static/history/mk3.jpg' alt='Mark 3' />
        <caption>Finally realised I sucked at design, and used a Material UI framework</caption>
        <img src='/static/history/mk4.jpg' alt='Mark 4' />
        <caption>2017. Although this looks similar to the previous one, it was completely rewriten in Angular</caption>
        <img src='/static/history/mk5.jpg' alt='Mark 5' />
        <caption>2019. First gen with Next.js. This one was... a little strange. Unfortunately, git never forgets.</caption>
        <img src='/static/history/mk6.jpg' alt='Mark 6' />
        <caption>Mk6 "Hip and cool". Serif fonts are hard to pull off</caption>
      </div>
    </PageContent>
    <style jsx>{`
    .evolution-images > img {
      max-width: 100%;
      text-align: center;
    }
    .evolution-images > caption {
      text-align: center;
      font-style: italic;
      display: block;
      margin-bottom: 2em;
    }
    `}</style>
  </PageLayout>
);

export default Evolution;
