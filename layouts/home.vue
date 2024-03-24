<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <div flex="~ col" min-h-100dvh relative>
    <WebLayoutNav />
    <main flex-1>
      <slot />
    </main>
    <WebLayoutFooter />
    <SpeedInsights />
  </div>
</template>
