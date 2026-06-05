import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GridCast — AI marketing for local businesses",
  description:
    "Run your business. Let GridCast handle the ads, AI search visibility, and customer calls. Set up in minutes. No agency. No contract.",
  openGraph: {
    title: "GridCast — AI marketing for local businesses",
    description:
      "Targeted ads, AI search visibility, and a 24/7 voice agent — all on autopilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
