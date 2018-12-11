import React from 'react';

import Logo from '../Logo';

import { headerNavbar } from '../../utils/constant';

import styles from './styles.module.scss';

const Header = () => (
  <header className="header navbar navbar-expand-md navbar-light py-4">
    <a href="#!" className="navbar-brand">
     <Logo />
    </a>
    <nav className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        {
          headerNavbar && headerNavbar.map((item, index) => (
            <li key={index}>
              <a href={item.to} className={`ml-5 ${styles.link}`}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);

export default Header;
