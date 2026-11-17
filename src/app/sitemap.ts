import { MetadataRoute } from "next";
import { PRODUCTS } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pontualbalancas.com.br";
  const currentDate = "2026-11-17";

  const staticRoutes = [
    "",
    "/balancas",
    "/servicos",
    "/segmentos",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/balancas/${prod.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
