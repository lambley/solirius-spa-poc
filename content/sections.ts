import type { Sections, Service, Testimonial, Tool } from "@/types/content";

const services: Service[] = [
  {
    id: 1,
    title: "Continuous Improvement",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Software", href: "#" },
  },
  {
    id: 2,
    title: "Incident Management",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Incidents", href: "#" },
  },
  {
    id: 3,
    title: "Discovery",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Discovery", href: "#" },
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "John Doe's photo",
    testimonial:
      "Solirius Service Centre has transformed our operations with their exceptional service and continuous improvement strategies.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "Jane Smith's photo",
    testimonial:
      "The incident management support from Solirius has been invaluable in keeping our projects on track.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "IT Director",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "Alice Johnson's photo",
    testimonial:
      "Their discovery services helped us identify key areas for improvement, leading to significant efficiency gains.",
  },
];

const tools: Tool[] = [
  {
    name: "Jira",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "Jira logo",
  },
  {
    name: "GitHub",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "GitHub logo",
  },
  {
    name: "Google Suite",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "Google Suite logo",
  },
  {
    name: "Office",
    imageUrl: "https://placehold.co/100.png",
    imageAlt: "Office logo",
  },
  {
    name: "Kandji",
    imageUrl: "https://placehold.co/100.png",
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
        href: "#",
      },
      secondary: {
        label: "Learn more",
        href: "#",
      },
    },
    announcement: {
      label: "Announcing our latest service offering",
      href: "#",
      hrefText: "Learn more",
    },
  },
  about: {
    title: "About Us",
    description:
      "Solirius Service Centre is dedicated to providing exceptional support and continuous improvement for your business. Our team of experts is here to help you succeed.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "Solirius Service Centre Team",
    content: {
      title: "Our Mission",
      description:
        "To deliver outstanding service and continuous improvement to our clients, ensuring their success and satisfaction.",
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
