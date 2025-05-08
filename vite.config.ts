import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

export default defineConfig({
  define: {
    __VUE_PROD_DEVTOOLS__: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: 'inline',
    //minify: false, ---- TODO- comment this back when ready to deploy
    rollupOptions: {
      output: {
        entryFileNames: 'hiramekimini.js',
      },
    },
  },
  plugins: [
    vueDevTools(),
    vue({
      customElement: true,
    }),
  ],
})
