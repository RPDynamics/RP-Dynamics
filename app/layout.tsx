import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RP Dynamics Ltd - Advanced Composite Manufacturing | UAV, EV & Defense Solutions",
  description:
    "Leading composite manufacturer in India. 70% weight reduction, 3-week delivery. Carbon fiber solutions for UAVs, EV batteries, and defense applications. Made in India excellence.",
  keywords: [
    "composite manufacturing India",
    "carbon fiber UAV components",
    "EV battery enclosures",
    "defense aerospace composites",
    "lightweight materials India",
    "UAV drone parts",
    "composite design",
    "manufacturing Hyderabad",
    "carbon fiber solutions",
    "advanced materials India",
  ],
  authors: [{ name: "RP Dynamics Ltd" }],
  creator: "RP Dynamics Ltd",
  publisher: "RP Dynamics Ltd",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rpdynamics.co.in",
    siteName: "RP Dynamics Ltd",
    title: "RP Dynamics Ltd - Advanced Composite Manufacturing | UAV, EV & Defense Solutions",
    description:
      "Leading composite manufacturer in India. 70% weight reduction, 3-week delivery. Carbon fiber solutions for UAVs, EV batteries, and defense applications. Made in India excellence.",
    images: [
      {
        url: "https://rpdynamics.co.in/images/social/og-default.png",
        width: 1200,
        height: 630,
        alt: "RP Dynamics - Advanced Composite Manufacturing for UAV, EV, and Defense Applications",
        type: "image/png",
      },
      {
        url: "https://rpdynamics.co.in/images/social/facebook-cover.png",
        width: 1200,
        height: 630,
        alt: "RP Dynamics Facebook Cover - Composite Manufacturing Excellence",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rpdynamics",
    creator: "@rpdynamics",
    title: "RP Dynamics Ltd - Advanced Composite Manufacturing",
    description:
      "Leading composite manufacturer in India. 70% weight reduction, 3-week delivery. Carbon fiber solutions for UAVs, EV batteries, and defense applications.",
    images: ["https://rpdynamics.co.in/images/social/og-default.png"],
  },
  alternates: {
    canonical: "https://rpdynamics.co.in",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Manufacturing",
  classification: "Business",
  other: {
    "business:contact_data:street_address": "Hyderabad, Telangana",
    "business:contact_data:locality": "Hyderabad",
    "business:contact_data:region": "Telangana",
    "business:contact_data:country_name": "India",
    "business:contact_data:email": "info@rpdynamics.co.in",
    "business:contact_data:website": "https://rpdynamics.co.in",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO and Social Media Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RP Dynamics" />

        {/* Open Graph Meta Tags for Different Platforms */}
        <meta property="og:site_name" content="RP Dynamics Ltd" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RP Dynamics Ltd - Advanced Composite Manufacturing | UAV, EV & Defense Solutions"
        />
        <meta
          property="og:description"
          content="Leading composite manufacturer in India. 70% weight reduction, 3-week delivery. Carbon fiber solutions for UAVs, EV batteries, and defense applications. Made in India excellence."
        />
        <meta property="og:image" content="https://rpdynamics.co.in/images/social/og-default.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="RP Dynamics - Advanced Composite Manufacturing for UAV, EV, and Defense Applications"
        />
        <meta property="og:url" content="https://rpdynamics.co.in" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rpdynamics" />
        <meta name="twitter:creator" content="@rpdynamics" />
        <meta name="twitter:title" content="RP Dynamics Ltd - Advanced Composite Manufacturing" />
        <meta
          name="twitter:description"
          content="Leading composite manufacturer in India. 70% weight reduction, 3-week delivery. Carbon fiber solutions for UAVs, EV batteries, and defense applications."
        />
        <meta name="twitter:image" content="https://rpdynamics.co.in/images/social/og-default.png" />
        <meta
          name="twitter:image:alt"
          content="RP Dynamics - Advanced Composite Manufacturing for UAV, EV, and Defense Applications"
        />

        {/* LinkedIn Specific Meta Tags */}
        <meta property="linkedin:owner" content="rp-dynamics-ltd" />

        {/* Pinterest Meta Tags */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta property="og:image:pinterest" content="https://rpdynamics.co.in/images/social/pinterest-pin.png" />

        {/* WhatsApp Meta Tags */}
        <meta property="og:image:whatsapp" content="https://rpdynamics.co.in/images/social/whatsapp-profile.png" />

        {/* Business/Company specific meta tags */}
        <meta property="business:contact_data:street_address" content="Hyderabad, Telangana" />
        <meta property="business:contact_data:locality" content="Hyderabad" />
        <meta property="business:contact_data:region" content="Telangana" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:email" content="info@rpdynamics.co.in" />

        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RP Dynamics Ltd",
              description:
                "Leading composite manufacturer in India specializing in UAV, EV battery, and defense applications",
              url: "https://rpdynamics.co.in",
              logo: "https://rpdynamics.co.in/images/rp-dynamics-logo.png",
              image: [
                "https://rpdynamics.co.in/images/social/og-default.png",
                "https://rpdynamics.co.in/images/social/linkedin-banner.png",
                "https://rpdynamics.co.in/images/social/facebook-cover.png",
              ],
              email: "info@rpdynamics.co.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/company/rp-dynamics-ltd",
                "https://twitter.com/rpdynamics",
                "https://www.facebook.com/rpdynamics",
                "https://www.instagram.com/rpdynamics",
                "https://www.youtube.com/@rpdynamics",
              ],
              foundingLocation: {
                "@type": "Place",
                name: "Hyderabad, Telangana, India",
              },
              industry: "Composite Manufacturing",
              keywords:
                "composite manufacturing, carbon fiber, UAV components, EV battery enclosures, defense applications, aerospace, lightweight materials",
              serviceArea: {
                "@type": "Country",
                name: "India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Composite Manufacturing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UAV & Drone Components",
                      description: "Carbon fiber frames, structural housings, and custom aerodynamic components",
                      image: "https://rpdynamics.co.in/images/uav-carbon-fiber-components.jpg",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "EV Battery Solutions",
                      description: "Advanced battery pack enclosures and thermal management systems",
                      image: "https://rpdynamics.co.in/images/ev-battery-enclosure.jpg",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Defense & Aerospace",
                      description: "Mission-critical components and radar-transparent composite panels",
                      image: "https://rpdynamics.co.in/images/defense-aerospace-components.jpg",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
