import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context/godlyContext";
import { citiesMap } from "@/godlyComponents/header/CitiesPopup";
import ClientHead from "@/components/ClientHead"; // We'll create this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  // Debug what params we're getting
  console.log("Metadata params:", params);

  // Current approach for server component
  const citySlug = params?.city;
  const cityName = citySlug ? citiesMap[citySlug] : null;
  console.log("City slug from params:", citySlug, "City name:", cityName);
  const baseTitle = "Godly Windows & Wash Co.";
  const title = cityName ? `${cityName} | Godly Windows` : baseTitle;

  return {
    title,
    description:
      "South Florida's premier window cleaning and exterior home service. Professional quality with exceptional customer service.",
    generator: "Next.js",
    applicationName: "Godly Windows",
    keywords: [
      "window cleaning",
      "pressure washing",
      "gutter cleaning",
      "South Florida",
      "home services",
      "exterior cleaning",
    ],
    authors: [{ name: "Godly Windows" }],
    creator: "Godly Windows",
    publisher: "Godly Windows",
    formatDetection: {
      email: false,
      address: false,
      telephone: true,
    },
    metadataBase: new URL("https://godlywindows.com"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: title,
      description:
        "South Florida's premier window cleaning and exterior home service. Professional quality with exceptional customer service.",
      url: "https://godlywindows.com",
      siteName: "Godly Windows",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/Thumbnail.png",
          width: 1200,
          height: 630,
          alt: "Godly Windows - Professional Window & Exterior Cleaning Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description:
        "South Florida's premier window cleaning and exterior home service.",
      images: ["/assets/Thumbnail.png"],
      creator: "@godlywindows",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      ],
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        <AppWrapper>
          <ClientHead />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
