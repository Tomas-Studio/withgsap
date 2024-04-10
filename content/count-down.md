---
title: 'Animating a Countdown Timer'
---

With a few lines of codes and with the gsap library, you will be able to animate a countdown timer

First let go through how we setup the template for the time segments, each time section contains two time segment for each of the digits.

We create a `TimeSegment.vue` component

```vue [TimeSegment.vue]
<script setup lang="ts">
interface Props { data: string }

defineProps<Props>()
</script>

<template>
  <div class="time-segment">
    <div class="display">
      <div class="display__top" v-html="data" />
      <div class="display__bottom" v-html="data" /> // [!code --]
      <div class="display__bottom" /> // [!code ++]
      <div class="overlay">
        <div class="overlay__top" v-html="data" />
        <div class="overlay__bottom" v-html="data" />
      </div>
    </div>
  </div>
</template>
```
And we now create a `Countdown` component which contains all the time sections, it looks something like this

```vue [Countdown.vue]
<template>
  <div>
    <div>
      <p class="section-title">
        DAYS
      </p>
      <div>
        <TimeSegment :data="days[0]" />
        <TimeSegment :data="days[1]" />
      </div>
    </div>

    // other sections goes here i.e hours, minutes & seconds
  </div>
</template>
```
