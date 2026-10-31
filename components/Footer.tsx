import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "./ArrowUpRight";
import styles from "./Footer.module.css";

const services = [
  "Commercial printing",
  "Packaging products",
  "Digital & UV printing",
  "Gift & promotional items",
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/carbonprintingpress?cplk=MW1jdXJ1YTV1ZjZleQ%3D%3D&utm_source=qr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/carbon-printing-press-llc/" },
  { label: "Facebook", href: "https://www.facebook.com/share/1drPkkyfKe/?mibextid=wwXIfr" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/assets/carbon-logo.png" alt="Carbon Printing Press LLC" width={210} height={158} className={styles.logo} />
            <p>Print and packaging solutions made in Sharjah for brands across the UAE.</p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h2>Explore</h2>
              <Link href="/about">About us</Link>
              <Link href="/services">Services</Link>
              <Link href="/#process">Our process</Link>
              <Link href="/contact">Contact us</Link>
            </div>
            <div className={styles.column}>
              <h2>Services</h2>
              {services.map((service) => <Link key={service} href="/services">{service}</Link>)}
            </div>
            <div className={styles.column}>
              <h2>Connect</h2>
              {socials.map((social) => <Link key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight /></Link>)}
              <Link href="mailto:sales@carbonprintstore.com">sales@carbonprintstore.com</Link>
              <Link href="tel:+971563766467">+971 5 6376 6467</Link>
              <Link href="https://wa.me/971563766467" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></Link>
              <Link href="https://www.carbonprintstore.com" target="_blank" rel="noreferrer">www.carbonprintstore.com</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Carbon Printing Press LLC. All rights reserved.</span>
          <span>Sharjah · UAE</span>
        </div>
      </div>
    </footer>
  );
}
