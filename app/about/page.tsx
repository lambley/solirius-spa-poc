"use client";

import About from "@/components/sections/about";

export default function AboutPage() {
  const additionalContent = () => {
    return (
      <p className="mt-10 text-gray-400 text-center">
        More information about us coming soon.
      </p>
    );
  };

  return (
    <div className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200">
      <About showLinkToPage={true} children={additionalContent()} />
    </div>
  );
}
