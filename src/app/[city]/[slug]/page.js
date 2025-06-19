import ServicesPage from "@/godlyComponents/servicesPage";
import { citiesMap } from "@/data/cities";
import { generateServiceTitle } from "@/data/metaTitles";

// Dynamic metadata generation for service pages
export async function generateMetadata({ params }) {
  const { slug, city } = await params;
  const cityName = citiesMap[city];
  
  const title = generateServiceTitle(slug, cityName);
  const description = `Professional ${slug.replace(/-/g, ' ')} services in ${cityName || 'South Florida'}. Expert exterior cleaning with 100% satisfaction guarantee. Free estimates available.`;
  
  return {
    title,
    description,
    keywords: [
      slug.replace(/-/g, ' '),
      cityName || 'South Florida',
      'professional cleaning',
      'exterior services',
      'residential',
      'commercial'
    ],
    openGraph: {
      title,
      description,
      url: `https://godlywindows.com/${city}/${slug}`,
      siteName: "Godly Windows",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${city}/${slug}`,
    },
  };
}

export default async function GodlyServices({ params }) {
  const param = await params;
  const { slug, city } = param;

  return <ServicesPage slug={slug} city={city} />;
}
