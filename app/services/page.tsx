"use client";

import Services from "@/components/sections/services";

export default function ServicesPage() {
  const additionalContent = () => {
    return (
      <p className="mt-10 text-gray-400 text-center">
        More information about our services coming soon.
      </p>
    );
  };

  return (
    <div className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200">
      <Services showLinkToPage={false} children={additionalContent()} />
    </div>
  );
}
