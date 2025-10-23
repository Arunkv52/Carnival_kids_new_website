import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"




// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // 👈 allows access from network (like mobile devices)
    port: 5173, // optional, default is 5173
  },
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

