
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Use a dynamic base URL that works for both development and production
  base: mode === 'production' ? '/personal-portfolio/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure source maps are generated for easier debugging
    sourcemap: true,
    // Improve caching for better performance after laptop closure
    cssCodeSplit: true,
    // Output directory for the build
    outDir: 'dist',
  },
}));
