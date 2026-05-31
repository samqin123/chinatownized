import type { Metadata } from "next";
import { DM_Mono, Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import ContactWidget from "@/components/ContactWidget";
import AnalyticsTracker from "@/components/AnalyticsTracker";
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

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

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
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        {clarityProjectId ? (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${clarityProjectId}");
            `}
          </Script>
        ) : null}
        <Suspense fallback={null}>
          <AnalyticsTracker measurementId={gaMeasurementId} />
        </Suspense>
        <ContactWidget />
      </body>
    </html>
  );
}
