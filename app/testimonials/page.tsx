"use client";

import SectionPage from "@/components/shared/SectionPage";
import { Testimonials } from "@/components/sections";
import { renderAdditionalContent } from "@/utils/presenters";
import { TestimonialAdditionalContent } from "@/content/pages";

export default function TestimonialPage() {
  return (
    <SectionPage
      SectionComponent={Testimonials}
      sectionProps={{ showLinkToPage: false, showToolsSection: false }}
      additionalContent={renderAdditionalContent(TestimonialAdditionalContent)}
    />
  );
}
