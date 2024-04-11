<script setup lang="ts">
const emit = defineEmits(['show-info'])
const { showInfo } = useInfo()
</script>

<template>
  <button
    v-if="!showInfo"
    class="fixed p1.5 bg-yellow-4 hover:bg-yellow-5
    active:(bg-yellow-6 text-gray-3) duration-300
    top-3 right-3 outline-none z-40
    focus-visible:(outline-1.5 outline-dashed outline-offset-3 outline-emerald-6)"
    aria-label="show info"
    @click="emit('show-info')"
  >
    <div i-material-symbols-light:page-info-outline-rounded h5 w5 />
  </button>
</template>
