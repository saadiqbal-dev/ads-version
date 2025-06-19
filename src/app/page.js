import GodlyHome from "@/godlyComponents/home";
import { homeTitle, homeDescription } from "@/data/metaTitles";

// Static metadata for home page
export const metadata = {
  title: homeTitle,
  description: homeDescription,
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
    description: homeDescription,
    url: "https://godlywindows.com",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <GodlyHome />;
}
