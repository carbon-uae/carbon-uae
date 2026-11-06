import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const navbarVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
};

const navLinkVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const handleCall = (e) => {
        e.preventDefault();
        window.location.href = 'tel:+971563766467';
        setTimeout(() => setMenuOpen(false), 150);
    };

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            id="navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="navbar-container">
                <motion.div variants={navLinkVariants}>
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img src="/assets/carbon-logo.webp" alt="Carbon Printing Press LLC" className="logo-img" />
                    </Link>
                </motion.div>

                <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <motion.li variants={navLinkVariants}>
                        <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#about" onClick={closeMenu}>About</a>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#services" onClick={closeMenu}>Services</a>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <Link to="/products" className={isActive('/products')} onClick={closeMenu}>Products</Link>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#contact" onClick={closeMenu}>Contact</a>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="tel:+971563766467" className="nav-cta" onClick={handleCall}>
                            <FaPhoneAlt size={13} /> Call Now
                        </a>
                    </motion.li>
                    <motion.li variants={navLinkVariants} className="nav-social-item">
                        <div className="nav-social-links" aria-label="Carbon Printing Press social media">
                            <a
                                href="https://www.instagram.com/carbonprintingpress?cplk=MW1jdXJ1YTV1ZjZleQ%3D%3D&utm_source=qr"
                                className="nav-social-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/carbon-printing-press-llc/"
                                className="nav-social-link"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1drPkkyfKe/?mibextid=wwXIfr"
                                className="nav-social-link"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </motion.li>
                </ul>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
