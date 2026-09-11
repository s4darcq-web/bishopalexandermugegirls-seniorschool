import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bishop Alexander Muge Girls Secondary School",
  description: "Bishop Alexander Muge Girls Secondary School in Kenya: academics, admissions, student life, facilities, news, and contact information.",
  keywords: [
    "Bishop Alexander Muge Girls Secondary School",
    "BAM Girls Secondary School",
    "girls boarding school Kenya",
    "secondary school admissions Kenya",
    "KCSE school Eldoret Diocese",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Bishop Alexander Muge Girls Secondary School",
    description: "Cultivating leaders. Shaping futures.",
    type: "website",
    locale: "en_KE",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
