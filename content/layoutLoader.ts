import globalContent from "@/content/global.json";
import navigationData from "@/content/layout/navigation.json";
import legalLinksData from "@/content/layout/legalLinks.json";

import type { NavigationItem, LegalLink, FooterAddress } from "@/types/layout";
import { Href } from "@/types/globals";

const navigation: NavigationItem[] = navigationData.map((item) => ({
  ...item,
  href: item.href as Href,
}));
const legalLinks: LegalLink[] = legalLinksData.map((item) => ({
  ...item,
  href: item.href as Href,
}));

const footerDetails: FooterAddress = {
  address: globalContent.address,
  tagline: globalContent.tagline,
  companyNumber: globalContent.companyNumber,
  vatNumber: globalContent.vatNumber,
};

export { navigation, legalLinks, footerDetails };
