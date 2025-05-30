"use client";

import * as Layout from "./components/layout/index";
import * as Sections from "./components/sections/index";
import * as Gradients from "./components/gradients/index";

export default function Home() {
  return (
    <div className="bg-white">
      <Layout.Navigation />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Gradients.BackgroundLeft />
        <Sections.Hero />
        <Gradients.BackgroundRight />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Gradients.BackgroundLeft />
        <Sections.Services />
        <Gradients.BackgroundRight />
      </div>
    </div>
  );
}
