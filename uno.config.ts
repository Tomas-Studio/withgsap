import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {},
  rules: [],
  theme: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        'anta': [
          { name: 'Anta', weights: ['400'] },
          { name: 'sans-serif', provider: 'none' },
        ],
        'protest-riot': [
          { name: 'Protest Riot', weights: ['400'] },
          { name: 'sans-serif', provider: 'none' },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
