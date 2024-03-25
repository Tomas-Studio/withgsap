import type { Ref } from 'vue'

export default function (date: Date) {
  const currentDate = useNow()
  const futureDate = useState('future-date', () => date) // future date, can be changed when composable is initialized
  const timeLeft = useState(
    'time-left',
    () => Math.floor((futureDate.value.getTime() - currentDate.value.getTime()) / 1000),
  ) // in seconds

  const days = useState('days', () => format(Math.floor(timeLeft.value / (60 * 60 * 24))).split(''))
  const hours = useState('hours', () => format(Math.floor(timeLeft.value / (60 * 60)) % 24).split(''))
  const minutes = useState('minutes', () => format(Math.floor(timeLeft.value / 60) % 60).split(''))
  const seconds = useState('seconds', () => format(timeLeft.value % 60).split(''))

  function format(time: number): string {
    return String(time).padStart(2, '0')
  }

  function timerFn() {
    seconds.value = format(timeLeft.value % 60).split('')
    minutes.value = format(Math.floor(timeLeft.value / 60) % 60).split('')
    hours.value = format(Math.floor(timeLeft.value / (60 * 60)) % 24).split('')
    days.value = format(Math.floor(timeLeft.value / (60 * 60 * 24))).split('')

    timeLeft.value--
  }

  useIntervalFn(timerFn, 1000)

  // Animation section
  const { $gsap: gsap } = useNuxtApp()

  function animateTimer(el: Ref<HTMLDivElement | null>, oldValue: string, newValue: string, idx: number) {
    const timeSegments = el.value!.querySelectorAll('.time-segment')
    updateTimeSegement(timeSegments[idx], [oldValue, newValue])
  }

  function updateTimeSegement(el: Element, values: [string, string]) {
    const displayTop = el.querySelector('.display__top')
    const displayBottom = el.querySelector('.display__bottom')
    const overlayTop = el.querySelector('.overlay__top')
    const overlayBottom = el.querySelector('.overlay__bottom')

    overlayTop!.textContent = values[0]
    displayBottom!.textContent = values[0]

    gsap.to(
      overlayTop,
      {
        keyframes: {
          '0%': { rotateX: 0 },
          '50%': { rotateX: -90 },
          '100%': { rotateX: -90 },
        },
        duration: 0.8,
        onComplete: () => {
          displayTop!.textContent = values[1]
          overlayBottom!.textContent = values[1]
        },
      },
    )

    gsap.to(
      overlayBottom,
      {
        keyframes: {
          '0%': { rotateX: 90 },
          '50%': { rotateX: 90 },
          '100%': {
            rotateX: 0,
            onStart: () => {
              displayBottom!.textContent = values[1]
            },
          },
        },
        duration: 0.8,
      },
    )
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    animateTimer,
  }
}
