<script setup lang="ts">
defineProps<{ title: string }>()
const { showInfo } = useInfo()

useEventListener('keydown', (e) => {
  if (e.key === 'Escape')
    showInfo.value = false
})
</script>

<template>
  <ShowInfoButton @show-info="showInfo = true" />

  <Teleport to="body">
    <ShowInfoDrawer v-model:show="showInfo">
      <template #title>
        <h1 class="text-xl" v-html="title" />
      </template>
      <slot />
    </ShowInfoDrawer>
  </Teleport>
</template>
