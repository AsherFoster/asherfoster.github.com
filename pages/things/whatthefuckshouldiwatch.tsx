import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageContent from '../../components/PageContent';

const Wtfsiw = () => (
  <PageLayout title='wtfsiw'
              subtitle='what the fuck should I watch?'
              image='/static/projects/wtfsiw.jpg'
              imageLight='/static/img/wtfsiw.jpg'
  >
    <PageContent>
      <p>So this is a tale of me taking things too far. I got tasked with an ICT assessment to build a movie recommendation site,
        and just happened to be shown <a href='//www.whatthefuckshouldimakefordinner.com/'>whatthefuckshouldimakefordinner.com/</a> at
        the same time. That's how this crazy project was born.
      </p>
      <a href='//wtfsiw.xyz'>Check it out at wtfsiw.xyz</a>
      <img src='/static/img/wtfsiw.jpg' style={{display: 'block', margin: 'auto'}} />
      <p>It's built with a dataset sourced from TMDb, who have a really handy API for this sort of thing.</p>
      <h2>Technical things</h2>
      <p>Front End: Vue.js. Back End: Express, Node.js, and SQLite. Hosted on Google App Engine</p>
      <a href='//github.com/asherfoster/wtfsiw'>It's on GitHub!</a>
    </PageContent>
  </PageLayout>
);

export default Wtfsiw;
