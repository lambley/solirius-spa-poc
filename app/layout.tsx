import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as Layout from "../components/layout/index";
import globalContent from '@/content/global.json'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = globalContent.metadata;

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
