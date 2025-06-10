import Link from "next/link";
import { notFoundPage } from "@/content/sitewide";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-white px-6 py-24">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {notFoundPage.title}
      </h1>
      <p className="text-gray-500 mb-6">{notFoundPage.description}</p>
      <Link
        href={notFoundPage.actionHref || "/"}
        className={notFoundPage.actionClass}
        target="_self"
        rel="noopener noreferrer"
      >
        {notFoundPage.actionText || "Go to Home"}
      </Link>
    </div>
  );
}
