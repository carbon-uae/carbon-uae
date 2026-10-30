import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import StructuredData from "../components/StructuredData";
import { site } from "../lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "CARBON PRINTING PRESS LLC | Premium Printing & Packaging in UAE",
  description:
    "Premium commercial, gift, uniform, digital, screen and packaging printing solutions in Sharjah, UAE.",
  keywords: [
    "printing press Sharjah",
    "packaging printing UAE",
    "commercial printing",
    "Carbon Printing Press",
  ],
  openGraph: {
    title: "CARBON PRINTING PRESS LLC | Premium Printing & Packaging in UAE",
    description:
      "High-quality printing and packaging solutions with modern technology and fast turnaround.",
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    images: ["/assets/carbon-press-editorial.png"],
  },
  alternates: { canonical: site.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  twitter: {
    card: "summary_large_image",
    title: "CARBON PRINTING PRESS LLC | Premium Printing & Packaging in UAE",
    description: "High-quality printing and packaging solutions from Sharjah, UAE.",
    images: ["/assets/carbon-press-editorial.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
