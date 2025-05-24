import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Required for Render (not localhost)
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use Render's port or fallback
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
