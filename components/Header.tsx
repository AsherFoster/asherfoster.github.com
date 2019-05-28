import React from 'react';
import Link from 'next/link';
import styles from './Header.scss';

export type HeaderProps = {
  block?: boolean; // Defaults to absolute
  hideName?: boolean; // Hide the name on the left
  fixedToggle?: boolean; // Whether the toggle on mobile should be fixed
};

type HeaderState = {
  mobileNavOpen: boolean
};

class Header extends React.Component {
  // @ts-ignore
  public props: HeaderProps;
  public state: HeaderState;
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };

  }
  public render() {
    return (
      <React.Fragment>
        <nav className={styles.mainHeader + ' ' + styles.nav + (this.props.block ? '' : ' ' + styles.absolute)}>
          {
            this.props.hideName ? null : (
              <Link href='/'>
                <a className='nounderline'>Asher Foster</a>
              </Link>
            )
          }
          <span className='flex'/>
          <div className='desktop'>
            <Link href='/about'>
              <a>About</a>
            </Link>
            <Link href='/portfolio'>
              <a>Portfolio</a>
            </Link>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </div>
        </nav>
        <button
          className={styles.headerToggle + ' mobile ' + (this.props.fixedToggle === false ? '' : styles.fixed)}
          onClick={() => this.toggleNav()}>
          <img src='/static/menu-white.png' />
        </button>
        <nav className={styles.mobileHeader + ' mobile'} style={{display: this.state.mobileNavOpen ? '' : 'none'}}>
          <button
            className={styles.headerClose + ' mobile'}
            onClick={() => this.toggleNav()}
          >
            <img src='/static/close-white.svg' />
          </button>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/experiments'>
                <a>Experiments</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
  public toggleNav() {
    document.body.classList.toggle('lock-scroll');
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }
}

export default Header;
