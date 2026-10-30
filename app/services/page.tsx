import type { Metadata } from "next";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services | CARBON PRINTING PRESS LLC",
  description: "Commercial printing, packaging, large format, digital, UV, signage and promotional printing services from Sharjah, UAE.",
  keywords: ["commercial printing Sharjah", "packaging products UAE", "large format printing", "signage and branding"],
  alternates: { canonical: `${site.url}/services` },
  openGraph: { title: "Services | CARBON PRINTING PRESS LLC", description: "Explore commercial printing, packaging, digital, UV, signage and promotional services from Sharjah.", url: `${site.url}/services`, type: "website" },
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <Footer />
    </main>
  );
}
