"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Bending animation entering view (footer reveals from bottom)
    gsap.fromTo(bgRef.current, 
      { clipPath: "inset(0% 2.5% 0% 2.5% round 48px 48px 0px 0px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.bg} ref={bgRef}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className="text-h2">Agency.</h2>
            <p className={styles.brandDesc}>
              Building the next generation of SaaS products.
            </p>
          </div>
          
          <div className={styles.linksContainer}>
            <div className={styles.col}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Web App Dev</a></li>
                <li><a href="#">Mobile App Dev</a></li>
                <li><a href="#">Branding</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Process</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Socials</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter (X)</a></li>
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <div className={styles.locations}>
            <div className={styles.location}>
              <span className={styles.flag}>🇺🇸</span>
              <div>
                <h5>New York</h5>
                <p>123 Tech Ave, Suite 400</p>
              </div>
            </div>
            <div className={styles.location}>
              <span className={styles.flag}>🇦🇪</span>
              <div>
                <h5>Dubai</h5>
                <p>Internet City, Building 9</p>
              </div>
            </div>
            <div className={styles.location}>
              <span className={styles.flag}>🇸🇦</span>
              <div>
                <h5>Riyadh</h5>
                <p>King Abdullah Financial District</p>
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
