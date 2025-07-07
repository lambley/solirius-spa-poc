import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/content/sections/services.json";
import { SectionProps } from "@/types/components";
import SmartLink from "@/components/shared/SmartLink";

export default function Services({
  showLinkToPage = true,
  children,
}: SectionProps) {
  const renderServices = () => {
    return services.items.map((service) => (
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
    if (!services.linkToPage) return null;

    return (
      <div className="mt-10 text-center">
        <SmartLink
          href={services.linkToPage.href}
          target={services.linkToPage.target}
          rel={services.linkToPage.rel}
          className="text-indigo-600 hover:text-indigo-500 font-semibold"
        >
          {services.linkToPage.label}
        </SmartLink>
      </div>
    );
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {services.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">{services.description}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {renderServices()}
        </div>
        {services.linkToPage && showLinkToPage && renderServicesLink()}
      </div>
      {children && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      )}
    </div>
  );
}
