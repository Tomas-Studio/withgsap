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
  shortcuts: {
    fyc: 'flex items-center',
    fcc: 'flex items-center justify-center',
  },
  rules: [],
  theme: {
    colors: {
      dark: '#111111',
      gRed: '#eb3054',
      gYellow: '#ffc549',
      gBlue: '#0095d5',
      gNavy: '#171d44',
      gGreen: '#25b68c',
    },
  },
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
