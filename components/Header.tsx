import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import {classes} from '../lib/utils';

export interface HeaderProps {
  block?: boolean; // Defaults to absolute
  hideName?: boolean; // Hide the name on the left
  clear?: boolean;
}

interface HeaderState {
  mobileNavOpen: boolean;
}

class Header extends React.Component {
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
        <nav className={classes(
          styles.nav,
          this.state.mobileNavOpen && styles.mobileNavOpen,
          this.props.block || styles.absolute,
          this.props.clear && styles.clear
        )}>
          <button className={styles.mobileNavToggle + ' mobile'} aria-label='Toggle menu' onClick={() => this.toggleNav()}>
            <img src={'/static/icons/' + (this.state.mobileNavOpen ? 'close-white.png' : 'menu-white.png')} alt='' />
          </button>
          <ul className={styles.navList}>
            {this.props.hideName ? null : (
              <li>
                <Link href='/'>
                  <a className='nounderline'>asher foster</a>
                </Link>
              </li>
              )}
            <span className='flex'/>
            <li>
              <Link href='/about'>
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <a>portfolio</a>
              </Link>
            </li>
            <li>
              <Link href='/experimentlist'>
                <a>experiments</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>contact</a>
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
