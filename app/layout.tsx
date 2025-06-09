import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as Layout from "../components/layout/index";
import { metadata } from "@/content/global";
// Change this font to Roboto

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout.Navigation />
        {children}
        <Layout.Footer />
        <Layout.BackToTopButton />
      </body>
    </html>
  );
}
