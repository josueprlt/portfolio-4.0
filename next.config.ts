import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Désactive l'optimisation d'images (nécessaire en export statique)
  },
};

export default nextConfig;
