import ContentBlock from "@/components/shared/ContentBlock";
import { AdditionalPageContentBlock } from "@/types/pages";
import React from "react";

export function renderAdditionalContent(content: AdditionalPageContentBlock[]) {
  if (content.length === 0) {
    return (
      <p className="mt-10 text-gray-400 text-center">
        More information about us coming soon.
      </p>
    );
  }

  return content.map((block, index) => (
    <div className={block.blockClasses || "mt-10 lg:mt-20"} key={index}>
      <ContentBlock
        title={block.title}
        description={block.description}
        imageUrl={block.imageUrl}
        imageAlt={block.imageAlt}
      />
    </div>
  ));
}
