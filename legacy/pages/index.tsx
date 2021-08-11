import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BasePage from '../components/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Code from '../components/Code';
import styles from './index.module.css';
import BrowserImage from '../components/BrowserImage';

function Index() {
  const [movie, setMovie] = useState({
    movie_id: 313369,
    title: 'La La Land',
    overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician...'
  });
  const [loading, setLoading] = useState(false);

  async function runExample() {
    setLoading(true);
    try {
      const r = await fetch('https://wtfsiw.xyz/movie');
      const j = await r.json();
      setMovie({
        movie_id: j.movie_id,
        title: j.title,
        overview: j.overview.substr(0, 140)
      });
    } catch(e) {
      setMovie(null);
    }
    setLoading(false);
  }
  // noinspection HtmlRequiredTitleElement (disabled because webstorm doesn't realise title has been set elsewhere)
  return (
    <BasePage>
      <Head>
        {/* tslint:disable-next-line:max-line-length */}
        <meta name='description' content="I'm Asher, and this is a portfolio thing. I'm a full stack web platform developer and this site is a collection of random web experiments"/>
      </Head>
      <Header hideName={true}/>
      <section className={styles.topSection}>
        <picture className={styles.topSectionImage}>
          <source type='image/webp' srcSet='/static/img/constellation-bottles.webp' />
          <img src='/static/img/constellation-bottles.png' alt="A bunch of bottles (I swear I'm not an alcoholic)" />
        </picture>
        <div className={styles.sectionContent}>
          <div className={styles.topSectionText}>
            <h1>asher foster</h1>
            <p className={styles.topSectionSubtitle}>full stack web platform developer</p>
            <Link href='/portfolio'>
              <a className='button link__arrow'>portfolio</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.frontEndSection}>
        <div className={styles.sectionContent}>
          <div className='flex'> {/* Wrap to fix distortion */}
            <BrowserImage className={styles.frontEndImage}  src='/static/img/canal.jpg' alt='Screenshot of Canal' />
          </div>
          <div className={styles.frontEndText}>
            <h1>front end</h1>
            <p>I've been working with code for about 5 years now, building my skills up to where they are now.
              I'm well versed in making custom front end products, using various web technologies
              including Angular, React, Vue and Typescript</p>
            <div className={styles.linkRow}>
              <a href='//medium.com/developster-archive'>developster</a>
              //
              <Link href='/experimentlist'>
                <a>experiments</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.evolutionSection}>
        <h1>evolution</h1>
        <Link href='/things/evolution'>
          <a>see the change</a>
        </Link>
      </section>
      <section className={styles.backEndSection}>
        <div className={styles.sectionContent}>
          <div className={styles.backEndText}>
            <h1>back end</h1>
            <p>I've built everything from simple scraping scripts through to fully fledged REST APIs. Starting off with
              PHP and quickly moving into Node.js, I've gained a lot of experience with designing secure and performant systems.</p>
            <div className={styles.linkRow}>
              <Link href='//canal.nz'>
                <a>canal</a>
              </Link>
              //
              <Link href='/things/whatthefuckshouldiwatch'>
                <a>wtfsiw</a>
              </Link>
            </div>
          </div>
          <div className='flex'/>
          <div className={styles.backEndExample}>
            <div className={styles.backEndExampleTitle}>
              <h2>GET wtfsiw.xyz/movie</h2>
              <span className='flex'/>
              <button onClick={() => loading || runExample()} className='button button__subtle'>{loading ? 'loading' : 'try it'}</button>
            </div>
            {
              movie ? (<Code source={`{
  "movie_id": ${movie.movie_id},
  "title": "${movie.title}",
  "overview": "${movie.overview}",
  ...
}`}/>) : (<h2 style={{textAlign: 'center'}}>Yikes, something went wrong :(</h2>)
            }
          </div>
        </div>
      </section>
      <section className={styles.cards + ' ' + styles.sectionContent}>
        <div className={styles.cardsItem} style={{backgroundImage: 'url("/static/cards/bottles.jpg")'}}>
          <h2>design</h2>
          <p>learning by iterating</p>
          <div className={styles.linkRow}>
            <Link href='/things/constellation'>
              <a>constellation</a>
            </Link>
            //
            <Link href='/things/evolution'>
              <a>evolution</a>
            </Link>
          </div>
        </div>
        <div className={styles.cardsItem} style={{backgroundImage: 'url("/static/cards/canal.jpg")'}}>
          <h2>cloud</h2>
          <p>scaling to infinity and beyond</p>
          <div className={styles.linkRow}>
            <Link href='//canal.nz'>
              <a>canal</a>
            </Link>
          </div>
        </div>
        <div className={styles.cardsItem} style={{backgroundImage: 'url("/static/cards/eyes.jpg")'}}>
          <h2>random</h2>
          <p>giving me free time was a bad idea</p>
          <div className={styles.linkRow}>
            {/*<Link href='/things/blobchain'>
              <a>blobchain</a>
            </Link>
            //*/}
            <Link href='/experimentlist'>
              <a>experiments</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </BasePage>
  );
}

export default Index;
