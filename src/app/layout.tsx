import './globals.css';

import config from '@/config';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import Footer from '@/components/footer';

import Navbar from '@/components/navbar';

const inter = Inter({
  variable: '--font-face',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pandora',
  description: 'Hephaestus frontend',
};

type Properties = Readonly<{
  children: React.ReacNode;
}>;

export default function RootLayout(properties: Properties) {
  return (
    <html lang={config.language}>
      <body
        className={`${inter.variable} antialiased w-full h-screen flex flex-col select-none`}
      >
        <Navbar />

        <main className="flex-grow flex items-center justify-center">
          {properties.children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
