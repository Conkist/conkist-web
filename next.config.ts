import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export using Next.js `output: 'export'`.
  // This causes `next build` to produce an `out/` directory suitable for static hosts.
  output: 'export',
  // Keep the exported files in `out` for easier CI artifact upload.
  distDir: 'out',
};

export default nextConfig;
