"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <nav className={styles.navbar} aria-label="Primary navigation">
        <Link href="/" className={styles.logoLink} aria-label="Carbon Printing Press home">
          <Image
            src="/assets/carbon-logo.webp"
            alt=""
            width={170}
            height={127}
            className={styles.logo}
            priority
          />
        </Link>

        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="https://wa.me/971563766467?text=Hello%20Carbon%20Printing%20Press%2C%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noreferrer" className={`${styles.quoteButton} pill-button primary`}>
          Request a quote
        </Link>

        <button
          type="button"
          className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-navigation" className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="https://wa.me/971563766467?text=Hello%20Carbon%20Printing%20Press%2C%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noreferrer" className={`${styles.mobileQuote} pill-button primary`} onClick={() => setIsOpen(false)}>
          Request a quote
        </Link>
      </div>
    </header>
  );
}
