import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@designbycode/peacock",
      fileName: "index",
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      external: ['colord', 'colord/plugins/mix'],
      output: {
        globals: {
          colord: 'colord',
          'colord/plugins/mix': 'colordMixPlugin'
        }
      }
    },
    minify: "terser",
  },
  plugins: [dts()],
});