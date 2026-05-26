import type { Metadata } from "next";
import { DM_Mono, Inter, Playfair_Display } from "next/font/google";
import ContactWidget from "@/components/ContactWidget";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chinatownized.com"),
  title: {
    default: "Charming Destinations — China travel, museums, and citywalks",
    template: "%s | Charming Destinations",
  },
  description:
    "A China-focused travel magazine for curious visitors. Deep dispatches from museums, citywalks, exhibitions, and hidden places across China.",
  keywords: [
    "China travel guide",
    "China off the beaten path",
    "Village Super League",
    "Cun Chao",
    "hanfu experience China",
    "Chongqing travel",
    "China spa culture",
    "foreigners in China",
    "China visa-free travel",
    "China hidden gems",
  ],
  openGraph: {
    siteName: "Charming Destinations",
    title: "Charming Destinations — China travel, museums, and citywalks",
    description: "A China-focused travel magazine for curious visitors.",
    images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charming Destinations",
    description: "A China-focused travel magazine for curious visitors.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="relative min-h-screen antialiased">
        <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
        <ContactWidget />
      </body>
    </html>
  );
}
