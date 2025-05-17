import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NBPC 2025 - Nasional Bisnis Plan Competition",
  description: "National Business Plan Competition 2025 - Bersaing, Berinovasi, Berprestasi",
  icons: {
    icon: '/images/logo-nbpc.svg',
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
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
