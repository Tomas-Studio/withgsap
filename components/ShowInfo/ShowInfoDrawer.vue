<script setup lang="ts">
const show = defineModel<boolean>('show', { required: true })
const { onLeave, onEnter, onBeforeEnter } = useInfo()
</script>

<template>
  <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <div v-if="show" class="fixed top-0 z-30 right-1 max-w-540px w-540px max-h-99% h-full my1 bg-dark text-white flex flex-col">
      <div class="fyc justify-between wfull pl5 pr2 py3">
        <slot name="title" />
        <button
          class="p2 text-gray-3 hover:text-white duration-300"
          aria-label="close info" @click="show = false"
        >
          <div i-ci:close-md h5.5 w5.5 />
        </button>
      </div>
      <div class=" flex-1 of-y-auto sb pl5 pr2 py3">
        <slot />
      </div>
    </div>
  </Transition>
</template>
