import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bishop Alexander Muge Girls Senior School",
  description: "Bishop Alexander Muge Girls Senior School in Kenya: CBC Senior School academics, Grade 10 admissions, student life, facilities, news, and contact information.",
  keywords: [
    "Bishop Alexander Muge Girls Senior School",
    "BAM Girls Senior School",
    "girls boarding school Kenya",
    "CBC Senior School admissions Kenya",
    "Grade 10 admissions Kenya",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Bishop Alexander Muge Girls Senior School",
    description: "Established in 1985, the school is transitioning from the 8-4-4 secondary system to CBC Senior School, Grades 10–12.",
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
