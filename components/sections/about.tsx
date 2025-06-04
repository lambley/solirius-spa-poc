import Image from "next/image";
import { sections } from "@/content/sections";
import { SectionProps } from "@/types/components";

export default function About({
  showLinkToPage = true,
  children,
}: SectionProps) {
  const renderAboutContent = () => {
    // text on the left, image on the right
    // on mobile, image on top, text below
    return (
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900">
            {sections.about.content.title}
          </h3>
          <p className="mt-4 text-gray-600">
            {sections.about.content.description}
          </p>
          {sections.about.linkToPage && showLinkToPage && (
            <div className="mt-10 text-center">
              <a
                href={sections.about.linkToPage.href}
                target={sections.about.linkToPage.target}
                rel={sections.about.linkToPage.rel}
                className="text-indigo-600 hover:text-indigo-500 font-semibold"
              >
                {sections.about.linkToPage.label}{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
        </div>
        {renderAboutImage()}
      </div>
    );
  };

  const renderAboutImage = () => {
    if (!sections.about.imageUrl || !sections.about.imageAlt) return null;

    return (
      <div className="mb-10 lg:mb-0 lg:w-1/2">
        <Image
          src={sections.about.imageUrl}
          alt={sections.about.imageAlt}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    );
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {sections.about.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            {sections.about.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {renderAboutContent()}
        </div>
      </div>
      {children && <div className="mx-auto mt-10 max-w-2xl">{children}</div>}
    </div>
  );
}
