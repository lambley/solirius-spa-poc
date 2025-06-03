"use client";

import { Testimonials } from "@/components/sections";

export default function TestimonialPage() {
  const additionalContent = () => {
    return (
      <p className="mt-10 text-gray-400 text-center">
        More information about us coming soon.
      </p>
    );
  };

  return (
    <div className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200">
      <Testimonials
        showLinkToPage={false}
        showToolsSection={false}
        children={additionalContent()}
      />
    </div>
  );
}
