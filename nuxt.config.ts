// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/styles/base.css', '~/styles/font.css'],
  modules: ['@nuxt/image', '@unocss/nuxt'],
})
