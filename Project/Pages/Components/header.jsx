import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

const Header = () => {
    return (
    <>
      <div className={`${styles.header}`}>
        <head>
          <meta charset="utf-8" />
          <link rel="icon" type="image/png" href={logo} />
        </head>
        <header id="mainheader">
          <nav>
            <ul className={`${styles.ul}`}>
              <li className={styles.li}><img src={logo} width="75" alt="Logo" /></li>
              <li className={styles.li}>
                <h3>Acme Inc</h3>
              </li>
              <li className={styles.li}><a href="homepage">Home</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  };

export default Header;