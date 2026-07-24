import { MetadataRoute } from "next";
import projects from "@/app/data/projects.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://portfolio-josue.com";

    // URLs statiques
    const routes = ["", "/profil", "/filter"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // URLs des projets dynamiques
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/project/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes];
}