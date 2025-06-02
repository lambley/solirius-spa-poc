import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-900"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-900"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
