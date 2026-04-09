import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "123 Bouwkundige Keuring | Professionele bouwkundige keuring",
  description:
    "Professionele bouwkundige keuring voor uw woning. Vaste prijs \u20AC499. Rapport binnen 24 uur. In uw taal.",
  openGraph: {
    title: "123 Bouwkundige Keuring",
    description:
      "Professionele bouwkundige keuring voor uw woning. Vaste prijs \u20AC499.",
    url: "https://123bouwkundigekeuring.nl",
    siteName: "123 Bouwkundige Keuring",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
