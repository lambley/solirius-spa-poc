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
    image: "https://placehold.co/100.png",
    testimonial:
      "Solirius Service Centre has transformed our operations with their exceptional service and continuous improvement strategies.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    image: "https://placehold.co/100.png",
    testimonial:
      "The incident management support from Solirius has been invaluable in keeping our projects on track.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "IT Director",
    image: "https://placehold.co/100.png",
    testimonial:
      "Their discovery services helped us identify key areas for improvement, leading to significant efficiency gains.",
  },
];

const tools: Tool[] = [
  { name: "Jira", image: "https://placehold.co/100.png" },
  { name: "GitHub", image: "https://placehold.co/100.png" },
  { name: "Google Suite", image: "https://placehold.co/100.png" },
  { name: "Office", image: "https://placehold.co/100.png" },
  { name: "Kandji", image: "https://placehold.co/100.png" },
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
      announcement: {
        label: "Announcing our latest service offering",
        href: "#",
      },
    },
  },
  about: {
    title: "About Us",
    description:
      "Solirius Service Centre is dedicated to providing exceptional support and continuous improvement for your business. Our team of experts is here to help you succeed.",
    image: "https://placehold.co/600x400.png",
    imageAlt: "Solirius Service Centre Team",
  },
  services: {
    title: "Our Services",
    description: "Learn what Solirius Reply Service Centre can do for you.",
    items: services,
  },
  testimonials: {
    title: "Testimonials",
    description:
      "Hear what our clients have to say about their experience with the Solirius Service Centre.",
    items: testimonials,
  },
  tools: {
    title: "Tools We Use",
    items: tools,
  },
};

export { sections, services, testimonials, tools };
