import React from 'react';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';
import styles from './portfolio.module.css';

export interface PortfolioItem {
  name: string;
  description: string;
  img: string;
  links: [string, string][];
}

const portfolioItems: PortfolioItem[] = [
  {
    name: 'canal',
    description: 'cloud functions for discord bots',
    img: '/static/projects/canal.jpg',
    links: [['web', '//canal.nz']]
  },
  {
    name: 'website',
    description: 'it\'s this site!\n I hope you like it :)',
    img: '/static/projects/portfolio.jpg',
    links: [
      ['web', '//asherfoster.com'],
      ['github', '//github.com/asherfoster/asherfoster.github.io']
    ],
  },
  {
    name: 'constellation',
    description: 'brand and packaging design for a new take on coffee',
    img: '/static/projects/constellation.jpg',
    links: [
      ['thing', '/things/constellation'],
    ],
  },
  {
    name: 'wtfsiw',
    description: 'a nzqa assesment taken too far',
    img: '/static/projects/wtfsiw.jpg',
    links: [
      ['web', '//whatthefuckshouldiwatch.asherfoster.com'],
      ['github', '//github.com/asherfoster/wtfsiw']
    ]
  },
  {
    name: 'experiments',
    description: 'testing modern web technologies, publicly',
    img: '/static/projects/experiments.jpg',
    links: [
      ['Web', '//asherfoster.com/experiments'],
      ['Github', '//github.com/asherfoster/experiments']
    ]
  },
  {
    name: 'developster',
    description: 'technical lead at a startup empowering young entreprenuers',
    img: '/static/projects/developster.jpg',
    links: [
      ['Blog', '//medium.com/Developster-Archive'],
    ]
  }
];

// let techs: string[] = [].concat.apply(['All'], portfolioItems.map(i => i.techs) as any[]);
// techs = techs.filter((tech: string, i: number) => techs.indexOf(tech) === i).sort(); // Dedupe and sort


function Portfolio() {
  return (
    <PageLayout title='my portfolio'
                subtitle='i do things (sometimes)'
                image='/static/img/constellation-site.jpg'
                imageLight='/static/img/constellation-bottles.jpg'
    >
      <PageContent>
        <h2>Some of the work I've done</h2>
        <p>After 5 years, I've amassed a collection of projects. Here's a few of my favourites, built with a range of techs including
          Kubernetes, React, and Node.</p>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map(item => (
            <div key={item.name} className={styles.portfolioItem}>
              <img src={item.img} className={styles.portfolioImage} />
              <div className={styles.portfolioItemText}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className={styles.portfolioItemLinks}>{
                  item.links.map(([display, url], i: number) => (<React.Fragment key={i}>
                    {i !== 0 ? ' // ' : ''}
                    <a href={url}>{display}</a>
                  </React.Fragment>))
                }</div>
              </div>
            </div>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  );
}

export default Portfolio;
