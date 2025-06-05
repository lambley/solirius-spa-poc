import Image from "next/image";
import { AdditionalPageContentBlock } from "@/types/pages";

interface ContentBlockProps extends AdditionalPageContentBlock {}

// This component is used to render additional content blocks on pages like About, Services, and Testimonials.
export default function ContentBlock({
  title,
  description,
  imageUrl,
  imageAlt,
  children,
  blockClasses = "",
}: ContentBlockProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-10 ${blockClasses}`}
    >
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
        {children}
      </div>
      {imageUrl && imageAlt && (
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
}
