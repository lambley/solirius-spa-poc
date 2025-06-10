import { SitewidePage } from "@/types/globals";

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

export const notFoundPage: SitewidePage = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. It may have been moved, deleted, or never existed in the first place. Please check the URL or return to the homepage.",
  actionText: "Go to home",
  actionHref: "/",
  actionClass:
    "inline-block rounded bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 transition",
};

export const sitewidePages = {
  cookies: cookiesPage,
  privacy: privacyPage,
  terms: termsPage,
};
