import services from "@/content/sections/services.json";
import { notFound } from "next/navigation";
import Image from "next/image";

type ServicePageProps = Promise<{ id: string }>;

export default async function ServicePage(props: { params: ServicePageProps }) {
  const { id } = await props.params;
  const service = services.items.find((s) => String(s.id) === id);

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
