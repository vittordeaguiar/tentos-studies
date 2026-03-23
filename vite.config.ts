import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Pages({
      dirs: "src/pages",
      extensions: ["tsx"],
      importMode: "sync",
      resolver: "react",
    }),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
