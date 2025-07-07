import Image from "next/image";
import React from "react";
import SmartLink from "@/components/shared/SmartLink";
import testimonials from "@/content/sections/testimonials.json";
import tools from "@/content/sections/tools.json";
import { SectionProps } from "@/types/components";

export default function Testimonials({
  showLinkToPage = true,
  showToolsSection = true,
  children,
}: SectionProps) {
  const renderTestimonials = () => {
    return (
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {testimonials.items.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-start justify-between p-6 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-x-4">
              <Image
                src={testimonial.imageUrl}
                width={100}
                height={100}
                alt={testimonial.imageAlt}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              &quot;{testimonial.testimonial}&quot;
            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderTestimonialsLink = () => {
    if (!testimonials.linkToPage) return null;

    return (
      <div className="mt-10 text-center">
        <SmartLink
          href={testimonials.linkToPage.href}
          target={testimonials.linkToPage.target}
          rel={testimonials.linkToPage.rel}
          className="text-indigo-600 hover:text-indigo-500 font-semibold"
        >
          {testimonials.linkToPage.label} <span aria-hidden="true">&rarr;</span>
        </SmartLink>
      </div>
    );
  };

  const renderTools = () => {
    return (
      <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          {tools.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.items.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center bg-white rounded-lg shadow-sm p-4"
            >
              <Image
                src={tool.imageUrl}
                width={40}
                height={40}
                alt={tool.imageAlt}
                className="rounded mr-4"
              />
              <span className="text-base font-medium text-gray-800">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            {testimonials.description}
          </p>
        </div>
        {renderTestimonials()}
        {testimonials.linkToPage && showLinkToPage && renderTestimonialsLink()}
        {children && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
        )}
        {showToolsSection && tools && tools.title && renderTools()}
      </div>
    </div>
  );
}
