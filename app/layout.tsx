import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swapnil Nicolson Dadel — GenAI Data Analyst",
  description:
    "Portfolio of Swapnil Nicolson Dadel — GenAI Data Analyst specializing in Python, SQL, Power BI and AI-driven analytics products. M.Tech Computer Science, BIT Mesra.",
  keywords: [
    "Swapnil Nicolson Dadel",
    "GenAI Data Analyst",
    "Data Analyst Portfolio",
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Gemini AI",
    "Business Intelligence",
    "Data Engineering",
  ],
  authors: [{ name: "Swapnil Nicolson Dadel" }],
  creator: "Swapnil Nicolson Dadel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swapnil-dadel.vercel.app",
    title: "Swapnil Nicolson Dadel — GenAI Data Analyst",
    description:
      "Building intelligent analytics products using Python, SQL, Power BI and AI.",
    siteName: "Swapnil Nicolson Dadel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swapnil Nicolson Dadel — GenAI Data Analyst",
    description:
      "Building intelligent analytics products using Python, SQL, Power BI and AI.",
    creator: "@swapitsneil",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swapnil Nicolson Dadel",
  jobTitle: "GenAI Data Analyst",
  email: "swapnilnicolson.201@gmail.com",
  url: "https://swapnil-dadel.vercel.app",
  sameAs: [
    "https://github.com/swapitsneil",
    "https://www.linkedin.com/in/swapnil-nicolson-dadel",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Birla Institute of Technology, Mesra",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Cambridge Institute of Technology, Ranchi",
    },
  ],
  knowsAbout: [
    "Data Analysis",
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Generative AI",
    "Business Intelligence",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090B] text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
