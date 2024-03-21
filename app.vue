<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: { lang: 'en', class: 'touch-manipulation' },
  bodyAttrs: { class: 'touch-manipulation antialiased font-tt-norms text-gray-8 dark:text-gray-3' },
  // link: [{ rel: 'icon', href: '/to-favicon-3.png' }],
})

useSeoMeta({
  title: 'WithGsap',
  titleTemplate: title => (title !== 'WithGsap' ? `${title} • WithGsap` : title),
  description: 'A showroom of different animations built with vue & Gsap',
  ogSiteName: 'WithGsap',
  ogImage: 'https://tjomas.co/ogImage.webp',
  ogImageAlt: 'WithGsap',
  twitterImage: 'https://tjomas.co/ogImage.webp',
  twitterCard: 'summary_large_image',
  twitterSite: '@TunjiOlakunle',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
