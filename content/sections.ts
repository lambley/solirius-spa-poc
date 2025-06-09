import type { Sections, Service, Testimonial, Tool } from "@/types/content";

const services: Service[] = [
  {
    id: 1,
    title: "Continuous Improvement",
    href: "/services/1",
    description:
      "We drive continuous improvement through data-driven analysis and incremental changes. Our focus is on efficiency, quality, and customer satisfaction, adapting to evolving needs.",
    category: { title: "Software", href: "#" },
    imageUrl: "/continuous-improvement.jpg",
    imageAlt: "Placeholder image for Continuous Improvement",
  },
  {
    id: 2,
    title: "Incident Management",
    href: "/services/2",
    description:
      "We provide robust incident management based on ITIL best practices, ensuring quick response and resolution. Our on-call teams and monitoring systems ensure service stability.",
    category: { title: "Incidents", href: "#" },
    imageUrl: "/incident-management.jpg",
    imageAlt: "Placeholder image for Incident Management",
  },
  {
    id: 3,
    title: "Discovery",
    href: "/services/3",
    description:
      "Our service discovery process offers a 'health-check' to understand your service's context and support needs. We identify gaps, risks, and dependencies to ensure a smooth service transition.",
    category: { title: "Discovery", href: "#" },
    imageUrl: "/discovery.jpg",
    imageAlt: "Placeholder image for Discovery",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    imageUrl: "/testimonial-1.png",
    imageAlt: "John Doe's photo",
    testimonial:
      "Solirius Service Centre has transformed our operations with their exceptional service and continuous improvement strategies.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    imageUrl: "/testimonial-2.png",
    imageAlt: "Jane Smith's photo",
    testimonial:
      "The incident management support from Solirius has been invaluable in keeping our projects on track.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "IT Director",
    imageUrl: "/testimonial-3.png",
    imageAlt: "Alice Johnson's photo",
    testimonial:
      "Their discovery services helped us identify key areas for improvement, leading to significant efficiency gains.",
  },
];

const tools: Tool[] = [
  {
    name: "Jira",
    imageUrl: "/jira-logo.png",
    imageAlt: "Jira logo",
  },
  {
    name: "GitHub",
    imageUrl: "/github-logo.png",
    imageAlt: "GitHub logo",
  },
  {
    name: "Google Suite",
    imageUrl: "/google-logo.png",
    imageAlt: "Google Suite logo",
  },
  {
    name: "Office",
    imageUrl: "/office-logo.png",
    imageAlt: "Office logo",
  },
  {
    name: "Kandji",
    imageUrl: "/kandji-logo.png",
    imageAlt: "Kandji logo",
  },
];

const sections: Sections = {
  hero: {
    title: "Solirius Service Centre",
    description:
      "Driving Success Through Dedicated Support, Maintenance and Continuous Improvement.",
    cta: {
      primary: {
        label: "Get in touch",
        href: "#contact",
      },
      secondary: {
        label: "Learn more",
        href: "#about",
      },
    },
    announcement: {
      label: "Announcing our latest service offering",
      href: "/services",
      hrefText: "Learn more",
    },
  },
  about: {
    title: "About Us",
    description:
      "Solirius Service Centre provides dedicated customer and technical support, empowering businesses to enhance customer satisfaction and scale support without the overhead of in-house teams. Our cost-effective, flexible, and scalable solutions improve service levels, allowing you to focus on your core business and build customer loyalty. We streamline operations and help you achieve your goals with expert support.",
    imageUrl: "/ourmission-section.jpg",
    imageAlt: "Solirius Service Centre Team",
    content: {
      title: "Our Mission",
      description:
        "To be the trusted partner that empowers businesses through exceptional, adaptable, and efficient support services. We are driven to elevate client success and satisfaction by providing specialised expertise, fostering continuous improvement, and enabling a sharp focus on core business objectives.",
      imageUrl: "https://placehold.co/400.png",
      imageAlt: "Mission Image",
    },
    linkToPage: {
      label: "Learn more about us",
      href: "/about",
      hrefText: "About Us",
      target: "_self",
      rel: "noreferrer",
    },
  },
  services: {
    title: "Our Services",
    description: "Learn what Solirius Reply Service Centre can do for you.",
    items: services,
    linkToPage: {
      label: "View all services",
      href: "/services",
      hrefText: "All Services",
      target: "_self",
      rel: "noreferrer",
    },
  },
  testimonials: {
    title: "Testimonials",
    description:
      "Hear what our clients have to say about their experience with the Solirius Service Centre.",
    items: testimonials,
    linkToPage: {
      label: "Read more testimonials",
      href: "/testimonials",
      hrefText: "More Testimonials",
      target: "_self",
      rel: "noreferrer",
    },
  },
  tools: {
    title: "Tools We Use",
    items: tools,
  },
  contact: {
    title: "Get in Touch",
    description:
      "Send us a message and our team will get back to you as soon as possible.",
    form: {
      firstName: {
        label: "First Name",
        name: "firstName",
        type: "text",
        autoComplete: "given-name",
      },
      lastName: {
        label: "Last Name",
        name: "lastName",
        type: "text",
        autoComplete: "family-name",
      },
      email: {
        label: "Email",
        name: "email",
        type: "email",
        autoComplete: "email",
      },
      phone: {
        label: "Phone",
        name: "phone",
        type: "tel",
        autoComplete: "tel",
      },
      message: {
        label: "Message",
        name: "message",
        type: "textarea",
        autoComplete: "off",
      },
      submitButton: {
        label: "Send Message",
        type: "submit",
      },
    },
  },
};

export { sections, services, testimonials, tools };
