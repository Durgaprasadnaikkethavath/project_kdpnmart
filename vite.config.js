import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project_kdpnmart/",
});

const config = myFunction();

if (config && config.withConfig) {
  console.log(config.withConfig);
} else {
  console.log("config or config.withConfig is undefined");
}
