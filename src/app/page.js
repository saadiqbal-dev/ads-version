import GodlyHome from "@/godlyComponents/home";
import { homeTitle } from "@/data/metaTitles";

// Static metadata for home page
export const metadata = {
  title: homeTitle,
  description: "South Florida's premier window cleaning and exterior home service. Professional window cleaning, pressure washing, gutter cleaning, and more with 100% satisfaction guarantee.",
  keywords: [
    'window cleaning South Florida',
    'pressure washing South Florida',
    'exterior cleaning services',
    'residential cleaning',
    'commercial cleaning',
    'house washing',
    'gutter cleaning',
    'roof cleaning'
  ],
  openGraph: {
    title: homeTitle,
    description: "South Florida's premier window cleaning and exterior home service. Professional quality with exceptional customer service.",
    url: "https://godlywindows.com",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: "South Florida's premier window cleaning and exterior home service.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <GodlyHome />;
}
