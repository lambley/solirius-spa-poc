"use client";

import { useState } from "react";
import contact from "@/content/sections/contact.json";

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

  const fieldConfigs = [
    contact.form.firstName,
    contact.form.lastName,
    contact.form.email,
    contact.form.phone,
  ];
  const messageConfig = contact.form.message;

  const renderFields = () => (
    <>
      {fieldConfigs.map((field) => {
        const isFullWidth = field.name === "email" || field.name === "phone";
        return (
          <div key={field.name} className={isFullWidth ? "sm:col-span-2" : ""}>
            <label
              htmlFor={field.label}
              className="block text-sm font-semibold text-gray-900"
            >
              {field.label}
            </label>
            <input
              id={field.label}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <label
          htmlFor={messageConfig.label}
          className="block text-sm font-semibold text-gray-900"
        >
          {messageConfig.label}
        </label>
        <textarea
          id={messageConfig.label}
          name={messageConfig.name}
          rows={4}
          autoComplete={messageConfig.autoComplete}
          value={form.message}
          onChange={handleChange}
          className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        />
      </div>
    </>
  );

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">{contact.description}</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          {renderFields()}
        </div>
        <div className="mt-10">
          <button
            type={
              contact.form.submitButton.type === "submit" ? "submit" : "button"
            }
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            {contact.form.submitButton.label}
          </button>
        </div>
      </form>
    </div>
  );
}
