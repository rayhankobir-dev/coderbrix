import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.coderbrix.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.coderbrix.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.coderbrix.com/coderbrix.svg",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: ["https://www.coderbrix.com/coderbrix.svg"],
    },
    {
      url: "https://www.coderbrix.com/og:coderbrix.png",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: ["https://www.coderbrix.com/og:coderbrix.png"],
    },
    {
      url: "https://www.coderbrix.com/favicon.ico",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: ["https://www.coderbrix.com/favicon.ico"],
    },
    {
      url: "https://www.coderbrix.com/icon.svg",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: ["https://www.coderbrix.com/icon.svg"],
    },
    {
      url: "https://www.coderbrix.com/apple-icon.png",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: ["https://www.coderbrix.com/apple-icon.png"],
    },
    {
      url: "https://www.coderbrix.com/robots.txt",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.coderbrix.com/sitemap.xml",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
