import Image from "next/image";
import { sections, services } from "@/content/sections";

export default function Services() {
  const renderServices = () => {
    return services.map((service) => (
      <article
        key={service.id}
        className="flex max-w-xl flex-col items-start justify-between"
      >
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href={service.href}>
              <span className="absolute inset-0" />
              {service.title}
            </a>
          </h3>
          <div className="flex items-center gap-x-4 text-xs">
            <a
              href={service.category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {service.category.title}
            </a>
          </div>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
            {service.description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src="https://placehold.co/400.png"
            width={400}
            height={400}
            alt="placeholder"
          />
        </div>
      </article>
    ));
  };

  const renderServicesLink = () => {
    if (!sections.services.linkToPage) return null;

    return (
      <div className="mt-10 text-center">
        <a
          href={sections.services.linkToPage.href}
          target={sections.services.linkToPage.target}
          rel={sections.services.linkToPage.rel}
          className="text-indigo-600 hover:text-indigo-500 font-semibold"
        >
          {sections.services.linkToPage.label}
        </a>
      </div>
    );
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {sections.services.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            {sections.services.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {renderServices()}
        </div>
        {renderServicesLink()}
      </div>
    </div>
  );
}
