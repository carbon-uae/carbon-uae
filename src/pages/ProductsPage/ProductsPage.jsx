import React, { useEffect, useRef, useState } from 'react';
import { FaBolt, FaShieldAlt, FaMagic, FaTint, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useSeo from '../../hooks/useSeo';
import './ProductsPage.css';

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
            { threshold: 0.12 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((element) => observer.observe(element));
        return () => elements?.forEach((element) => observer.unobserve(element));
    }, []);

    return ref;
};

const products = [
    {
        img: '/assets/generated-business-cards.webp',
        title: ['Luxury ', 'Business Cards'],
        whiteTitleParts: [1],
        desc: 'Premium business cards with crisp detail, carefully selected stocks and high-quality finishing that represent your brand with confidence.',
        icon: <FaMagic />,
        heading: 'Why It Matters',
        points: [
            'Creates a memorable first impression for every meeting',
            'Supports custom sizes, stocks, colours and finishing options',
            'Maintains sharp typography and accurate brand colours',
            'Suitable for professional teams, events and corporate networking',
        ],
    },
    {
        img: '/assets/generated-packaging-boxes.webp',
        title: ['Custom ', 'Packaging Boxes'],
        whiteTitleParts: [0],
        desc: 'Printed packaging boxes designed around your product, with strong presentation, practical construction and finishing that elevates the unboxing experience.',
        icon: <FaShieldAlt />,
        heading: 'Why It Matters',
        points: [
            'Protects products while presenting a consistent brand identity',
            'Custom dimensions and artwork for retail, gifting and delivery',
            'Available with premium finishes and structural options',
            'Helps products stand out on shelves and in customer hands',
        ],
        reverse: true,
    },
    {
        img: '/assets/generated-food-packaging.webp',
        title: ['Printed ', 'Food Packaging'],
        whiteTitleParts: [1],
        desc: 'Food packaging solutions for cafés, restaurants and food brands, combining clear presentation with dependable everyday performance.',
        icon: <FaShieldAlt />,
        heading: 'Why It Matters',
        points: [
            'Supports branded takeaway and food-service experiences',
            'Clear, attractive artwork helps customers recognise your products',
            'Designed for practical handling, storage and delivery',
            'Available across bags, boxes, cups and other packaging formats',
        ],
    },
    {
        img: '/assets/generated-shopping-bags.webp',
        title: ['Branded ', 'Shopping Bags'],
        desc: 'Professional shopping bags that carry your products securely while extending your brand presence beyond the store or delivery point.',
        icon: <FaBolt />,
        heading: 'Why It Matters',
        points: [
            'Turns every customer purchase into a moving brand impression',
            'Supports paper and flexible bag formats for different needs',
            'Printed artwork stays consistent with your wider brand system',
            'Suitable for retail, gifting, events and promotional campaigns',
        ],
        reverse: true,
    },
    {
        img: '/assets/generated-promotional-products.webp',
        title: ['Branded ', 'Promotional Products'],
        whiteTitleParts: [1],
        desc: 'Promotional items made to keep your business visible, useful and memorable for customers, partners and event audiences.',
        icon: <FaMagic />,
        heading: 'Why It Matters',
        points: [
            'Extends brand awareness through useful everyday products',
            'Supports campaigns, launches, events and client gifting',
            'Combines practical products with consistent branded artwork',
            'Scales from small promotional runs to larger business campaigns',
        ],
    },
    {
        img: '/assets/generated-stationery-branding-v2.webp',
        title: ['Corporate Stationery', ' & ', 'Branding Materials'],
        whiteTitleParts: [0],
        desc: 'A coordinated range of stationery and branded materials that gives every customer touchpoint a polished, professional finish.',
        icon: <FaTint />,
        heading: 'Why It Matters',
        points: [
            'Creates a consistent identity across daily business communication',
            'Covers stationery, presentations, office materials and brand collateral',
            'Keeps colour, typography and finishing aligned across every item',
            'Supports both established brands and new business launches',
        ],
        reverse: true,
    },
    {
        img: '/assets/generated-screen-printing.webp',
        title: ['Uniforms & ', 'Custom Apparel'],
        whiteTitleParts: [1],
        desc: 'Custom apparel and uniform printing that helps teams look consistent, professional and easy to recognise across every customer touchpoint.',
        icon: <FaShieldAlt />,
        heading: 'Why It Matters',
        points: [
            'Creates a consistent and professional team appearance',
            'Supports branded uniforms, workwear and promotional apparel',
            'Uses durable printing suited to regular wear and washing',
            'Helps customers identify your team quickly and confidently',
        ],
    },
    {
        img: '/assets/generated-flyers-brochures.webp',
        title: ['Professional ', 'Flyers', ' & Brochures'],
        whiteTitleParts: [0, 1],
        desc: 'Marketing print that explains your offer clearly, presents your products beautifully and gives your sales team a polished tool to share.',
        icon: <FaBolt />,
        heading: 'Why It Matters',
        points: [
            'Communicates products, services and promotions at a glance',
            'Supports single-page flyers and multi-page brochures',
            'Uses vivid imagery and precise colour reproduction',
            'Suitable for handouts, events, retail counters and direct outreach',
        ],
        reverse: true,
    },
    {
        img: '/assets/generated-product-labels-tags.webp',
        title: ['Product ', 'Labels & ', 'Tags'],
        whiteTitleParts: [2],
        desc: 'Clear labels and tags that support product information, pricing, packaging and brand recognition across your customer experience.',
        icon: <FaShieldAlt />,
        heading: 'Why It Matters',
        points: [
            'Keeps key product information easy to find and read',
            'Supports retail, packaging, apparel and promotional applications',
            'Can be tailored to different sizes, shapes and finishing needs',
            'Improves product presentation while reinforcing your brand',
        ],
    },
];

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
        },
    },
};

