import type { Metadata } from "next";
import { Address, SitewidePage } from "@/types/globals";

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

const cookiesPage: SitewidePage = {
  title: "Cookie Policy",
  description:
    "Text about cookies and how they are used on the site. This section should explain what cookies are, how they are used, and what types of cookies are employed.",
};

const privacyPage: SitewidePage = {
  title: "Privacy Policy",
  description:
    "Text about privacy and how personal data is handled. This section should detail the types of personal data collected, how it is used, and the rights of users regarding their data.",
};

const termsPage: SitewidePage = {
  title: "Terms and Conditions",
  description:
    "Text about the terms and conditions of using the site. This section should outline the rules and guidelines for using the website, including user responsibilities, acceptable use, and any legal disclaimers.",
};

export const sitewidePages = {
  cookies: cookiesPage,
  privacy: privacyPage,
  terms: termsPage,
};

export const notFoundPage: SitewidePage = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. It may have been moved, deleted, or never existed in the first place. Please check the URL or return to the homepage.",
  actionText: "Go to home",
  actionHref: "/",
  actionClass:
    "inline-block rounded bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 transition",
};

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
