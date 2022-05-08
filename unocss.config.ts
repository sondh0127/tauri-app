import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig<{}>({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:100,200,400,700,800',
        mono: 'IBM Plex Mono',
      },
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border-gray-500:10',
      'bg-base': 'bg-white dark:bg-hex-121212',
      'btn': 'px-4 py-1 inline-block bg-cyan6 hover:bg-cyan7 text-white cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      'link': 'op50 hover:op100 hover:text-cyan6',
      'divider': 'border-b border-base',
    },
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
