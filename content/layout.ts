import globalContent from '@/content/global.json'
import { NavigationItem, LegalLink, FooterAddress } from "@/types/layout";

const navigation: NavigationItem[] = [
  { label: "Home", href: "/", icon: true },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const legalLinks: LegalLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
];

const footerDetails: FooterAddress = {
  address: globalContent.address,
  tagline: globalContent.tagline,
  companyNumber: globalContent.companyNumber,
  vatNumber: globalContent.vatNumber,
};

export { navigation, legalLinks, footerDetails };
