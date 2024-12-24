/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Activer le React Compiler
    reactCompiler: true,
  },
  swcMinify: false,
};

export default nextConfig;
