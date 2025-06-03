import Image from "next/image";
import { sections } from "@/content/sections";

export default function About() {
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
        </div>
        {renderAboutImage()}
      </div>
    );
  };

  const renderAboutImage = () => {
    if (!sections.about.image || !sections.about.imageAlt) return null;

    return (
      <div className="mb-10 lg:mb-0 lg:w-1/2">
        <Image
          src={sections.about.image}
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
    </div>
  );
}
