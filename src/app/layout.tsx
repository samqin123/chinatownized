import type { Metadata } from "next";
import { DM_Mono, Inter, Playfair_Display } from "next/font/google";
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
    default: "Chinatownized — The Travel Gazette for the Curious Foreigner",
    template: "%s | Chinatownized",
  },
  description:
    "Don't visit China. Get Chinatownized. Deep dispatches from China's villages, ancient cities, cyberpunk streets, and hidden nature.",
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
    siteName: "Chinatownized",
    title: "Chinatownized — The Travel Gazette for the Curious Foreigner",
    description: "Don't visit China. Get Chinatownized.",
    images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinatownized",
    description: "Don't visit China. Get Chinatownized.",
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
      </body>
    </html>
  );
}
