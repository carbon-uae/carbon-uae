import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "./ArrowUpRight";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBackground} aria-hidden="true">
        <Image src="/assets/carbon-press-editorial.png" alt="" fill priority sizes="100vw" className={styles.backgroundImage} />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <p className={styles.brandLine}>CARBON PRINTING PRESS LLC / SHARJAH, UAE</p>
          <h1 id="hero-title">
            Premium Printing &amp; Packaging <em>Solutions in UAE</em>
          </h1>
          <p className={styles.description}>
            Delivering high-quality Commercial, Gift items, Uniform, Digital, Screen and Packaging Printing solutions with modern technology and fast turnaround.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/971563766467?text=Hello%20Carbon%20Printing%20Press%2C%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noreferrer" className="pill-button primary">
              Request a Quote <ArrowUpRight />
            </Link>
            <Link href="https://wa.me/971563766467" target="_blank" rel="noreferrer" className="pill-button light">
              WhatsApp Us <ArrowUpRight />
            </Link>
          </div>
          <div className={styles.trustRow}>
            <span>10+ Years Experience</span>
            <span>5,000+ Projects</span>
            <span>500+ Happy Clients</span>
          </div>
        </div>

        <div className={styles.imageNote}>
          <span className={styles.imageNoteDot} />
          <span>Colour selection / first proof</span>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
