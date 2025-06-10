"use client";

import Link from "next/link";
import { errorPage } from "@/content/sitewide";

export default function Error() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-white px-6 py-24">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {errorPage.title || "Something Went Wrong"}
      </h1>
      <p className="text-gray-500 mb-6">
        {errorPage.description ||
          "An unexpected error has occurred. Please try again later."}
      </p>
      <Link
        href={errorPage.actionHref || "/"}
        className={
          errorPage.actionClass ||
          "inline-block rounded bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition"
        }
      >
        {errorPage.actionHref ? errorPage.actionText || "Go to Home" : "Home"}
      </Link>
    </div>
  );
}
