import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    return (
    <>
      <div className>
        <head>
          <meta charset="utf-8" />
          <link rel="icon" type="image/png" href={logo} />
        </head>
        <header id="mainheader">
          <nav>
            <ul>
              <li><img src={logo} width="75" alt="Logo" /></li>
              <li>
                <h3>Acme Inc</h3>
              </li>
              <li><a href="homepage">Home</a></li>
            </ul>
          </nav>
        </header>
      </div>
    <>
    );
  };

export default Header;