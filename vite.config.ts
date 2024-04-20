import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/utils/testSetup.ts"],
  },
} as VitestConfigExport);
