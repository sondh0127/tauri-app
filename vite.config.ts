import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  NaiveUiResolver,
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Unocss(),
    AutoImport({
      imports: [
        '@vueuse/core',
        'vue',
      ],
    }),
    Components({
      resolvers: [
        NaiveUiResolver()
      ]
    }),
  ]
})
