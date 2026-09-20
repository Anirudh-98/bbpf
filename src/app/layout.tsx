import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntroLoader from "@/components/IntroLoader";
import { siteUrl } from "@/data/site";

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

export const viewport: Viewport = {
  themeColor: "#11261C",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bharathiya Parampara Prathistan Foundation",
    template: "%s | BPPF",
  },
  description:
    "BPPF works toward rural communities that are environmentally resilient, economically self-sustaining and rooted in traditional wisdom — through natural agriculture, water restoration, forestation, education, health and cultural preservation.",
  applicationName: "BPPF",
  // Link previews (WhatsApp, Facebook, LinkedIn, X). No og:url here: a layout-level value
  // would be inherited by every page and point them all at the homepage.
  openGraph: {
    type: "website",
    siteName: "Bharathiya Parampara Prathistan Foundation",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of a green village with a tank and tiled roofs at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-share.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white text-charcoal">
        {/* Without JS the intro overlay could never be dismissed and would cover the whole page. */}
        <noscript>
          <style>{"[data-intro-loader]{display:none!important}"}</style>
        </noscript>
        <IntroLoader />
        <SmoothScroll />
        <div className="flex min-h-screen w-full flex-col">
          <Nav />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
