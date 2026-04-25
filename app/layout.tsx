import type { Metadata } from "next";
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
  title: "Eminence Global Compliances | BIS Certification & Regulatory Services",
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

  openGraph: {
    title: "Eminence Global Compliances | BIS Certification Experts",
    description:
      "Trusted partner for BIS certification, ISI marking, and regulatory compliance services across India.",
    url: "https://eminencecomplinence.com",
    siteName: "Eminence Global Compliances",
    images: [
      {
        url: "/logo.jpg", // make sure this file exists in /public
        width: 800,
        height: 600,
        alt: "Eminence Global Compliances",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/logo.jpg", // or "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}