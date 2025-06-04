import { Address, Href } from "./globals";

export type NavigationItem = {
  label: string;
  href: Href;
  icon?: boolean;
  isExternal?: boolean;
  footerHref?: Href;
};

export type LegalLink = {
  label: string;
  href: Href;
};

export type FooterAddress = {
  address: Address;
  tagline: string;
  companyNumber: string;
  vatNumber: string;
};
