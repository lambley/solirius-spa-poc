import SmartLink from "@/components/shared/SmartLink";
import ContentBlock from "../shared/ContentBlock";
import { about } from "@/content/sections/about.json";
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
            {about.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">{about.description}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          <ContentBlock
            title={about.content.title}
            description={about.content.description}
            imageUrl={about.imageUrl}
            imageAlt={about.imageAlt}
          >
            {about.linkToPage && showLinkToPage && (
              <div className="mt-10 text-center">
                <SmartLink
                  href={about.linkToPage.href}
                  target={about.linkToPage.target}
                  rel={about.linkToPage.rel}
                  className="text-indigo-600 hover:text-indigo-500 font-semibold"
                >
                  {about.linkToPage.label}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </SmartLink>
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
