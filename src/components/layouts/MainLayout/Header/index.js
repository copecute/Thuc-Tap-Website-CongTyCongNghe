import React, { Fragment } from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'components/Link';

import Styles from './Header.module.css';
import Menu from './menu';
import logo from 'assets/images/logo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <header className={clsx(Styles.headerContainer)}>
        <div className={clsx(Styles.header)}>
          <div className={clsx(Styles.logo)}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={clsx(Styles.search)}>
            <input type="text" placeholder="tìm kiếm" />
            <button className={clsx(Styles.searchBtn)}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-256.000000, -1139.000000)" fill="currentcolor">
                    <path
                      d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"
                      id="search"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className={clsx(Styles.hotline)}>
            <ul>
              <li>
                <a href="tel:0888889530">
                  088-888-9350
                  <br />
                  Hỗ trợ khách hàng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <nav className={clsx(Styles.navBar)}>
        <nav className={clsx(Styles.nav, Styles.container)}>
          <div className={clsx(Styles.nav_data)}>
            <Link to="/" className={clsx(Styles.nav_logo)}>
              <img src={logo} alt="Logo" />
            </Link>

            <div className={clsx(Styles.RightMenubtn)}>
              <Link to="#" className={clsx(Styles.Cart)} title="Giỏ hàng">
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              <div className={clsx(Styles.nav_toggle)} onClick={toggleMenu}>
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* nav bar */}
          <Menu showMenu={showMenu} />
        </nav>
      </nav>
    </Fragment>
  );
}

export default Header;
