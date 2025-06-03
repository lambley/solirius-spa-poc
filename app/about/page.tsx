import { sections } from "@/content/sections";

export default function AboutPage() {
  const about = sections.about;

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-white px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{about.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{about.description}</p>
        <img
          src={about.image}
          alt={about.imageAlt}
          className="mx-auto rounded shadow mb-8"
          width={400}
          height={267}
        />
        <div className="bg-gray-50 rounded p-6 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {about.content.title}
          </h2>
          <p className="text-gray-700">{about.content.description}</p>
        </div>
        <p className="mt-10 text-gray-400">More information coming soon.</p>
      </div>
    </main>
  );
}
