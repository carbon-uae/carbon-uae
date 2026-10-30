import type { Metadata } from "next";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact Us | CARBON PRINTING PRESS LLC",
  description: "Request a quote from Carbon Printing Press LLC in Sharjah for your next printing or packaging project.",
  keywords: ["contact printing press Sharjah", "printing quote UAE", "packaging enquiry"],
  alternates: { canonical: `${site.url}/contact` },
  openGraph: { title: "Contact Us | CARBON PRINTING PRESS LLC", description: "Request a printing or packaging quote from Carbon Printing Press LLC in Sharjah.", url: `${site.url}/contact`, type: "website" },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}
