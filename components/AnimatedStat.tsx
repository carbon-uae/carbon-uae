"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

type AnimatedStatProps = {
  target: number;
  suffix?: string;
  label: string;
};

export default function AnimatedStat({ target, suffix = "", label }: AnimatedStatProps) {
  const statRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = statRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let hasAnimated = false;

    const animate = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      if (reduceMotion) {
        setValue(target);
        return;
      }

      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1200, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div ref={statRef} className={styles.stat} aria-live="polite">
      <strong>{value.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

