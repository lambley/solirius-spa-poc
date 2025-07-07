"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationItem } from "@/types/layout";
import { navigation } from "@/content/layoutLoader";

function DesktopNav() {
  return (
    <>
      <div className="flex lg:flex-1">
        {navigation
          .filter((item) => item.icon)
          .map((item) => (
            <Link key={item.label} href={item.href} className="-m-1.5 p-1.5">
              <span className="sr-only">Solirius Reply</span>
              <Image
                alt=""
                src="/logo.png"
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </Link>
          ))}
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation
          .filter((item) => !item.icon)
          .map((item: NavigationItem) => (
            <Link
              key={item.label}
              href={item.href}
              target="_self"
              rel="noreferrer noopener"
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.label}
            </Link>
          ))}
      </div>
    </>
  );
}

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onClose={setOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          {navigation
            .filter((item) => item.icon)
            .map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="-m-1.5 p-1.5"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Solirius Reply</span>
                <Image
                  alt=""
                  src="/logo.png"
                  width={100}
                  height={100}
                  className="h-8 w-auto"
                />
              </Link>
            ))}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation
                .filter((item) => !item.icon)
                .map((item: NavigationItem) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_self"
                    rel="noreferrer noopener"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 sticky">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 bg-white shadow-sm"
      >
        <DesktopNav />
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <MobileNav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  );
}
