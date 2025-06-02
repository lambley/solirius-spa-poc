import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    image: "https://placehold.co/100.png",
    testimonial:
      "Solirius Service Centre has transformed our operations with their exceptional service and continuous improvement strategies.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    image: "https://placehold.co/100.png",
    testimonial:
      "The incident management support from Solirius has been invaluable in keeping our projects on track.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "IT Director",
    image: "https://placehold.co/100.png",
    testimonial:
      "Their discovery services helped us identify key areas for improvement, leading to significant efficiency gains.",
  },
];

export default function Testimonials() {
  const renderTestimonials = () => {
    return testimonials.map((testimonial) => (
      <div
        key={testimonial.id}
        className="flex flex-col items-start justify-between p-6 bg-white rounded-lg shadow-sm"
      >
        <div className="flex items-center gap-x-4">
          <Image
            src={testimonial.image}
            width={100}
            height={100}
            alt={`${testimonial.name}'s photo`}
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
    ));
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Testimonials
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Hear what our clients have to say about their experience with the
            Solirius Service Centre.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {renderTestimonials()}
        </div>
      </div>
    </div>
  );
}
