import React from 'react'
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>

        <h1 className={styles.logo}>SA Website</h1>
        <p className={styles.tagline}>Represent the Brand, Website, Stories, Titles</p>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/About" className={styles.navLink}>About</Link>
        <Link href="/Contact" className={styles.navLink}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;


