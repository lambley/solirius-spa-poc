import { sections } from "@/content/sections";

export default function TestimonialsPage() {
  const testimonials = sections.testimonials;

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-white px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {testimonials.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8">{testimonials.description}</p>
        <div className="bg-gray-50 rounded p-6 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <ul className="space-y-6">
            {testimonials.items.map((testimonial) => (
              <li key={testimonial.id} className="text-gray-700">
                <span className="font-semibold">{testimonial.name}</span> (
                {testimonial.role}):
                <br />
                <span className="italic">"{testimonial.testimonial}"</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-gray-400">More testimonials coming soon.</p>
      </div>
    </main>
  );
}
