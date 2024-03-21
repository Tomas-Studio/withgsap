<script setup lang="ts">
const days = ref<HTMLDivElement | null>(null)
const hours = ref<HTMLDivElement | null>(null)
const minutes = ref<HTMLDivElement | null>(null)
const seconds = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div flex gap-x-8>
    <div ref="days" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        DAYS
      </p>
      <div flex gap-x-2.5>
        <TimeCountDownSegment data="5" />
        <TimeCountDownSegment data="5" />
      </div>
    </div>

    <div ref="hours" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        HOURS
      </p>
      <div flex gap-x-2.5>
        <TimeCountDownSegment data="5" />
        <TimeCountDownSegment data="5" />
      </div>
    </div>

    <div ref="minutes" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        MINUTES
      </p>
      <div flex gap-x-2.5>
        <TimeCountDownSegment data="5" />
        <TimeCountDownSegment data="5" />
      </div>
    </div>

    <div ref="seconds" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        SECONDS
      </p>
      <div flex gap-x-2.5>
        <TimeCountDownSegment data="5" />
        <TimeCountDownSegment data="5" />
      </div>
    </div>
  </div>
</template>
