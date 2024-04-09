---
title: 'Animating CountDown'
---

How to animate a countdown

```typescript [useTimer.ts]
function animateTimer(el: Ref<HTMLDivElement | null>, oldValue: string, newValue: string, idx: number) {
  const timeSegments = el.value!.querySelectorAll('.time-segment')
  updateTimeSegement(timeSegments[idx], [oldValue, newValue])
}
```
