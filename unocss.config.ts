import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetUno(),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'router-link': 'flex-center decoration-none',
    'button': 'border-none text-4 px-4 py-2',
  },
})
