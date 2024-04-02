<script setup lang="ts">
const show = defineModel<boolean>('show', { required: true })
const { onLeave, onEnter, onBeforeEnter } = useInfo()
</script>

<template>
  <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <div v-if="show" class="fixed top-0 z-30 right-1 max-w-lg w-lg max-h-99% h-full my1 p5 bg-dark text-white">
      <h1 class="text-xl mb3">
        This is the Title
      </h1>
      <slot />
      <buttton
        class="absolute p1.5 top-3 right-2 cursor-pointer
         text-gray-3 hover:text-white duration-300"
        aria-label="show code"
        @click="show = false"
      >
        <div i-ci:close-md h5 w5 />
      </buttton>
    </div>
  </Transition>
</template>
