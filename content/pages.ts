import { AdditionalPageContentBlock } from "@/types/pages";

const AboutAdditionalContent: AdditionalPageContentBlock[] = [
  {
    title: "Our Vision",
    description:
      "To be the leading provider of exceptional support services, recognised for enabling our clients' success, driving innovation, and setting the standard for service excellence and efficiency in the industry. We aim to create lasting partnerships and empower businesses to reach their fullest potential by handling their critical support functions.",
    imageUrl: "/ourvision-section.jpg",
    imageAlt: "Vision Image",
    blockClasses: "mt-10 lg:mt-20",
  },
  {
    title: "Our Values",
    description:
      "We believe in integrity, innovation, and inclusivity. Our platform is built on the principles of transparency and respect, ensuring that every user feels valued and heard. We strive to create a safe and welcoming environment for all.",
    imageUrl: "/ourvalues-section.png",
    imageAlt: "Values Image",
    blockClasses: "mt-10 lg:mt-20",
  },
];

const ServicesAdditionalContent: AdditionalPageContentBlock[] = [
  {
    title: "Explore Our Services",
    description:
      "Discover a range of services designed to meet your needs. From web development to digital marketing, we have you covered. We offer dedicated teams, cost-effective solutions, and specialised expertise.",
    imageUrl: "/exploreservices-section.jpg",
    imageAlt: "Placeholder image for services",
    blockClasses: "mt-10 lg:mt-16",
  },
  {
    title: "Our Commitment",
    description:
      "Our team is dedicated to providing top-notch services that help you achieve your goals. We work closely with our clients to understand their unique needs and deliver tailored solutions.",
    imageUrl: "/ourcommitment-section.jpg",
    imageAlt: "Commitment Image",
    blockClasses: "mt-10 lg:mt-20",
  },
];

const TestimonialAdditionalContent: AdditionalPageContentBlock[] = [
  {
    title: "What Our Clients Say",
    description:
      "We take pride in the positive feedback we receive from our clients. Their success stories inspire us to keep improving and innovating.",
    imageUrl: "/whatclientssay-section.jpg",
    imageAlt: "Client Testimonials",
    blockClasses: "mt-10 lg:mt-20",
  },
  {
    title: "Join Our Community",
    description:
      "Become part of a thriving community that values collaboration and support. Share your experiences and learn from others.",
    imageUrl: "/community-section.jpg",
    imageAlt: "Community Image",
    blockClasses: "mt-10 lg:mt-20",
  },
];

export {
  AboutAdditionalContent,
  ServicesAdditionalContent,
  TestimonialAdditionalContent,
};
