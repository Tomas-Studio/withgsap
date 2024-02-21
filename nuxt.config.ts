// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/base.css', '~/assets/styles/font.css'],
  modules: ['@nuxt/image', '@unocss/nuxt'],
})
