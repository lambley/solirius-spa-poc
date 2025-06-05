import React from "react";

interface SectionPageProps<T> {
  SectionComponent: React.ComponentType<T>;
  sectionProps?: T;
  additionalContent: React.ReactNode;
}

// This component is used to render a section's page with the same layout and additional content.
export default function SectionPage<T>({
  SectionComponent,
  sectionProps,
  additionalContent,
}: SectionPageProps<T>) {
  return (
    <div className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200">
      <SectionComponent {...(sectionProps as T)}>
        {additionalContent}
      </SectionComponent>
    </div>
  );
}
