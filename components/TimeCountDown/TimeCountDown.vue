<script setup lang="ts">
const daysRef = ref<HTMLDivElement | null>(null)
const hoursRef = ref<HTMLDivElement | null>(null)
const minutesRef = ref<HTMLDivElement | null>(null)
const secondsRef = ref<HTMLDivElement | null>(null)

const { days, hours, minutes, seconds, animateTimer } = useTimer(new Date('2024-05-10T09:00:00Z'))
watch(() => seconds.value[0], (newSec0, oldSec0) => animateTimer(secondsRef, oldSec0, newSec0, 0))
watch(() => seconds.value[1], (newSec1, oldSec1) => animateTimer(secondsRef, oldSec1, newSec1, 1))
watch(() => minutes.value[0], (newMin1, oldMin1) => animateTimer(minutesRef, oldMin1, newMin1, 0))
watch(() => minutes.value[1], (newMin1, oldMin1) => animateTimer(minutesRef, oldMin1, newMin1, 1))
watch(() => hours.value[0], (newHour1, oldHour1) => animateTimer(hoursRef, oldHour1, newHour1, 0))
watch(() => hours.value[1], (newHour1, oldHour1) => animateTimer(hoursRef, oldHour1, newHour1, 1))
watch(() => days.value[0], (newDay1, oldDay1) => animateTimer(daysRef, oldDay1, newDay1, 0))
watch(() => days.value[1], (newDay1, oldDay1) => animateTimer(daysRef, oldDay1, newDay1, 1))
</script>

<template>
  <div flex gap-x-8>
    <div ref="daysRef" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        DAYS
      </p>
      <div flex gap-x-2>
        <TimeCountDownSegment :data="days[0]" />
        <TimeCountDownSegment :data="days[1]" />
      </div>
    </div>

    <div ref="hoursRef" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        HOURS
      </p>
      <div flex gap-x-2>
        <TimeCountDownSegment :data="hours[0]" />
        <TimeCountDownSegment :data="hours[1]" />
      </div>
    </div>

    <div ref="minutesRef" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        MINUTES
      </p>
      <div flex gap-x-2>
        <TimeCountDownSegment :data="minutes[0]" />
        <TimeCountDownSegment :data="minutes[1]" />
      </div>
    </div>

    <div ref="secondsRef" text-center>
      <p text-3xl tracking-tight fw600 mb3>
        SECONDS
      </p>
      <div flex gap-x-2>
        <TimeCountDownSegment :data="seconds[0]" />
        <TimeCountDownSegment :data="seconds[1]" />
      </div>
    </div>
  </div>
</template>
