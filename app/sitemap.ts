import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const companySlugs = ["acme-inc", "globex", "initech"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/company`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...companySlugs.map((slug) => ({
      url: `${siteUrl}/company/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
