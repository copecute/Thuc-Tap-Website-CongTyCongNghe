import React, { Fragment } from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import Styles from './Header.module.css';
import Menu from './menu';
import logo from "assets/images/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <header className={clsx(Styles.header)}>
        <nav className={clsx(Styles.nav, Styles.container)}>
          <div className={clsx(Styles.nav__data)}>
            <Link to="#" className={clsx(Styles.nav__logo)}>
            <img src={logo} alt="Logo"/>
            </Link>
            <div className={clsx(Styles.nav__toggle)} onClick={toggleMenu}>
              <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* nav bar */}
          <Menu showMenu={showMenu} />

        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
