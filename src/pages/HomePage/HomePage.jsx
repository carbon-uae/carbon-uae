import React, { useEffect, useRef, useState } from 'react';
import {
    FaAward, FaShieldAlt, FaBolt, FaStar, FaBoxOpen, FaUsers,
    FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope,
} from 'react-icons/fa';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import MarqueeBar from '../../components/MarqueeBar/Marqueebar';
import useSeo from '../../hooks/useSeo';
import './HomePage.css';

const useReveal = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.06 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((element) => observer.observe(element));
        return () => elements?.forEach((element) => observer.unobserve(element));
    }, []);

    return ref;
};

const CountUp = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 1800 / steps);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const services = [
    { img: '/assets/generated-commercial-printing.webp', title: 'Commercial Printing', desc: 'Professional printing for brochures, flyers, business cards, reports and branded materials.' },
    { img: '/assets/packaging-products.webp', title: 'Packaging Products', desc: 'Custom packaging products with high-quality printing and finishing for retail and gifting.' },
    { img: '/assets/generated-large-format-posm.webp', title: 'Large Format Printing', desc: 'High-impact printing for displays, banners, posters and branded environments.' },
    { img: '/assets/generated-screen-printing.webp', title: 'Screen Printing', desc: 'Durable screen printing for promotional products, uniforms and custom branding.' },
    { img: '/assets/generated-digital-uv-printing.webp', title: 'Digital & UV Printing', desc: 'Precise digital and UV printing with vibrant colour, sharp detail and fast turnaround.' },
    { img: '/assets/generated-food-packaging.webp', title: 'Flexible Packaging', desc: 'Flexible food and product packaging designed for practical presentation and dependable protection.' },
    { img: '/assets/generated-posm-display.webp', title: 'Point of Sale Material (POSM)', desc: 'Printed displays and point-of-sale materials that help products stand out at the point of purchase.' },
    { img: '/assets/gift-promotion-items.webp', title: 'Gift & Promotion Items', desc: 'Branded gift and promotional items that keep your business memorable.' },
    { img: '/assets/generated-signage-branding.webp', title: 'Signage & Outdoor Branding', desc: 'Consistent signage and outdoor branding materials for professional spaces and campaigns.' },
    { img: '/assets/custom-apparel-uniforms.webp', title: 'Custom Apparel & Uniform Printing', desc: 'Custom apparel and uniform printing that helps teams look consistent, professional and easy to recognise.' },
];

const stats = [
    { num: 10, suffix: '+', label: 'Years Experience' },
    { num: 5000, suffix: '+', label: 'Projects Completed' },
    { num: 500, suffix: '+', label: 'Happy Clients' },
];

const features = [
    { icon: <FaAward />, label: 'High Quality Printing', sub: 'Consistent results across every project' },
    { icon: <FaBolt />, label: 'Fast Turnaround', sub: 'Reliable production and delivery timelines' },
    { icon: <FaStar />, label: 'Modern Machinery', sub: 'Technology built for precise finishing' },
    { icon: <FaShieldAlt />, label: 'Competitive Pricing', sub: 'Value without compromising quality' },
    { icon: <FaBoxOpen />, label: 'Custom Packaging Solutions', sub: 'Made around your product and brand' },
    { icon: <FaUsers />, label: 'Professional Team', sub: 'Support from brief to final delivery' },
];

