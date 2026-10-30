"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const panels = panelsRef.current;
    
    // Horizontal scrolling animation
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (containerRef.current?.offsetWidth || 1000) * panels.length,
      }
    });

    // Bending animation entering view
    gsap.fromTo(containerRef.current, 
      { clipPath: "inset(0% 2.5% 0% 2.5% round 48px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      }
    );

    // Bending animation leaving view
    gsap.fromTo(containerRef.current, 
      { clipPath: "inset(0% 0% 0% 0% round 0px)" },
      {
        clipPath: "inset(0% 2.5% 0% 2.5% round 48px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <div>
      <section id="services" className={styles.servicesContainer} ref={containerRef}>
        <div className={styles.panelsContainer} ref={panelsContainerRef}>
          
          {/* Panel 1 */}
          <div 
            className={`${styles.panel} ${styles.panelBlue}`} 
            ref={addToRefs}
          >
            <div className={styles.panelContent}>
              <div className={styles.indicator}>01</div>
              <h2 className="text-massive text-italic">UI UX Design</h2>
              <p className={styles.description}>
                We craft intuitive, user-centric interfaces that convert.
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div 
            className={`${styles.panel} ${styles.panelOrange}`} 
            ref={addToRefs}
          >
            <div className={styles.panelContent}>
              <div className={styles.indicator}>02</div>
              <h2 className="text-massive text-italic">Web App Dev</h2>
              <p className={styles.description}>
                Robust, scalable Next.js and React applications tailored for your SaaS.
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div 
            className={`${styles.panel} ${styles.panelPurple}`} 
            ref={addToRefs}
          >
            <div className={styles.panelContent}>
              <div className={styles.indicator}>03</div>
              <h2 className="text-massive text-italic">Logo & Branding</h2>
              <p className={styles.description}>
                Establish trust instantly with premium visual identities.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
