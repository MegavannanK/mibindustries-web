import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://mibindustries.in"),
  title: {
    default: "MIB Industries | Leading Global Exporter| Authentic Indian - Rice, Spices & Traditional Specialty Products",
    template: "%s | MIB Industries"
  },
  description: "Chennai, India based export & import company supplying rice, spices, pulses, oils, snacks, dry fruits & more to 25+ countries with compliant logistics.",
  keywords: [
    "MIB Industries","export","import","Leading Exporter", "Chennai exporter","India export company","Rice export ","spices export","FSSAI","GST","global sourcing","logistics", "Trusted best leading exporter in India", "top exporter in India", "top exporter to UK", "MIB branches Singapore"
  ],
  alternates: {
    canonical: "https://mibindustries.in/"
  },
  openGraph: {
    type: "website",
    url: "https://mibindustries.in/",
    title: "MIB Industries | Chennai India Export & Import Specialists",
    description: "Trusted Indian export & import partner for agricultural & consumer products – quality, compliance and reliable global shipping.",
    siteName: "MIB Industries",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MIB Industries – Global Export & Import Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MIB Industries | Leading Global Exporter",
    description: "Global exporter from Chennai, India – rice, spices, pulses, oils & more.",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: '/assets/images/logo.png',
    shortcut: '/assets/images/logo.png',
    apple: '/assets/images/logo.png',
  },
  manifest: "/site.webmanifest",
  category: "business"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/ns.html?id=GTM-PCFV7PH7"
          strategy="afterInteractive"
        />

        {/* Existing Meta */}
        <link rel="icon" href="/assets/images/logo.png" type="image/png" />
        <meta name="theme-color" content="#0f3d5f" />

        {/* Your Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MIB Industries",
              url: "https://mibindustries.in/",
              logo: "https://mibindustries.in/assets/images/logo.png",
              description: "Chennai, India export & import company specializing in rice, spices, pulses, oils, snacks, dry fruits, brass & pooja items. Operates globally with strategic office location in Singapore and primarily serving the UK market.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "TN",
                addressCountry: "IN"
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9363291001",
                  contactType: "customer service",
                  areaServed: "Worldwide",
                  availableLanguage: ["en"]
                }
              ],
              hasCredential: [
                { "@type": "DefinedTerm", name: "GST Registration", termCode: "33ITKPM7611C1ZQ" },
                { "@type": "DefinedTerm", name: "FSSAI", termCode: "12424999000212" }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
