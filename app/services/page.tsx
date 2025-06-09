import SectionPage from "@/components/shared/SectionPage";
import { Services } from "@/components/sections";
import { renderAdditionalContent } from "@/utils/presenters";
import { ServicesAdditionalContent } from "@/content/pages";

export default function ServicesPage() {
  return (
    <SectionPage
      SectionComponent={Services}
      sectionProps={{ showLinkToPage: false }}
      additionalContent={renderAdditionalContent(ServicesAdditionalContent)}
    />
  );
}
