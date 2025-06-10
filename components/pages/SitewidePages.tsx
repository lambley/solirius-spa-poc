import { SitewidePage } from "@/types/globals";

interface FooterPagesProps {
  content: SitewidePage;
}

export default function SitewidePages({ content }: FooterPagesProps) {
  return (
    <div className="container min-h-dvh h-min mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p className="text-gray-700 mb-4">{content.description}</p>
    </div>
  );
}
