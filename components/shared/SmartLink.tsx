"use client";

import Link from "next/link";

type SmartLinkProps = {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
};

// Link component to handle anchor tags in the same page and to other pages
// If same-page (starting with #) – use native <a> and scrollIntoView
// Otherwise, use Next.js <Link>
export default function SmartLink({
  href,
  className,
  target,
  rel,
  children,
}: SmartLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={className} target={target} rel={rel}>
        {children}
      </a>
    </Link>
  );
}
