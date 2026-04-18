import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gold Star Plumbing | Eugene's Trusted Plumber",
  description:
    "Fast, reliable, fairly priced plumbing in Eugene, OR. Drain cleaning, water heaters, leak detection, sewer lines, and 24/7 emergency service. Free estimates, financing available.",
  keywords: [
    "plumber Eugene Oregon",
    "Eugene plumbing",
    "emergency plumber Eugene",
    "water heater Eugene",
    "drain cleaning Eugene",
    "Gold Star Plumbing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-charcoal">{children}</body>
    </html>
  );
}
