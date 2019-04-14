import React from 'react';
import Link from 'next/link';
import styles from './Header.css';

export interface HeaderProps {
  block: boolean; // Defaults to absolute
  hideName: boolean; // Hide the name on the left
  fixedToggle: boolean; // Whether the toggle on mobile should be fixed
}

class Header extends React.Component {
  // @ts-ignore
  public props: HeaderProps;
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };

  }
  public render() {
    return (
      <React.Fragment>
        <nav className={'main-header' + (this.props.block ? '' : ' absolute')}>
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
              <a className='header-link subtle'>About</a>
            </Link>
            <Link href='/portfolio'>
              <a className='header-link subtle'>Portfolio</a>
            </Link>
            <Link href='/contact'>
              <a className='header-link subtle'>Contact</a>
            </Link>
          </div>
        </nav>
        <button
          className={'mobile header-toggle button-reset' + (this.props.fixedToggle === false ? '' : ' fixed')}
          onClick={() => this.toggleNav()}>
          <img src='/static/menu-white.png' />
        </button>
        <nav className='mobile-header mobile' style={{display: this.state.mobileNavOpen ? '' : 'none'}}>
          <button
            className='mobile header-close button-reset'
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
        <style jsx>{styles}</style>
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
