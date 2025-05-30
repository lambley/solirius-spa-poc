"use client";

import Navigation from "./components/layout/nav";
import Hero from "./components/sections/hero";
import * as Gradients from "./components/gradients/index";

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Gradients.BackgroundLeft />
        <Hero />
        <Gradients.BackgroundRight />
      </div>
    </div>
  );
}
