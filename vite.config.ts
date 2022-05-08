import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Inspector from 'vite-plugin-vue-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    Vue(),
    VueJsx(),
    Unocss(),
    AutoImport({
      imports: [
        '@vueuse/core',
        'vue',
        'vue-router',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
      ],
      dts: 'src/components.d.ts',
    }),
    Pages(),
    Inspector({
      enabled: false,
    }),
  ],
})
