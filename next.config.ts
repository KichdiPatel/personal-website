import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  outputFileTracingRoot: process.cwd(),
};

const withMDX = require("@next/mdx")();
export default withMDX(nextConfig);
