import ContentBlock from "../shared/ContentBlock";
import { sections } from "@/content/sections";
import { SectionProps } from "@/types/components";

export default function About({
  showLinkToPage = true,
  children,
}: SectionProps) {
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
          <ContentBlock
            title={sections.about.content.title}
            description={sections.about.content.description}
            imageUrl={sections.about.imageUrl}
            imageAlt={sections.about.imageAlt}
          >
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
          </ContentBlock>
        </div>
      </div>
      {children && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      )}
    </div>
  );
}
