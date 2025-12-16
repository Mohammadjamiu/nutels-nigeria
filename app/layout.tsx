import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NUTELS Nigeria - National Union of Telecommunications Students",
  description: "National Union of Telecommunications Students (NUTELS) Nigeria - Fostering unity, excellence, and innovation in telecommunications education across Nigeria.",
  keywords: "NUTELS, Telecommunications, Students, Nigeria, Engineering, ICT, Education",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NUTELS Nigeria - National Union of Telecommunications Students",
    description: "Fostering unity, excellence, and innovation in telecommunications education across Nigeria.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "NUTELS Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NUTELS Nigeria - National Union of Telecommunications Students",
    description: "Fostering unity, excellence, and innovation in telecommunications education across Nigeria.",
    images: ["/opengraph-image.jpeg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
