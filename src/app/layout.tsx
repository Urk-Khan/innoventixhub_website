import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";
import SmoothScroll from "@/components/SmoothScroll";
import MotionLayer from "@/components/MotionLayer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/config/site";
import { graph, organizationSchema } from "@/lib/schema";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Innoventix Hub: AI UGC Ads, Voice Agents & Automation",
    template: "%s",
  },
  description:
    "AI UGC ads, voice agents, automation, web & SEO for D2C brands and SMBs in the US, UK & EU. Book a free consultation.",
  applicationName: site.name,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd data={graph(organizationSchema())} />
        <SmoothScroll />
        <MotionLayer />
        <Header />
        <div className="pt-[60px] lg:pt-0">{children}</div>
        <Footer />
        <FloatingActions />
        <CookieBanner />
      </body>
    </html>
  );
}
