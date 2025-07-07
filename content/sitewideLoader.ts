import type { Href, SitewidePage } from "@/types/globals";

import cookies from "@/content/sitewide/cookies.json";
import privacy from "@/content/sitewide/privacy.json";
import terms from "@/content/sitewide/terms.json";
import notFound from "@/content/sitewide/not-found.json";
import error from "@/content/sitewide/error.json";

export const sitewidePages: Record<
  "cookies" | "privacy" | "terms",
  SitewidePage
> = {
  cookies,
  privacy,
  terms,
};

export const notFoundPage: SitewidePage = {
  ...notFound,
  actionHref: notFound.actionHref as Href,
};
export const errorPage: SitewidePage = {
  ...error,
  actionHref: error.actionHref as Href,
};
