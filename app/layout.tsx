import type { Metadata } from "next";
import { Geist, Geist_Mono, Sacramento, Satisfy } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pick Up Magic",
  description: "Generate pickup lines for your crush",
  openGraph: {
    title: "Pick Up Magic",
    description: "Generate pickup lines for your crush",
    url: "https://pickupmagic.vercel.app",
    siteName: "Pick Up Magic",
    images: [
      {
        url: "https://pickupmagic.vercel.app/pickup-magic.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick Up Magic",
    description: "Generate pickup lines for your crush",
    images: [
      {
        url: "https://pickupmagic.vercel.app/pickup-magic.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sacramento.variable} ${satisfy.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
