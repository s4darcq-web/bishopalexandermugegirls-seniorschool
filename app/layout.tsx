import type { Metadata } from "next";
import {
  defaultKeywords,
  defaultOgImage,
  siteName,
  siteUrl,
} from "./seo";
import PerformanceGuard from "./performance-guard";
import "./globals.css";

export const metadata: Metadata = {
  title: siteName,
  keywords: defaultKeywords,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: siteName,
    type: "website",
    locale: "en_KE",
    siteName,
    url: siteUrl,
    images: [{ url: defaultOgImage }],
  },
  twitter: {
    card: "summary",
    title: siteName,
    images: [defaultOgImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">
        <PerformanceGuard>{children}</PerformanceGuard>
      </body>
    </html>
  );
}
