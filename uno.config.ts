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
    'fyc': 'flex items-center',
    'fcc': 'flex items-center justify-center',
    'p-web': '',
    'flink': 'underline underline-dashed outline-none underline-1 hover:no-underline duration-300 underline-offset-2',
  },
  rules: [],
  theme: {
    colors: {
      dark: '#111111',
      gRed: '#eb3054',
      gRed2: '#b01c2e',
      gYellow: '#ffc549',
      gBlue: '#0095d5',
      gNavy: '#171d44',
      gGreen: '#25b68c',
      gLight: '#F6F6F6',
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
        'mono': 'DM Mono:300,400',
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
