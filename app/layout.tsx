import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rvmaqua.vercel.app"),

  title: {
    default: "Custom Branded Water Bottles in Delhi | RVMAqua",
    template: "%s | RVMAqua",
  },

  description:
    "RVMAqua provides custom branded water bottles in Delhi for cafes, restaurants, offices & events. Bulk orders, fast delivery across Delhi NCR.",

  keywords: [
    "custom water bottles in Delhi",
    "branded water bottles Delhi",
    "bulk water bottle packaging Delhi",
    "private label water bottles Delhi",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rvmaqua.vercel.app",
    siteName: "RVMAqua",
    title: "Custom Branded Water Bottles in Delhi | RVMAqua",
    description:
      "Delhi-based supplier of custom branded & bulk packaged drinking water bottles for cafes, restaurants, offices & events.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RVMAqua Custom Branded Water Bottles in Delhi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Branded Water Bottles in Delhi | RVMAqua",
    description:
      "Bulk custom water bottle packaging in Delhi NCR for cafes, restaurants, offices & events.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} relative bg-blue-100`}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
