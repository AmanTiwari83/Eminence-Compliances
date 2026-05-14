import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import LenisScroll from "@/components/lenisScroll";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title:
    "Eminence Global Compliances | BIS Certification & Regulatory Services",

  description:
    "Eminence Global Compliances provides expert BIS certification, ISI mark registration, and regulatory compliance services in India. End-to-end support for manufacturers and businesses.",

  keywords: [
    "BIS certification",
    "ISI mark registration",
    "compliance services India",
    "regulatory approvals",
    "product certification",
    "Eminence Global Compliances",
  ],

  authors: [{ name: "Eminence Global Compliances" }],
  creator: "Eminence Global Compliances",

  metadataBase: new URL("https://eminencecompliance.com"),

  openGraph: {
    title:
      "Eminence Global Compliances | BIS Certification Experts",

    description:
      "Trusted partner for BIS certification, ISI marking, and regulatory compliance services across India.",

    url: "https://eminencecompliance.com",

    siteName: "Eminence Global Compliances",

    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Eminence Global Compliances",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Eminence Global Compliances | BIS Certification Experts",

    description:
      "Trusted partner for BIS certification and regulatory compliance services across India.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",

              name: "Eminence Global Compliances",

              url: "https://eminencecompliance.com",

              logo: "https://eminencecompliance.com/logo.png",

              description:
                "Expert BIS certification, ISI mark registration, and regulatory compliance services in India.",

              email: [
                "info@eminencecompliance.com"
              ],

              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-917428555852",
                  contactType: "customer service",
                  areaServed: ["IN"],
                  availableLanguage: ["English", "Hindi"],
                },
              ],

              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>

      <LenisScroll />

      <body className={`${outfit.variable} family-regular antialiased`}>
        <Navbar />

        {children}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          pauseOnHover
        />

        <Footer />
      </body>
    </html>
  );
}