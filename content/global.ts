import type { Metadata } from "next";
import { Address } from "@/types/globals";

const address: Address = {
  addressLine1: "Solirius Reply, 3rd Floor",
  addressLine2: "65-68 Leadenhall Street",
  city: "London",
  postcode: "EC3A 2AD",
};

const tagline = "Delivering digital excellence";

const companyNumber = "06279757";

const vatNumber = "920879601";

export { address, tagline, companyNumber, vatNumber };

// a few things hardcoded for now, but will be replaced with dynamic content later
export const metadata: Metadata = {
  metadataBase: new URL("https://solirius-spa-poc.vercel.app"),
  title: "Solirius Reply - Service Centre",
  description: "Delivering digital excellence",
  keywords: [
    "digital transformation",
    "technology solutions",
    "consulting",
    "software development",
    "cloud services",
  ],
  authors: [{ name: "Solirius Reply" }],
  creator: "Solirius Reply",
  openGraph: {
    title: "Solirius Reply",
    description: "Delivering digital excellence",
    url: new URL("https://solirius-spa-poc.vercel.app"),
    siteName: "Solirius Reply",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Solirius Reply - Delivering digital excellence",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solirius Reply",
    description: "Delivering digital excellence",
    images: ["/images/og-image.png"],
    creator: "@solirius_reply",
  },
};
