import { termsPage } from "@/content/global";

export default function Terms() {
  return (
    <div className="container min-h-dvh h-min mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{termsPage.title}</h1>
      <p className="text-gray-700 mb-4">{termsPage.description}</p>
    </div>
  );
}
