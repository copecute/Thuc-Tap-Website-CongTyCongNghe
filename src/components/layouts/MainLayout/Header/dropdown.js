import {React, useState, Fragment} from 'react';
import clsx from 'clsx';
import Styles from './Header.module.css';

function Dropdown({ index, title, dropdownContent }) {
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  return (
    <Fragment>
      <li className={clsx(Styles.dropdown__item)}>
        <div className={clsx(Styles.nav__link, Styles.dropdown__button)} onClick={() => toggleDropdown(index)}>
          {title}
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
          </svg>
        </div>
        <div className={clsx(Styles.dropdown__container, showDropdown === index && Styles.showDropdown)}>
        {dropdownContent}
        </div>
      </li>
    </Fragment>
  );
}

export default Dropdown;
