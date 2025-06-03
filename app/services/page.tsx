import { sections } from "@/content/sections";

export default function ServicesPage() {
  const services = sections.services;

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-white px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {services.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8">{services.description}</p>
        <div className="bg-gray-50 rounded p-6 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Services
          </h2>
          <ul className="space-y-4">
            {services.items.map((service) => (
              <li key={service.id} className="text-gray-700">
                <span className="font-semibold">{service.title}:</span>{" "}
                {service.description}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-gray-400">More information coming soon.</p>
      </div>
    </main>
  );
}
