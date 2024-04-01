<script setup lang="ts">
const emit = defineEmits(['show-info'])
</script>

<template>
  <button
    class="fixed p2 bg-emerald-5 hover:bg-emerald-6
    active:(bg-emerald-7 text-gray-3) duration-300
    top-3 right-3 outline-none z-40
    focus-visible:(outline-1.5 outline-dashed outline-offset-3 outline-emerald-6)"
    aria-label="show code"
    @click="emit('show-info')"
  >
    <div i-bi:info h5 w5 />
  </button>
</template>
