import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({
  variable: "--font-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandora",
  description: "Hephaestus frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased w-full h-screen flex flex-col select-none`}
      >
        <Navbar />

        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