const HomePage = () => {
    const pageRef = useReveal();

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.carbonprintstore.com/#organization',
        name: 'CARBON PRINTING PRESS LLC',
        legalName: 'CARBON PRINTING PRESS LLC',
        url: 'https://www.carbonprintstore.com/',
        logo: 'https://www.carbonprintstore.com/assets/carbon-logo-white.svg',
        image: 'https://www.carbonprintstore.com/assets/main-image.webp',
        description: 'High-quality commercial, gift item, uniform, digital, screen and packaging printing solutions in Sharjah, UAE.',
        telephone: '+971563766467',
        email: 'sales@carbonprintstore.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sharjah',
            addressCountry: 'AE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.3463,
            longitude: 55.4209,
        },
        hasMap: 'https://www.google.com/maps?q=Sharjah%2C%20UAE',
        areaServed: [
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'Country', name: 'United Arab Emirates' },
        ],
        serviceType: [
            'Commercial Printing',
            'Packaging Products',
            'Large Format Printing',
            'Screen Printing',
            'Digital and UV Printing',
            'Flexible Packaging',
            'Point of Sale Material (POSM)',
            'Gift and Promotion Items',
            'Signage and Outdoor Branding',
            'Custom Apparel and Uniform Printing',
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '18:00',
        },
        sameAs: [
            'https://www.instagram.com/carbonprintingpress?cplk=MW1jdXJ1YTV1ZjZleQ%3D%3D&utm_source=qr',
            'https://www.linkedin.com/company/carbon-printing-press-llc/',
            'https://www.facebook.com/share/1drPkkyfKe/?mibextid=wwXIfr',
        ],
    };

    const serviceCatalogSchema = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'Carbon Printing Press services',
        itemListElement: services.map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
                '@type': 'Service',
                name: service.title,
                description: service.desc,
                areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
                provider: { '@id': 'https://www.carbonprintstore.com/#organization' },
            },
        })),
    };

    useSeo({
        title: 'Carbon Printing Press LLC | Printing & Packaging Solutions in UAE',
        description: 'Carbon Printing Press LLC delivers high-quality commercial, gift item, uniform, digital, screen and packaging printing solutions in Sharjah, UAE.',
        canonicalUrl: 'https://www.carbonprintstore.com/',
        ogType: 'website',
        ogImage: 'https://www.carbonprintstore.com/assets/main-image.webp',
        schemas: [localBusinessSchema, serviceCatalogSchema],
    });

    return (
        <div ref={pageRef} className="hp-root">
            <HeroSlider />
            <MarqueeBar />

            <section className="hp-stats">
                <div className="hp-stats-inner container">
                    {stats.map((stat, index) => (
                        <div className="hp-stat reveal" key={stat.label} style={{ '--delay': `${index * 0.1}s` }}>
                            <div className="hp-stat-num"><CountUp target={stat.num} suffix={stat.suffix} /></div>
                            <div className="hp-stat-bar" />
                            <div className="hp-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hp-services section" id="services">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">What We Offer</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Our <em>Services</em></h2>

                    <div className="hp-services-grid">
                        {services.map((service, index) => (
                            <div
                                className="hp-svc-card reveal"
                                key={service.title}
                                style={{ '--delay': `${(index % 5) * 0.07}s` }}
                            >
                                <div className="hp-svc-img-wrap">
                                    <img src={service.img} alt={service.title} loading="lazy" />
                                    <div className="hp-svc-overlay" />
                                </div>
                                <div className="hp-svc-body">
                                    <h3 className="hp-svc-title">{service.title}</h3>
                                    <p className="hp-svc-desc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hp-about section" id="about">
                <div className="hp-about-slash" aria-hidden="true" />
                <div className="container hp-about-grid">
                    <div className="hp-about-visual reveal">
                        <div className="hp-about-img-frame">
                            <img src="/assets/carbon-about-stationery-v3.png" alt="Carbon-branded stationery, notebooks and printed papers" />
                        </div>
                    </div>
                    <div className="hp-about-text reveal">
                        <div className="hp-section-eyebrow hp-eyebrow-left">
                            <span className="hp-eyebrow-line" />
                            <span className="hp-eyebrow-text">About Carbon</span>
                        </div>
                        <h2 className="hp-section-heading">
                            <span className="hp-heading-white">Printing</span> <em>Possibilities</em><br />for Every <span className="hp-heading-white">Brand</span>
                        </h2>
                        <p>
                            Carbon Printing Press LLC is a printing and branding solutions provider based in the United Arab Emirates, offering a wide range of commercial printing, packaging, promotional products and customised branding services.
                        </p>
                        <p>
                            We believe that every printed product represents a brand. That is why we focus on understanding our customers' requirements and delivering solutions that combine quality, creativity and practical value.
                        </p>
                        <p>
                            Our services cover everything from business stationery and marketing materials to customised packaging, large-format graphics, corporate gifts, signage and apparel.
                        </p>
                        <p>
                            With advanced printing technology, professional customer support, fast production and delivery, high-quality finishing and competitive pricing, we help every project make a strong impression.
                        </p>
                        <div className="hp-features-grid">
                            {features.map((feature, index) => (
                                <div className="hp-feature reveal" key={feature.label} style={{ '--delay': `${index * 0.08}s` }}>
                                    <div className="hp-feature-icon">{feature.icon}</div>
                                    <div>
                                        <strong>{feature.label}</strong>
                                        <span>{feature.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hp-contact section" id="contact">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">Get In Touch</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Start Your <em>Next Project</em></h2>
                    <div className="hp-contact-layout">
                        <div className="hp-contact-cards reveal">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />, title: 'Find Us',
                                    lines: ['Sharjah, UAE'],
                                },
                                {
                                    icon: <FaPhoneAlt />, title: 'Call or WhatsApp',
                                    links: [
                                        { href: 'tel:+971563766467', label: '+971 5 6376 6467' },
                                        { href: 'https://wa.me/971563766467', label: 'WhatsApp Us' },
                                    ],
                                },
                                {
                                    icon: <FaClock />, title: 'Working Hours',
                                    lines: ['9:00 AM – 6:00 PM'],
                                },
                                {
                                    icon: <FaEnvelope />, title: 'Inquiry Email',
                                    links: [{ href: 'mailto:sales@carbonprintstore.com', label: 'sales@carbonprintstore.com' }],
                                },
                            ].map((item) => (
                                <div className="hp-contact-card" key={item.title}>
                                    <div className="hp-contact-card-icon">{item.icon}</div>
                                    <div className="hp-contact-card-body">
                                        <h4>{item.title}</h4>
                                        {item.lines?.map((line) => <p key={line}>{line}</p>)}
                                        {item.links?.map((link) => (
                                            <p key={link.href}><a href={link.href}>{link.label}</a></p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hp-map reveal">
                            <iframe
                                src="https://www.google.com/maps?q=Sharjah%2C%20UAE&output=embed"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carbon Printing Press location in Sharjah"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
