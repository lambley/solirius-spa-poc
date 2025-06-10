export type Address = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
};

// Only allow URLs starting with "/" (public folder) or "http(s)://"
export type ImageUrl =
  | `${"/"}${string}`
  | `http://${string}`
  | `https://${string}`;

// Href types for routing, external links, and anchors
type RouteHref =
  | `/${string}`
  | `/${string}/`
  | `/${string}#${string}`
  | `/${string}?${string}`;

type ExternalHref = `http://${string}` | `https://${string}`;

type AnchorHref = `#${string}`;

export type Href = RouteHref | ExternalHref | AnchorHref;

export type SitewidePage = {
  title: string;
  description: string;
  actionText?: string;
  actionHref?: Href;
  actionClass?: string;
};
