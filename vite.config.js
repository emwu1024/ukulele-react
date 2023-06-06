import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This line breaks the dev routing
  // base: "/ukulele-react/",
  plugins: [react()],
});
