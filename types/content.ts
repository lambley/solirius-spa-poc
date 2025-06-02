export type Service = {
  id: number;
  title: string;
  href: string;
  description: string;
  category: {
    title: string;
    href: string;
  };
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
};

export type Tool = {
  name: string;
  image: string;
};

export type Sections = {
  hero: {
    title: string;
    description: string;
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
      announcement: { label: string; href: string };
    };
  };
  about: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  services: {
    title: string;
    description: string;
    items: Service[];
  };
  testimonials: {
    title: string;
    description: string;
    items: Testimonial[];
  };
  tools: {
    title: string;
    items: Tool[];
  };
};
