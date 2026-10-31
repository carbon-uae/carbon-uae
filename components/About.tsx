import Image from "next/image";
import AnimatedStat from "./AnimatedStat";
import styles from "./About.module.css";

const strengths = [
  "Advanced printing technology",
  "Professional customer support",
  "Fast production and delivery",
  "High-quality finishing",
  "Competitive pricing",
];

const highlights = [
  "High-quality printing",
  "Fast turnaround",
  "Modern machinery",
  "Competitive pricing",
  "Custom packaging solutions",
  "Professional team",
];

const stats = [
  { target: 10, suffix: "+", label: "Years experience" },
  { target: 5000, suffix: "+", label: "Projects completed" },
  { target: 500, suffix: "+", label: "Happy clients" },
];

export default function About() {
  return (
    <section id="about" className={`${styles.about} section-shell`} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.intro}>
          <div>
            <h2 id="about-title" className="section-title">
              A sharper finish for <em>every idea.</em>
            </h2>
          </div>
          <p className="section-copy">
            From the first colour proof to the final delivery, Carbon Printing Press brings careful craft, modern machinery and dependable service together under one roof.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/color-design.webp"
              alt="Designer comparing printed colour swatches"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className={styles.image}
            />
            <div className={styles.imageCaption}>Precision from concept to print</div>
          </div>

          <div className={styles.featureCopy}>
            <p className={styles.lead}>Built for brands that care about how they show up.</p>
            <p className={styles.bodyCopy}>
              Our team combines professional customer support with a fast, detail-led production process. The result is packaging and print that feels considered, consistent and ready for the real world.
            </p>
            <div className={styles.statRow}>
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
            <ul className={styles.strengthList}>
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.highlights}>
          {highlights.map((highlight) => (
            <div key={highlight} className={styles.highlight}>
              <p>{highlight}</p>
            </div>
          ))}
        </div>

        <div className={styles.reel}>
          <div className={styles.reelIntro}>
            <h3>Colour, pressure, <em>precision.</em></h3>
            <p>A closer look at the production floor behind every considered finish.</p>
          </div>
          <div className={styles.reelFrame}>
            <video
              className={styles.reelVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/printing-press.webp"
              aria-label="Carbon Printing Press production reel"
            >
              <source src="/assets/cpp-video.mp4" type="video/mp4" />
              Your browser does not support the production reel.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
