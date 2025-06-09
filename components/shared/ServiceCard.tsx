import Image from "next/image";
import Link from "next/link";

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
          <Link href={href} className="relative z-10">
            {title}
          </Link>
        </h3>
        {category && (
          <div>
            <div className="flex items-center gap-x-4 text-xs">
              {category.href ? (
                <Link
                  href={category.href}
                  className="text-gray-500 hover:text-gray-600"
                >
                  {category.title}
                </Link>
              ) : (
                <span className="text-gray-500">{category.title}</span>
              )}
            </div>
          </div>
        )}

        <p className="mt-5 text-sm/6 text-gray-600">{description}</p>
      </div>
      <Link href={href}>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image src={imageUrl} width={400} height={400} alt={imageAlt} />
        </div>
      </Link>
    </article>
  );
}
