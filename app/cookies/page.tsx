import { cookiesPage } from "@/content/global";

export default function Cookies() {
  return (
    <div className="container min-h-dvh h-min mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{cookiesPage.title}</h1>
      <p className="text-gray-700 mb-4">{cookiesPage.description}</p>
    </div>
  );
}
