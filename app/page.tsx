"use client";

import * as Layout from "./components/layout/index";
import * as Sections from "./components/sections/index";
import * as Gradients from "./components/gradients/index";

export default function Home() {
  return (
    <div className="bg-white">
      <Layout.Navigation />
      <div id="section" className="relative isolate px-6 pt-14 lg:px-8 border-b border-gray-200">
        <Gradients.BackgroundLeft />
        <Sections.Hero />
        <Gradients.BackgroundRight />
      </div>
      <div id="section" className="relative isolate px-6 pt-14 lg:px-8 border-t border-gray-200">
        <Gradients.BackgroundLeft />
        <Sections.Services />
        <Gradients.BackgroundRight />
      </div>
    </div>
  );
}
