import { Address } from "./globals";

export type NavigationItem = {
  label: string;
  href: string;
  icon?: boolean;
  isExternal?: boolean;
  footerHref?: string;
};

export type LegalLink = {
  label: string;
  href: string;
};

export type FooterAddress = {
  address: Address;
  tagline: string;
  companyNumber: string;
  vatNumber: string;
};
