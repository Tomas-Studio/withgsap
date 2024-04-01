<script setup lang="ts">
const { showInfo } = useInfo()
</script>

<template>
  <ShowInfoButton @show-info="showInfo = !showInfo" />

  <Teleport to="body">
    <ShowInfoDrawer v-model:show="showInfo">
      This is a Drawer again
    </ShowInfoDrawer>
  </Teleport>
</template>
