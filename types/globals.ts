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
