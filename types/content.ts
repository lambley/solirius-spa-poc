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

type AboutContent = {
  title: string;
  description: string;
  image?: string;
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

export type Sections = {
  hero: {
    title: string;
    description: string;
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
    announcement?: {
      label: string;
      href: string;
      hrefText: string;
    }
  };
  about: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    content: AboutContent;
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
