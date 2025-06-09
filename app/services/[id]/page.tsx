import { services } from "@/content/sections";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ServicePageProps {
  params: { id: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  // ignore the warning: "'await' has no effect on the type of this expression.ts(80007)"
  // this is very much needed: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { id } = await params;
  const service = services.find((s) => String(s.id) === id);

  if (!service) return notFound();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-4xl font-bold">{service.title}</h1>
        <p className="mt-4 text-gray-600">{service.description}</p>
        {service.imageUrl && (
          <div className="mt-8">
            <Image
              src={service.imageUrl}
              alt={service.imageAlt || service.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
