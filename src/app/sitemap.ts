import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { pillars } from "@/data/pillars";

// No lastModified: stamping every URL with "now" on each build tells crawlers everything
// changed every time, which teaches them to ignore the field. Add real dates if you track them.
const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/approach", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pillars", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/adopt-a-village", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/impact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/tradition-culture", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/participate", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/transparency", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const pillarEntries: MetadataRoute.Sitemap = pillars.map((pillar) => ({
    url: `${siteUrl}/pillars/${pillar.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...pillarEntries];
}
