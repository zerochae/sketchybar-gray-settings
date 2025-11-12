import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/components/common": path.resolve(__dirname, "./src/components/common"),
      "@/components/widgets": path.resolve(__dirname, "./src/components/widgets"),
      "@/components/settings": path.resolve(__dirname, "./src/components/settings"),
      "@/components/icons": path.resolve(__dirname, "./src/components/icons"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@panda/styles": path.resolve(__dirname, "../../packages/panda/styled-system/styles.css"),
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
