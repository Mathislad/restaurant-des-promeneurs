import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { localBusinessJsonLd } from "@/lib/site-content";
import "./globals.css";

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restaurant des Promeneurs — Nolhac, Saint-Paulien",
  description:
    "Une halte sincère en Haute-Loire, à deux pas du Puy-en-Velay. Cuisine familiale, accueil chaleureux, et une âme que l'on ressent en poussant la porte.",
  metadataBase: new URL("https://restaurant-des-promeneurs.vercel.app"),
  openGraph: {
    title: "Restaurant des Promeneurs — Nolhac, Saint-Paulien",
    description:
      "Il existe des lieux que l'on ne découvre pas par hasard. Venez à Nolhac.",
    url: "https://restaurant-des-promeneurs.vercel.app",
    siteName: "Restaurant des Promeneurs",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant des Promeneurs — Nolhac",
    description:
      "Une halte sincère en Haute-Loire. Cuisine familiale et accueil solaire.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lato.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
