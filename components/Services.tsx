import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "./ArrowUpRight";
import styles from "./Services.module.css";

const services = [
  {
    title: "Commercial Printing",
    description: "Stationery, flyers, brochures and business essentials with a refined finish.",
    image: "/assets/stationery.jpg",
    alt: "Printed stationery and branded paper goods",
    emphasis: true,
  },
  {
    title: "Packaging Products",
    description: "Custom boxes, sleeves and presentation packaging designed around your brand.",
    image: "/assets/gift-boxes.jpg",
    alt: "Premium gift boxes and packaging with ribbon",
  },
  {
    title: "Large Format Printing",
    description: "High-impact visuals for retail, events, interiors and branded environments.",
    image: "/assets/carbon-press-editorial.png",
    alt: "Modern wide-format printing press producing monochrome packaging sheets",
  },
  {
    title: "Screen Printing",
    description: "Durable, tactile print for uniforms, merchandise and brand applications.",
    image: "/assets/carbon-screen-printing.png",
    alt: "Screen-printing frame, ink and textured paper on a production table",
  },
  {
    title: "Digital & UV Printing",
    description: "Crisp short runs, vivid colour and premium detail for campaigns and launches.",
    image: "/assets/color-design.jpg",
    alt: "Designer comparing printed colour swatches",
  },
  {
    title: "Flexible Packaging",
    description: "Practical, polished packaging formats for food, retail and everyday products.",
    image: "/assets/food-packaging.jpg",
    alt: "Paper food packaging and takeaway bags",
  },
  {
    title: "Point of Sale Material (POSM)",
    description: "Clear, consistent displays and print touchpoints that help products get noticed.",
    image: "/assets/carbon-posm-display.png",
    alt: "Point of sale displays, counter cards and printed promotional stands in a retail setting",
  },
  {
    title: "Gift & Promotional Items",
    description: "Memorable branded pieces that keep your business in your customer’s hands.",
    image: "/assets/carbon-packaging-editorial.png",
    alt: "Custom gift boxes, paper bags and promotional print pieces",
  },
  {
    title: "Signage & Branding",
    description: "A consistent visual presence across spaces, campaigns, packaging and collateral.",
    image: "/assets/carbon-signage-posm.png",
    alt: "Retail signage, POS displays and printed tags in a modern showroom",
  },
];

const products = [
  "Luxury Business Cards",
  "Packaging Boxes",
  "Food Packaging",
  "Shopping Bags",
  "Promotional Products",
  "Corporate Stationery & Branding Materials",
  "Stickers",
  "Flyers & Brochures",
  "Labels & Tags",
];

export default function Services() {
  return (
    <section id="services" className={`${styles.services} section-shell`} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="services-title" className="section-title">
            Print that carries <em>your name well.</em>
          </h2>
          <p className="section-copy">
            From high-volume production to thoughtful one-offs, our services are built to make every touchpoint feel intentional.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article key={service.title} className={`${styles.card} ${service.emphasis ? styles.cardFeature : ""}`}>
              <div className={styles.cardImage}>
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, 50vw" className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/contact" className={styles.cardCta}>Request a quote <ArrowUpRight /></Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.productShowcase}>
          <div className={styles.productIntro}>
            <h3>Print pieces with <em>a physical presence.</em></h3>
            <p>From a business card that feels right in the hand to packaging that earns a second look, the finish is part of the message.</p>
          </div>

          <div className={styles.productContent}>
            <div className={styles.productGallery}>
              <figure>
                <Image src="/assets/carbon-packaging-editorial.png" alt="Custom boxes, paper bags, cards and labels arranged on a dark studio surface" fill sizes="(max-width: 700px) 50vw, 25vw" />
                <figcaption>Packaging boxes</figcaption>
              </figure>
              <figure>
                <Image src="/assets/food-packaging.jpg" alt="Paper food packaging and takeaway bags" fill sizes="(max-width: 700px) 50vw, 25vw" />
                <figcaption>Food packaging</figcaption>
              </figure>
            </div>

            <div className={styles.productList}>
              {products.map((product) => (
                <Link key={product} href="/contact">
                  <span>{product}</span>
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