const ProductsPage = () => {
    const pageRef = useReveal();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productSchemas = products.map((product) => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title.join(''),
        image: `https://www.carbonprintstore.com${product.img}`,
        description: product.desc,
        brand: {
            '@type': 'Brand',
            name: 'Carbon Printing Press LLC',
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: 'https://www.carbonprintstore.com/products',
            seller: {
                '@type': 'Organization',
                name: 'Carbon Printing Press LLC',
            },
        },
        provider: {
            '@type': 'LocalBusiness',
            name: 'CARBON PRINTING PRESS LLC',
            telephone: '+971563766467',
            email: 'sales@carbonprintstore.com',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sharjah',
                addressCountry: 'AE',
            },
            areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
        },
    }));

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Can Carbon Printing Press create custom packaging?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We create custom packaging products around your dimensions, artwork, brand requirements and finishing preferences.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you provide large format and signage printing?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Our services include large format printing, signage and branding materials for campaigns, displays and professional spaces.',
                },
            },
            {
                '@type': 'Question',
                name: 'How can I request a quote?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Email sales@carbonprintstore.com or WhatsApp +971 5 6376 6467 with your requirements, quantities, sizes and preferred delivery timeline.',
                },
            },
            {
                '@type': 'Question',
                name: 'Where is Carbon Printing Press located?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Carbon Printing Press LLC is based in Sharjah, UAE, and serves commercial and packaging printing requirements across the UAE.',
                },
            },
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.carbonprintstore.com/' },
            { '@type': 'ListItem', position: 2, name: 'Products & Services', item: 'https://www.carbonprintstore.com/products' },
        ],
    };

    useSeo({
        title: 'Carbon Printing Press LLC | Products & Services',
        description: 'Explore Carbon Printing Press products and services, including business cards, packaging boxes, food packaging, promotional products, stationery, brochures, labels and tags.',
        canonicalUrl: 'https://www.carbonprintstore.com/products',
        ogType: 'website',
        ogImage: 'https://www.carbonprintstore.com/assets/generated-commercial-printing.webp',
        schemas: [...productSchemas, faqSchema, breadcrumbSchema],
    });

    const faqQuestions = faqSchema.mainEntity.map((item) => ({
        q: item.name,
        a: item.acceptedAnswer.text,
    }));

    const toggleFaq = (index) => {
        setOpenFaq((current) => (current === index ? null : index));
    };

    return (
        <div ref={pageRef}>
            <section className="page-hero">
                <div className="container">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={textVariants}
                    >
                        Our <span>Products</span> &amp; Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        From premium business essentials to custom packaging and branded materials, Carbon helps every project make a strong impression.
                    </motion.p>
                </div>
            </section>

            {products.map((product) => (
                <section
                    className="product-section"
                    key={product.title.join('-')}
                    style={product.reverse ? { background: 'var(--bg-secondary)' } : {}}
                >
                    <div className="container">
                        <div className={`product-layout ${product.reverse ? 'reverse' : ''}`}>
                            <motion.div
                                className="product-image"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
                                }}
                            >
                                <img src={product.img} alt={product.title.join('')} loading="lazy" />
                            </motion.div>
                            <div className="product-content">
                                <motion.h2
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={textVariants}
                                >
                                    {product.title.map((part, index) => {
                                        if (product.whiteTitleParts?.includes(index)) {
                                            return <span className="product-title-white" key={`${index}-${part}`}>{part}</span>;
                                        }

                                        return index === 0 ? part : <span key={`${index}-${part}`}>{part}</span>;
                                    })}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {product.desc}
                                </motion.p>
                                <motion.div
                                    className="importance-box"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <h4>{product.icon} {product.heading}</h4>
                                    <ul>
                                        {product.points.map((point, index) => (
                                            <motion.li
                                                key={point}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 + (index * 0.1) }}
                                                viewport={{ once: true, amount: 0.2 }}
                                            >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="products-faq-section">
                <div className="container">
                    <div className="products-faq-eyebrow">
                        <span className="faq-eyebrow-line" />
                        <span className="faq-eyebrow-text">FAQ</span>
                        <span className="faq-eyebrow-line" />
                    </div>
                    <h2 className="products-faq-heading">Frequently Asked <em>Questions</em></h2>
                    <div className="products-faq-list">
                        {faqQuestions.map((item, index) => (
                            <div className={`products-faq-item ${openFaq === index ? 'active' : ''}`} key={item.q}>
                                <button className="products-faq-question" onClick={() => toggleFaq(index)} aria-expanded={openFaq === index}>
                                    <span>{item.q}</span>
                                    <FaChevronDown className="products-faq-icon" />
                                </button>
                                <div className="products-faq-answer">
                                    <div className="products-faq-answer-content">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="cta-banner"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2>Ready to Print Something Remarkable?</h2>
                        <p>Share your requirements with Carbon Printing Press and receive a professional quote for your next project.</p>
                        <a href="mailto:sales@carbonprintstore.com" className="btn-white"><FaEnvelope /> Request a Quote</a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
