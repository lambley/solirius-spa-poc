"use client";

import About from "@/components/sections/about";

export default function AboutPage() {
  return (
    <div className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200">
      <About showLinkToPage={true} />
    </div>
  );
}
