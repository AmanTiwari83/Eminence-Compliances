// import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
// import "react-toastify/dist/ReactToastify.css";
// import "./globals.css";

// import Navbar from "@/components/Navbar";
// import { ToastContainer } from "react-toastify";
// import LenisScroll from "@/components/lenisScroll";
// import { Footer } from "@/components/Footer";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-outfit",
// });

// export const metadata: Metadata = {
//   title:
//     "Eminence Global Compliances Group | BIS Certification & Regulatory Services",

//   description:
//     "Eminence Global Compliances Group provides expert BIS certification, ISI mark registration, and regulatory compliance services in India. End-to-end support for manufacturers and businesses.",

//   keywords: [
//     "BIS certification",
//     "ISI mark registration",
//     "compliance services India",
//     "regulatory approvals",
//     "product certification",
//     "Eminence Global Compliances",
//   ],

//   authors: [{ name: "Eminence Global Compliances Group" }],
//   creator: "Eminence Global Compliances Group",

//   metadataBase: new URL("https://eminencecompliance.com"),

//   openGraph: {
//     title:
//       "Eminence Global Compliances Group | BIS Certification Experts",

//     description:
//       "Trusted partner for BIS certification, ISI marking, and regulatory compliance services across India.",

//     url: "https://eminencecompliance.com",

//     siteName: "Eminence Global Compliances Group",

//     images: [
//       {
//         url: "/logo.png",
//         width: 800,
//         height: 600,
//         alt: "Eminence Global Compliances Group",
//       },
//     ],

//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Eminence Global Compliances Group | BIS Certification Experts",

//     description:
//       "Trusted partner for BIS certification and regulatory compliance services across India.",

//     images: ["/logo.png"],
//   },

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* JSON-LD Structured SEO Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",

//               name: "Eminence Global Compliances Group",

//               url: "https://eminencecompliance.com",

//               logo: "https://eminencecompliance.com/logo.png",

//               description:
//                 "Expert BIS certification, ISI mark registration, and regulatory compliance services in India.",

//               email: [
//                 "info@eminencecompliance.com"
//               ],

//               contactPoint: [
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+91-917428555852",
//                   contactType: "customer service",
//                   areaServed: ["IN"],
//                   availableLanguage: ["English", "Hindi"],
//                 },
//               ],

//               address: {
//                 "@type": "PostalAddress",
//                 addressCountry: "India",
//               },
//             }),
//           }}
//         />
//       </head>

//       <LenisScroll />

//       <body className={`${outfit.variable} family-regular antialiased`}>
//         <Navbar />

//         {children}

//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           newestOnTop
//           closeOnClick
//           pauseOnHover
//         />

//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import LenisScroll from "@/components/lenisScroll";
import { Footer } from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title:
    "Eminence Global Compliance Group | BIS Certification & Regulatory Services",

  description:
    "Eminence Global Compliance Group provides expert BIS certification, ISI mark registration, and regulatory compliance services in India. End-to-end support for manufacturers and businesses.",

  keywords: [
    "BIS certification",
    "ISI mark registration",
    "compliance services India",
    "regulatory approvals",
    "product certification",
    "Eminence Global Compliance Group",
  ],

  authors: [{ name: "Eminence Global Compliance Group" }],
  creator: "Eminence Global Compliance Group",

  metadataBase: new URL("https://www.eminencecompliance.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Eminence Global Compliance Group | BIS Certification Experts",

    description:
      "Trusted partner for BIS certification, ISI marking, and regulatory compliance services across India.",

    url: "https://www.eminencecompliance.com",

    siteName: "Eminence Global Compliance Group",

    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Eminence Global Compliance Group",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eminence Global Compliance Group | BIS Certification Experts",

    description:
      "Trusted partner for BIS certification and regulatory compliance services across India.",

    images: ["/logo.png"],
  },

  // Put favicon.ico in /public (do NOT also keep one in /app, or they will clash)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    shortcut: "/favicon.ico",
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

              name: "Eminence Global Compliance Group",

              url: "https://www.eminencecompliance.com",

              logo: "https://www.eminencecompliance.com/logo.png",

              description:
                "Expert BIS certification, ISI mark registration, and regulatory compliance services in India.",

              email: ["info@eminencecompliance.com"],

              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7428555852",
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

      <body className={`${outfit.variable} family-regular antialiased`}>
        <LenisScroll />

        <Navbar />

        {children}

        <EnquiryPopup />   {/* add this */}
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