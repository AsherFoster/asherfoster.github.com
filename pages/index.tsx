import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './index.css';
import rootStyles from '../components/root.css';

const Index = () => (
    <React.Fragment>
        <Header />
        <img src='../static/background.jpg' className='background-img'/>
        <div id='header-bg' className='backdrop'/>
        <div id='stripe-0' className='backdrop'/>
        <div id='splash'>
            <div id='stripe-1' className='stripe stripe-rev'/>
            <div className='splash-text'>
                <h1>Hi, I'm Asher</h1>
                <p>Full stack web and cloud developer</p>
            </div>
        </div>
        <div id='section-1' className='section'>
            <div id='stripe-2' className='stripe'/>
            <div className='section-text'>
                <h2>Front End</h2>
                <p>If one examines constructivism, one is faced with a choice: either reject
                    capitalist dematerialism or conclude that sexual identity has objective value.
                    However, Debord promotes the use of constructivism to deconstruct the status
                    quo. The example of neotextual deconstructivism depicted in Eco’s The Name
                    of the Rose emerges again in The Island of the Day Before, although
                    in a more self-sufficient sense. </p>
                <div className='section-links'>
                    <a href='/experiments'>Experiments ></a>
                    <a href='//medium.com/developster-archive'>Developster Blog&nbsp;></a>
                </div>
            </div>
            <div className='section-image'>
                <img src='../static/frontend.png' />
            </div>
        </div>
        <div id='section-2' className='section section-rev'>
            <div id='stripe-3' className='stripe stripe-rev'/>
            <div className='section-image'>
                <img src='../static/backend.png'/>
            </div>
            <div className='section-text'>
                <h2>Back End</h2>
                <p>If one examines constructivism, one is faced with a choice: either reject
                    capitalist dematerialism or conclude that sexual identity has objective value.
                    However, Debord promotes the use of constructivism to deconstruct the status
                    quo. The example of neotextual deconstructivism depicted in Eco’s The Name
                    of the Rose emerges again in The Island of the Day Before, although
                    in a more self-sufficient sense. </p>
                <div className='section-links'>
                    <a href='/wip'>API Server ></a>
                    <a href='/wip'>Server Status ></a>
                </div>
            </div>
        </div>
        <div id='section-3' className='section'>
            <div id='stripe-4' className='stripe'/>
            <div className='section-item'>
                <img src='../static/cloud.svg'/>
                <h3>Cloud</h3>
                <a href='/wip'>Azure work&nbsp;></a>
            </div>
            <div className='section-item'>
                <img src='../static/layers.svg'/>
                <h3>Full stack</h3>
                <a href='/wip'>Server Status app&nbsp;></a>
            </div>
            <div className='section-item'>
                <img src='../static/edit.svg'/>
                <h3>Design</h3>
                <a href='/wip'>Portfolio Development&nbsp;></a>
            </div>
        </div>
        <Footer/>
        <style jsx>{styles}</style>
        <style jsx>{rootStyles}</style>
    </React.Fragment>
);

export default Index;
