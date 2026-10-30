import type { Metadata } from "next";
import About from "../../components/About";
import Footer from "../../components/Footer";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "About Us | CARBON PRINTING PRESS LLC",
  description: "Learn about Carbon Printing Press LLC, a Sharjah-based printing and packaging partner serving brands across the UAE.",
  keywords: ["Carbon Printing Press", "printing company Sharjah", "printing services UAE"],
  alternates: { canonical: `${site.url}/about` },
  openGraph: { title: "About Us | CARBON PRINTING PRESS LLC", description: "Learn about our Sharjah-based printing and packaging team serving brands across the UAE.", url: `${site.url}/about`, type: "website" },
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Footer />
    </main>
  );
}
