import Image from "next/image";

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  category: {
    title: string;
    href: string;
  };
  imageUrl?: string;
  imageAlt?: string;
}

// This component is used to render individual service cards in the Services section.
export default function ServiceCard({
  title,
  href,
  description,
  category,
  imageUrl = "https://placehold.co/400.png",
  imageAlt = "placeholder",
}: ServiceCardProps) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <a href={href}>
            <span className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <div className="flex items-center gap-x-4 text-xs">
          <a
            href={category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {category.title}
          </a>
        </div>
        <p className="mt-5 text-sm/6 text-gray-600">
          {description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt={imageAlt}
        />
      </div>
    </article>
  );
}
