import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      treeshake: {
        // p5 を含むモジュールに対しては side effects があるとみなす
        moduleSideEffects: (id) => {
          if (id.includes('p5')) return true;
          return false;
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      mangle: {
        // setup と draw は名前を変えないように指定
        reserved: ['setup', 'draw']
      }
    }
  }
});