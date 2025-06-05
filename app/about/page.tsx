"use client";

import SectionPage from "@/components/shared/SectionPage";
import { About } from "@/components/sections";
import { renderAdditionalContent } from "@/utils/presenters";
import { AboutAdditionalContent } from "@/content/pages";

export default function AboutPage() {
  return (
    <SectionPage
      SectionComponent={About}
      sectionProps={{ showLinkToPage: false }}
      additionalContent={renderAdditionalContent(AboutAdditionalContent)}
    />
  );
}
