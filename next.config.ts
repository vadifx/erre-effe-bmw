import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turbopack è il bundler di default in Next.js 16 per dev e build
  // Le configurazioni seguenti sono opzionali ma esplicite per chiarezza
  turbopack: {
    resolveAlias: {
      "@": "./",
    },
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
};

export default nextConfig;
