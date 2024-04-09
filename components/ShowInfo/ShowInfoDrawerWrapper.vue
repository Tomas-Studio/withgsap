<script setup lang="ts">
const { showInfo } = useInfo()
</script>

<template>
  <ShowInfoButton @show-info="showInfo = true" />

  <Teleport to="body">
    <ShowInfoDrawer v-model:show="showInfo">
      <slot />
    </ShowInfoDrawer>
  </Teleport>
</template>
