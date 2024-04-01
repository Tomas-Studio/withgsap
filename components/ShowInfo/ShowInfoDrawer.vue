<script setup lang="ts">
defineProps<{ show: boolean }>()
const { onLeave, onEnter, onBeforeEnter } = useInfo()
</script>

<template>
  <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <div v-if="show" class="fixed top-0 z-30 right-1 max-w-lg w-lg max-h-99% h-full my1 p5 bg-dark text-white">
      <slot />
    </div>
  </Transition>
</template>
