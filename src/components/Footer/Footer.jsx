import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [servicesExpanded, setServicesExpanded] = useState(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/assets/carbon-logo.webp" alt="Carbon Printing Press LLC" className="footer-logo-img" />
                        </Link>
                        <p>Carbon Printing Press LLC delivers high-quality printing, packaging and branding solutions from Sharjah, UAE.</p>
                    </div>

                    <div className="footer-top-grid">
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/products">Commercial Printing</Link></li>
                                <li><Link to="/products">Packaging Products</Link></li>
                                <li><Link to="/products">Large Format Printing</Link></li>
                                <li><Link to="/products">Digital &amp; UV Printing</Link></li>
                                <li><Link to="/products">Flexible Packaging</Link></li>
                            </ul>

                            {/* Collapsible extra services */}
                            <div className={`services-extra ${servicesExpanded ? 'services-extra--open' : ''}`}>
                                <ul>
                                    <li><Link to="/products">POSM</Link></li>
                                    <li><Link to="/products">Gift &amp; Promotion Items</Link></li>
                                    <li><Link to="/products">Signage &amp; Branding</Link></li>
                                    <li><Link to="/products">Corporate Stationery</Link></li>
                                    <li><Link to="/products">Labels &amp; Tags</Link></li>
                                </ul>
                            </div>

                            <button
                                className="services-toggle"
                                onClick={() => setServicesExpanded(prev => !prev)}
                                aria-label={servicesExpanded ? 'Show fewer services' : 'Show more services'}
                            >
                                {servicesExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                            </button>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="tel:+971563766467"><FaPhoneAlt size={11} /> +971 5 6376 6467</a></li>
                                <li><a href="https://wa.me/971563766467"><FaPhoneAlt size={14} /> WhatsApp Us</a></li>
                                <li><a href="mailto:sales@carbonprintstore.com"><FaEnvelope size={14} /> sales@carbonprintstore.com</a></li>
                                <li><span><FaMapMarkerAlt size={14} /> Sharjah, UAE</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Carbon Printing Press LLC. All rights reserved.</p>
                        <p className="developer-credit">
                            Developed by <a href="https://www.webexxy.com/" target="_blank" rel="noopener noreferrer">Webexxy</a>
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/carbonprintingpress?cplk=MW1jdXJ1YTV1ZjZleQ%3D%3D&utm_source=qr" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/carbon-printing-press-llc/" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/share/1drPkkyfKe/?mibextid=wwXIfr" className="social-link" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
