// SEO-optimized meta titles for services and locations
export const serviceMetaTitles = {
  "solar-panel-cleaning": "Solar Panel Cleaning",
  "exterior-window-cleaning": "Window Cleaning",
  "interior-window-cleaning": "Interior Window Cleaning",
  "gutter-cleaning": "Gutter Cleaning",
  "house-washing": "House Washing & Pressure Washing",
  "roof-washing": "Roof Cleaning",
  "pressure-washing": "Pressure Washing",
  "paver-sealing": "Paver Sealing",
  "light-fixture-cleaning": "Light Fixture Cleaning",
  "screen-cleaning": "Screen Cleaning",
  "skylight-cleaning": "Skylight Cleaning",
  "holiday-light-installation": "Holiday Light Installation",
  "high-dusting": "High Dusting Services",
};

function capitalizeString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Handle non-string or empty inputs
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Generate SEO-optimized title for service pages
export const generateServiceTitle = (serviceSlug, cityName) => {
  const serviceName = serviceMetaTitles[serviceSlug];

  if (!serviceName) {
    // Fallback: convert slug to readable service name
    const fallbackService = serviceSlug
      ? serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      : "Service";
    return cityName
      ? `${fallbackService} in ${capitalizeString(cityName)} | Godly Windows`
      : `${fallbackService} | Godly Windows`;
  }

  if (!cityName) {
    return `${serviceName} in South Florida | Godly Windows`;
  }

  return `${serviceName} in ${capitalizeString(cityName)} | Godly Windows`;
};

// Generate SEO-optimized title for city home pages
export const generateCityTitle = (cityName) => {
  if (!cityName) {
    return "Window Cleaning & Pressure Washing Services in South Florida";
  }

  return `Window Cleaning & Pressure Washing in ${capitalizeString(cityName)} | Godly Windows`;
};

// Home page optimized title
export const homeTitle =
  "Window Cleaning & Pressure Washing Services in South Florida";
