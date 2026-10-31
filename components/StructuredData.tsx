import { site } from "../lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/assets/carbon-logo.webp`,
      image: `${site.url}/assets/carbon-press-editorial.webp`,
      description: site.description,
      telephone: site.phone,
      email: site.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sharjah",
        addressCountry: "AE",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Sharjah" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      hasMap: site.mapUrl,
      sameAs: site.socials,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
