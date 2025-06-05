import { ImageUrl, Href } from "./globals";

export type Service = {
  id: number;
  title: string;
  href: Href;
  description: string;
  category: {
    title: string;
    href: Href;
  };
  imageUrl?: ImageUrl;
  imageAlt?: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  imageUrl: ImageUrl;
  imageAlt: string;
  testimonial: string;
};

export type Tool = {
  name: string;
  imageUrl: ImageUrl;
  imageAlt: string;
};

type AboutContent = {
  title: string;
  description: string;
  imageUrl?: ImageUrl;
  imageAlt?: string;
};

type ContactFormField = {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
};

type SubmitButton = {
  label: string;
  type: "submit" | "button";
};

type LinkToPage = {
  label: string;
  href: Href;
  hrefText?: string;
  target?: "_blank" | "_self";
  rel?: "noopener noreferrer" | "noreferrer";
};

export type Sections = {
  hero: {
    title: string;
    description: string;
    cta: {
      primary: LinkToPage;
      secondary: LinkToPage;
    };
    announcement?: LinkToPage;
  };
  about: {
    title: string;
    description: string;
    imageUrl: ImageUrl;
    imageAlt: string;
    content: AboutContent;
    linkToPage?: LinkToPage;
  };
  services: {
    title: string;
    description: string;
    items: Service[];
    linkToPage?: LinkToPage;
  };
  testimonials: {
    title: string;
    description: string;
    items: Testimonial[];
    linkToPage?: LinkToPage;
  };
  tools: {
    title: string;
    items: Tool[];
  };
  contact: {
    title: string;
    description: string;
    form: {
      firstName: ContactFormField;
      lastName: ContactFormField;
      email: ContactFormField;
      phone: ContactFormField;
      message: ContactFormField;
      submitButton: SubmitButton;
    };
  };
};
