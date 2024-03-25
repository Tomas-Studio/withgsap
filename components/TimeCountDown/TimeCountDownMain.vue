<template>
  <main class="min-h-100dvh wfull flex flex-col bg-gray-2">
    <nav />
    <div class="flex-1 fcc">
      <TimeCountDown />
    </div>
    <footer flex justify-end py5 px4 xl:px10>
      Made with
      <NuxtLink to="https://vuejs.org/" target="_blank" external class="mx1 flink hover:text-yellow-7">
        Vue
      </NuxtLink>  &
      <NuxtLink to="https://gsap.com/" target="_blank" external class="mx1 flink hover:text-yellow-7">
        Gsap
      </NuxtLink>
    </footer>
  </main>
</template>
