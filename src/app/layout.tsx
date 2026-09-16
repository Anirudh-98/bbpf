import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bharathiya Parampara Prathistan Foundation",
    template: "%s | BPPF",
  },
  description:
    "BPPF works toward rural communities that are environmentally resilient, economically self-sustaining and rooted in traditional wisdom — through natural agriculture, water restoration, forestation, education, health and cultural preservation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white text-charcoal">
        <SmoothScroll />
        <div className="flex min-h-screen w-full flex-col">
          <Nav />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
