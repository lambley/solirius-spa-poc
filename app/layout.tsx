import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import { Lato } from "next/font/google";
import "./globals.css";

// Change this font to Roboto

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"], // Add weights you need
});

export const metadata: Metadata = {
  title: "Solirius Service Centre",
  description: "Service Centre offerings for Solirius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <Navbar />
        {children}
        {/* this is where you would add a footer */}
      </body>
    </html>
  );
}
