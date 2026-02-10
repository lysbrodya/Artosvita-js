import { defineConfig } from "vite";
import { glob } from "glob";
import path from "path";

const htmlFiles = glob.sync("src/**/*.html");

const input = {
  main: "index.html",
};

htmlFiles.forEach((file) => {
  const name = path.relative("src", file).replace(/\.html$/, "");
  input[name] = file;
});

// Определяем base path в зависимости от окружения
let basePath = "/";
if (process.env.NODE_ENV === "production") {
  basePath = process.env.VERCEL ? "/" : "/Artosvita-js/";
}

export default defineConfig({
  base: basePath,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input,
    },
  },
});
