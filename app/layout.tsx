import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { MobileCallBar } from "@/components/mobile-call-bar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmullerdentistry.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "Dr. Muller Dentistry | St. John's NL | Root Canal & Dental Care",
    template: "%s | Dr. Muller Dentistry St. John's",
  },
  description:
    "Dr. Muller Dentistry in St. John's, Newfoundland. Expert root canal therapy, general dentistry, cleanings, and full dental care. 386 Stavanger Dr, St. John's NL.",
  keywords: [
    "dentist St. John's",
    "root canal St. John's NL",
    "dentist Newfoundland",
    "Dr. Muller Dentistry",
    "dental clinic St. John's",
    "NL dentist",
  ],
  openGraph: {
    title: "Dr. Muller Dentistry | St. John's NL | Root Canal & Dental Care",
    description:
      "Dr. Muller Dentistry in St. John's, Newfoundland. Expert root canal therapy, general dentistry, cleanings, and full dental care. 386 Stavanger Dr, St. John's NL.",
    url: "https://drmullerdentistry.com",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/front-page-hero-2.png",
        width: 1200,
        height: 630,
        alt: "Dr. Muller Dentistry St. John's",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WVK726MP');`,
          }}
        />
        {/* End Google Tag Manager */}
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVK726MP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Skip to content — WCAG AA accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-primary-foreground focus:shadow-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
