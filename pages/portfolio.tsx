import React, {ChangeEvent} from 'react';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';
import TextBadge from '../components/TextBadge';
import styles from './portfolio.scss';

export interface PortfolioItem {
  name: string;
  description: string;
  img: string;
  techs: string[];
  links: [string, string][];
}
export interface PortfolioState {
  filter: string;
  items: PortfolioItem[];
}

const portfolioItems: PortfolioItem[] = [
  {
    name: 'Canal',
    description: 'I got sick of writing features for a bot, and built this to simplify it.',
    img: '/static/canal.png',
    techs: ['Node.js', 'Kubernetes', 'Vue', 'PostgreSQL'],
    links: [['Homepage', '//canal.nz']]
  },
  {
    name: 'This Site',
    description: 'It\'s this site. I use it to demo that I can, in fact, make a website.',
    img: '/static/portfolio-site.png',
    techs: ['Typescript', 'React', 'Next.js'],
    links: [['Github', '//github.com/asherfoster/asherfoster.github.io']],
  },
  {
    name: 'WTFSIW',
    description: 'An ICT assessment gone crazy. Need a quick movie? Try it out.',
    img: '/static/wtfsiw.png',
    techs: ['Node.js', 'Docker', 'Typescript', 'SQLite'],
    links: [
      ['Web', '//whatthefuckshouldiwatch.asherfoster.com'],
      ['Github', '//github.com/asherfoster/wtfsiw']
    ]
  },
  {
    name: 'Developster',
    description: 'I was part of a team on a journey to kickstart young entrepreneurs',
    img: '/static/developster-blur.jpg',
    techs: ['Angular', 'Azure'],
    links: [
      ['Blog', '//medium.com/Developster-Archive'],
    ]
  },
  {
    name: 'Experiments',
    description: 'Testing out web technologies and publishing the results.',
    img: '/static/unicorns.png',
    techs: ['Javascript', 'Travis', 'Luck'],
    links: [
      ['Web', '//asherfoster.com/experiments'],
      ['Github', '//github.com/asherfoster/experiments']
    ]
  },
  {
    name: 'Admin Center',
    description: 'A control panel to interface with my APIs in a pretty way.',
    img: '/static/frontend-blur.png',
    techs: ['Typescript', 'Vue'],
    links: [['Github', '//github.com/asherfoster/apis']],
  },
  {
    name: 'Discord Bots',
    description: 'I\'ve made a handful of discord bots, including my latest generation which dynamically runs scripts.',
    img: '/static/shortener-code.png',
    techs: ['Typescript', 'Discord.js', 'Node.js'],
    links: [['Github', '//github.com/pointlessdev/discordscriptbot']],
  },
  {
    name: 'APIs',
    description: 'Back end systems for authentication and other things.',
    img: '/static/shortener-code.png',
    techs: ['Node.js', 'Typescript', 'Azure', 'Docker'],
    links: [['Github', '//github.com/asherfoster/apis']],
  },
  {
    name: 'HTTPS Proxy',
    description: 'Somewhere blocked HTTPS on their network, so I built a proxy to get around it.',
    img: '/static/shortener-code.png',
    techs: ['Node.js'],
    links: [
      ['Github', '//github.com/asherfoster/HTTPSProxy']
    ]
  },
  {
    name: 'Lineage Checker',
    description: 'I wanted to learn React, so I built a little app to check if a LineageOS build is available for a device.',
    img: '/static/lineage-checker.png',
    techs: ['Javascript', 'React', 'React Native'],
    links: [
      ['Mobile Version', '//github.com/asherfoster/lineagecheckerapp'],
      ['Web App', '//github.com/asherfoster/lineagecheckerweb']
    ],
  },
  {
    name: 'JS Canvas Stuff',
    description: 'Building low level physics and game engines is a fun thing to do when I\'m bored.',
    img: '/static/canvas.png',
    techs: ['Javascript'],
    links: [
      ['Minesweeper', '//asherfoster.com/experiments/8'],
      ['Physics!', '//asherfoster.com/experiments/7'],
    ]
  },
  {
    name: 'Server Status',
    description: 'I had a bunch of sites and a couple of screens. Why not make a status monitor!',
    img: '/static/frontend.png',
    techs: ['Javascript', 'Angular.js', 'WebSockets'],
    links: [
      ['Github', '//github.com/asherfoster/serverstatus'],
    ]
  }
];

let techs: string[] = [].concat.apply(['All'], portfolioItems.map(i => i.techs) as any[]);
techs = techs.filter((tech: string, i: number) => techs.indexOf(tech) === i).sort(); // Dedupe and sort

class Portfolio extends React.Component {
  public state: PortfolioState;
  constructor(props: {}) {
    super(props);
    this.state = {
      filter: '',
      items: portfolioItems
    };
  }
  // When the user does an action that changes the filter, it should update the URL Hash
  // When the URL hash updates, the filter will be applied
  public filterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setFilter(e.target.value === 'All' ? '' : e.target.value);
  }
  public hashChange = () => {
    const filter = window.location.hash.substr(1);
    this.setState({
      filter,
      items: filter === '' ?
        portfolioItems :
        portfolioItems.filter(item => item.techs.includes(filter))
    });
  }
  public setFilter(filter: string) { // TODO
    window.location.hash = filter;
  }
  public componentDidMount(): void {
    if(window.location.hash.length > 1) {
      this.setFilter(window.location.hash.substr(1)); // Set initial filter
    }
    window.addEventListener('hashchange', this.hashChange);
  }
  public componentWillUnmount(): void {
    window.removeEventListener('hashchange', this.hashChange);
  }

  public render() {
    return (
      <PageLayout title='My Portfolio' subtitle='Look, I make things!'>
        <PageContent>
          <h2>Some of the work I've done</h2>
          <p>Over the years I've gained quite the collection of random projects. Most of them I don't do much with any
            more, but they've all been critical in me gaining the skills I have. Have a scroll, see what I can do,
            then most importantly: hire me.</p>
          <div className={styles.selection}>
            <label htmlFor='tech-sort'>Filter by Tech:</label>
            {' '}
            <select id='tech-sort' value={this.state.filter} onChange={this.filterChange}>
              {techs.map((tech: string) => (<option key={tech} value={tech}>{tech}</option>))}
            </select>
          </div>
          <div className={styles.portfolioGrid}>
            {
              this.state.items.length === 0 ? (<p>No projects match that filter <a href='#'>Reset</a></p>) : null
            }
            {
              this.state.items.map(item => (<section
                key={item.name}
                className={styles.portfolioItem}
                style={{backgroundImage: `url(${item.img})`}}>
                <div className={styles.itemText}>
                  <h3 className='font-display'>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className={styles.links}>{
                    item.links.map(([display, url], i: number) => (<React.Fragment key={i}>
                      {i !== 0 ? ' - ' : ''}
                      <a href={url}>{display}</a>
                    </React.Fragment>))
                  }</div>
                  <div>{
                    item.techs.map((tech: string) => (<TextBadge key={tech} href={'#' + tech}>{tech}</TextBadge>))
                  }</div>
                </div>
                <div className={styles.itemShunt}/>
              </section>))
            }
          </div>
        </PageContent>
      </PageLayout>
    );
  }
}

export default Portfolio;
