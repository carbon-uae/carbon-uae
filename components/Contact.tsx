"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { faqItems } from "../lib/site";
import styles from "./Contact.module.css";

const services = [
  "Commercial Printing",
  "Packaging Products",
  "Large Format Printing",
  "Screen Printing",
  "Digital & UV Printing",
  "Flexible Packaging",
  "Point of Sale Material (POSM)",
  "Gift & Promotional Items",
  "Signage & Branding",
];

const reviews = [
  {
    quote: "Verified customer feedback will be placed here after approval.",
    author: "Review placeholder",
    company: "Replace with verified client details",
  },
  {
    quote: "Verified customer feedback will be placed here after approval.",
    author: "Review placeholder",
    company: "Replace with verified client details",
  },
  {
    quote: "Verified customer feedback will be placed here after approval.",
    author: "Review placeholder",
    company: "Replace with verified client details",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = encodeURIComponent(
      `Hello Carbon Printing Press, I would like to request a quote.\n\nName: ${formData.get("name") || ""}\nEmail: ${formData.get("email") || ""}\nPhone: ${formData.get("phone") || ""}\nService: ${formData.get("service") || ""}\n\nProject details:\n${formData.get("message") || ""}`,
    );
    window.open(`https://wa.me/971563766467?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contact" className={`${styles.contact} section-shell`} aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <h2 id="contact-title" className="section-title">
              Have a brief? <em>Let us talk.</em>
            </h2>
          </div>
          <p className="section-copy">
            Share a few details and our team will come back with the right next step for your print or packaging project.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.formPanel}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <label>
                  Your name
                  <input name="name" type="text" placeholder="Name" required />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" placeholder="you@company.com" required />
                </label>
              </div>
              <label>
                Phone number
                <input name="phone" type="tel" placeholder="+971 5 6376 6467" required />
              </label>
              <label>
                What do you need?
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </label>
              <label>
                Tell us about the project
                <textarea name="message" rows={5} placeholder="What would you like to print?" required />
              </label>
              <button type="submit" className="pill-button primary">
                Send enquiry on WhatsApp <span aria-hidden="true">↗</span>
              </button>
              {sent && <p className={styles.formStatus} role="status">WhatsApp opened with your enquiry details.</p>}
            </form>
          </div>

          <div className={styles.infoPanel}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Visit us</span>
              <p>Sharjah, United Arab Emirates</p>
              <Link href="https://maps.app.goo.gl/C6XjSwDqfDCQMsoi7" target="_blank" rel="noreferrer" className={styles.textLink}>
                Open in Google Maps ↗
              </Link>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Talk to us</span>
              <Link href="tel:+971563766467" className={styles.contactLink}>+971 5 6376 6467</Link>
              <Link href="https://wa.me/971563766467" target="_blank" rel="noreferrer" className={styles.contactLink}>WhatsApp +971 5 6376 6467</Link>
              <Link href="mailto:sales@carbonprintstore.com" className={styles.contactLink}>sales@carbonprintstore.com</Link>
              <Link href="https://www.carbonprintstore.com" target="_blank" rel="noreferrer" className={styles.contactLink}>www.carbonprintstore.com</Link>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Working hours</span>
              <p>Sunday to Thursday · 9:00 AM to 6:00 PM</p>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                title="Carbon Printing Press location in Sharjah"
                src="https://www.google.com/maps?q=Sharjah%2C%20United%20Arab%20Emirates&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className={styles.reviews} aria-labelledby="reviews-title">
          <div className={styles.reviewHeading}>
            <h3 id="reviews-title">Three seats for <em>verified client feedback.</em></h3>
          </div>
          <div className={styles.reviewGrid}>
            {reviews.map((review, index) => (
              <figure key={`${review.author}-${index}`} className={styles.review}>
                <div className={styles.stars} aria-hidden="true">•••</div>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.author}</strong>
                  <span>{review.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={styles.faqs} aria-labelledby="faq-title">
          <div className={styles.faqHeading}>
            <h3 id="faq-title">Clear answers for <em>the next step.</em></h3>
            <p>Useful details about our printing, packaging and enquiry process.</p>
          </div>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
      </div>

      <Link href="https://wa.me/971563766467" target="_blank" rel="noreferrer" className={styles.whatsapp} aria-label="Chat with Carbon Printing Press on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12.04 2C6.51 2 2 6.48 2 11.99c0 1.93.55 3.73 1.5 5.26L2 22l4.91-1.47A10.03 10.03 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm5.84 14.33c-.25.7-1.45 1.34-2 1.43-.5.08-1.13.12-1.82-.11-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.79-4.19-4.94-4.4-.14-.2-1.18-1.56-1.18-2.97 0-1.41.74-2.1 1.01-2.39.26-.29.57-.36.76-.36.19 0 .38.01.54.01.17 0 .4-.06.62.47.23.53.78 1.84.85 1.97.07.14.11.3.02.49-.09.2-.14.3-.27.47-.13.16-.29.36-.42.48-.14.14-.28.3-.12.56.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.27.13.43.11.59-.07.16-.18.68-.78.86-1.05.18-.27.36-.23.61-.14.25.09 1.6.76 1.87.9.27.14.45.2.51.31.07.11.07.65-.18 1.35Z" />
        </svg>
      </Link>
    </section>
  );
}
