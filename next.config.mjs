/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // Activer le React Compiler
      reactCompiler: true,
      // Ou en mode opt-in
      reactCompiler: {
        compilationMode: 'annotation'
      },
      ppr: 'incremental'
    }
  };

export default nextConfig;
