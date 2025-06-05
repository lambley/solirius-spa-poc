import ServiceCard from "@/components/shared/ServiceCard";
import { sections, services } from "@/content/sections";
import { SectionProps } from "@/types/components";

export default function Services({
  showLinkToPage = true,
  children,
}: SectionProps) {
  const renderServices = () => {
    return services.map((service) => (
      <ServiceCard
        key={service.id}
        title={service.title}
        href={service.href}
        description={service.description}
        category={service.category}
        imageUrl={service.imageUrl}
        imageAlt={service.imageAlt}
      />
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
        {sections.services.linkToPage && showLinkToPage && renderServicesLink()}
      </div>
      {children && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      )}
    </div>
  );
}
