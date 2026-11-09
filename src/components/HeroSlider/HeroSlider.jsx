import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';

const slides = [
  {
    image: '/assets/main-image.webp',
    video: '/assets/cpp-video.webm',
    kicker: 'Carbon Printing Press LLC',
    subtitle: 'Print. Package. Promote.',
    subtitleRed: true,
    subtitleContinuation: 'Solution Partner',
    subtitleBelowTitle: false,
    brandColors: true,
    title: 'Premium <span>Printing &amp; Branding</span>',
    description: 'Delivering High-Quality Commercial, Gift Items, Uniform, Digital, Screen and Packaging Printing Solutions with Modern Technology and Fast Turnaround.',
    btnText: 'Request a Quote',
    btnHref: 'mailto:sales@carbonprintstore.com'
  },
  {
    image: '/assets/generated-commercial-printing.webp',
    subtitle: 'Designed for Your Brand',
    brandColors: true,
    title: 'Commercial <span>Printing</span>',
    description: 'From Business Cards and Stationery to Brochures, Flyers and Branded Materials, Every Detail is Produced to Make a Strong Impression.',
    btnText: 'View Services',
    btnHref: '/products'
  },
  {
    image: '/assets/generated-digital-uv-printing.webp',
    subtitle: 'Modern Machinery',
    brandColors: true,
    title: 'Built for <span>Fast Turnaround</span>',
    description: 'Advanced Production Capabilities, Professional Support and High-Quality Finishing for Projects of Every Scale.',
    btnText: 'Start a Project',
    btnHref: '#contact'
  }
];

/* ── Animation Variants ────────────────────────────── */

// Background image: cinematic zoom-out (scale 1.15 → 1)
const bgVariants = {
  initial: { scale: 1.2 },
  animate: {
    scale: 1,
    transition: {
      duration: 6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Subtitle: fade-in + slide-up (first text to appear)
const subtitleVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
    },
  },
};

// Title: fade-in + slide-up (slightly later, more dramatic)
const titleVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.65,
    },
  },
};

// CTA Button: fade-in + slide-up (last element, cinematic delay)
const btnVariants = {
  initial: { opacity: 0, y: 35 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.9,
    },
  },
};

/* ── Slide Content Component ─────────────────────── */
const SlideContent = ({ slide, isActive }) => {
  // Re-trigger animations using the key prop when slide becomes active
  if (!isActive) return null;

  return (
    <>
      {slide.kicker && (
        <motion.div
          className={`slide-kicker${slide.brandColors ? ' slide-kicker-brand' : ''}`}
          variants={subtitleVariants}
          initial="initial"
          animate="animate"
          key={`kicker-${slide.kicker}`}
        >
          {slide.kicker}
        </motion.div>
      )}
      {!slide.subtitleBelowTitle && (
        <motion.div
          className={`slide-subtitle${slide.subtitleRed ? ' slide-subtitle-brand' : slide.brandColors ? ' slide-subtitle-yellow' : ''}`}
          variants={subtitleVariants}
          initial="initial"
          animate="animate"
          key={`sub-${slide.subtitle}`}
        >
          {slide.subtitle}
        </motion.div>
      )}

      <motion.h1
        className={`slide-title${slide.brandColors ? ' slide-title-brand' : ''}`}
        variants={titleVariants}
        initial="initial"
        animate="animate"
        key={`title-${slide.title}`}
        dangerouslySetInnerHTML={{ __html: slide.title }}
      />

      {slide.subtitleContinuation && (
        <motion.div
          className="slide-subtitle slide-subtitle-brand slide-subtitle-below-title"
          variants={titleVariants}
          initial="initial"
          animate="animate"
          key={`sub-continuation-${slide.subtitleContinuation}`}
        >
          {slide.subtitleContinuation}
        </motion.div>
      )}

      {slide.subtitleBelowTitle && (
        <motion.div
          className={`slide-subtitle slide-subtitle-below-title${slide.brandColors ? ' slide-subtitle-brand' : ''}`}
          variants={subtitleVariants}
          initial="initial"
          animate="animate"
          key={`sub-${slide.subtitle}`}
        >
          {slide.subtitle}
        </motion.div>
      )}

      <motion.p
        className="slide-text"
        variants={btnVariants}
        initial="initial"
        animate="animate"
        key={`description-${slide.subtitle}`}
      >
        {slide.description}
      </motion.p>

      <motion.div
        variants={btnVariants}
        initial="initial"
        animate="animate"
        key={`btn-${slide.btnText}`}
      >
        <a href={slide.btnHref || '#services'} className="slide-btn">
          {slide.btnText} <ArrowRight size={20} />
        </a>
      </motion.div>
    </>
  );
};

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <div className="artistic-parallax-slider">
      <Swiper
        speed={1200}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* ── Animated Background Image (zoom-out) ── */}
            {slide.video ? (
              <video
                className="parallax-bg"
                autoPlay
                muted
                loop
                playsInline
                poster={slide.image}
                aria-hidden="true"
                style={{ objectFit: 'cover' }}
              >
                <source src={slide.video} type="video/webm" />
              </video>
            ) : (
              <motion.div
                className="parallax-bg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                variants={bgVariants}
                initial="initial"
                animate={activeIndex === index ? 'animate' : 'initial'}
                key={`bg-${index}-${activeIndex === index ? 'active' : 'idle'}`}
              />
            )}

            <div className="slide-overlay"></div>

            {/* ── Animated Text Content ── */}
            <div className="slide-content">
              <SlideContent
                slide={slide}
                isActive={activeIndex === index}
                key={`content-${index}-${activeIndex === index ? 'active' : 'idle'}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
