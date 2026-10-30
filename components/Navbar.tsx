"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Tem<span>Six</span>
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="#about" className={styles.navLink}>About</Link>
        <Link href="#services" className={styles.navLink}>Services</Link>
        <Link href="#process" className={styles.navLink}>Process</Link>
      </div>

      <div className={styles.cta}>
        {/* <Link href="#contact" className="pill-btn primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
          Let&apos;s Talk
        </Link> */}
        
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <Link href="#about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#services" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="#process" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Process</Link>
      </div>
    </nav>
  );
}
