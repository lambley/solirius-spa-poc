import Link from "next/link";
import { navigation, legalLinks, footerDetails } from "@/content/layoutLoader";

export default function Footer() {
  const renderFooterDetails = () => {
    return (
      <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <div className="font-semibold text-gray-700 mb-1">
          Solirius Reply - {footerDetails.tagline}
        </div>
        <div>
          {`${footerDetails.address.addressLine1}, ${footerDetails.address.addressLine2}, ${footerDetails.address.city}, ${footerDetails.address.postcode}`}
        </div>
        <div className="mt-2">
          &copy; {new Date().getFullYear()} Solirius Ltd.
          <span className="mx-2">|</span>
          Company No: {footerDetails.companyNumber}
          <span className="mx-2">|</span>
          VAT No: {footerDetails.vatNumber}
        </div>
        <div className="mt-2">Registered in England and Wales.</div>
      </div>
    );
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {renderFooterDetails()}
      </div>
    </footer>
  );
}
