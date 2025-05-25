"use client";
import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "@/godlyComponents/header/CitiesPopup";
import { usePathname } from "next/navigation";

export default function ClientHead() {
  const { city } = useGodlyContext();
  const pathname = usePathname();

  // Get city from URL path when available
  const getCityFromUrl = () => {
    if (pathname) {
      const pathSegments = pathname.split("/");
      if (pathSegments.length > 1 && pathSegments[1]) {
        const citySlug = pathSegments[1];
        if (citiesMap[citySlug]) {
          return citiesMap[citySlug];
        }
      }
    }
    return city;
  };

  const effectiveCity = (getCityFromUrl() || city)
    ?.toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
  let title = "Godly Windows & Wash Co.";

  if (effectiveCity && effectiveCity !== "South Florida") {
    title = `${effectiveCity} | Godly Windows`;
  }

  useEffect(() => {
    document.title = title;

    // This prevents other scripts from changing the title
    const observer = new MutationObserver(() => {
      if (document.title !== title) {
        document.title = title;
      }
    });

    observer.observe(document.querySelector("title") || document.head, {
      subtree: true,
      characterData: true,
      childList: true,
    });

    return () => observer.disconnect();
  }, [title, pathname]);

  return null;
}
