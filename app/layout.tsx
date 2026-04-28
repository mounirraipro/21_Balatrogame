import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Balatro Game – Free Online Browser Game",
    template: "%s | Balatro Game",
  },
  description:
    "Play Balatro Game online free — Play Balatro Game free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Balatro Game",
    "Balatro Game online",
    "Balatro Game free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Balatro Game Team" }],
  creator: "Balatro Game",
  publisher: "Balatro Game",
  metadataBase: new URL("https://balatrogame.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Balatro Game",
    title: "Balatro Game – Free Online Browser Game",
    description:
      "Play Balatro Game free in your browser — Play Balatro Game free online — no download, no account needed.",
    url: "https://balatrogame.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balatro Game – Free Online Browser Game",
    description:
      "Play Balatro Game free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Balatro Game",
              url: "https://balatrogame.online",
              description:
                "Play Balatro Game free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://balatrogame.online/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Balatro Game",
              url: "https://balatrogame.online",
              logo: {
                "@type": "ImageObject",
                url: "https://balatrogame.online/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://balatrogame.online/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
