<script setup lang="ts">
definePageMeta({ layout: 'none' })
useSeoMeta({ title: 'Time Countdown' })
const { data } = await useAsyncData('count-down', () => queryContent('/count-down').findOne())
</script>

<template>
  <main class="min-h-100dvh wfull flex flex-col">
    <ShowInfoDrawerWrapper :title="`${data?.title}`">
      <article>
        <ContentRenderer :value="data" />
      </article>
    </ShowInfoDrawerWrapper>
    <div class="flex-1 fcc">
      <TimeCountDown />
    </div>
    <footer flex items-center justify-between py5 px4 xl:px10>
      <div />
      <div flex items-center>
        Made with
        <div i-solar:heart-angle-bold h4 w4 text-g-red mx1 /> using
        <NuxtLink to="https://vuejs.org/" target="_blank" external class="mx1 flink focus-visible:text-yellow-7 hover:text-yellow-7">
          Vue
        </NuxtLink>  &
        <NuxtLink to="https://gsap.com/" target="_blank" external class="mx1 flink focus-visible:text-yellow-7 hover:text-yellow-7">
          Gsap
        </NuxtLink>
      </div>
    </footer>
  </main>
</template>
