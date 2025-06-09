import Link from "next/link";
import { sections } from "@/content/sections";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        {sections.hero.announcement && (
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {sections.hero.announcement.label}{" "}
            <Link
              href={sections.hero.announcement.href}
              className="font-semibold text-indigo-600"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {sections.hero.announcement.hrefText}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          {sections.hero.title}
          <br />
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {sections.hero.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={sections.hero.cta.primary.href}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {sections.hero.cta.primary.label}
          </Link>
          <Link
            href={sections.hero.cta.secondary.href}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {sections.hero.cta.secondary.label}
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
