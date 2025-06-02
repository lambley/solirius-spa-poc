"use client";

import * as Layout from "./components/layout/index";
import * as Sections from "./components/sections/index";

export default function Home() {
  return (
    <div className="bg-white">
      <Layout.Navigation />
      <div
        id="hero"
        className="relative isolate px-6 pt-14 lg:px-8 border-b border-gray-200"
      >
        <Sections.Hero />
      </div>
      <div
        id="about"
        className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200"
      >
        <Sections.About />
      </div>
      <div
        id="services"
        className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200"
      >
        <Sections.Services />
      </div>
      <div
        id="testimonials"
        className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200"
      >
        <Sections.Testimonials />
      </div>
      <div
        id="contact"
        className="min-h-dvh h-min relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200"
      >
        <Sections.Contact />
      </div>
    </div>
  );
}
