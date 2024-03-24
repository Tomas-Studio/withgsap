import type { Ref } from 'vue'

export default function (date: Date) {
  const currentDate = useNow()
  const futureDate = useState('future-date', () => date) // future date, can be changed when composable is initialized
  const TIME_LEFT = useState(
    'time-left',
    () => Math.floor((futureDate.value.getTime() - currentDate.value.getTime()) / 1000),
  ) // in seconds

  const days = useState('days', () => format(Math.floor(TIME_LEFT.value / (60 * 60 * 24))).split(''))
  const hours = useState('hours', () => format(Math.floor(TIME_LEFT.value / (60 * 60)) % 24).split(''))
  const minutes = useState('minutes', () => format(Math.floor(TIME_LEFT.value / 60) % 60).split(''))
  const seconds = useState('seconds', () => format(TIME_LEFT.value % 60).split(''))

  function format(time: number): string {
    return String(time).padStart(2, '0')
  }

  function timerFn() {
    seconds.value = format(TIME_LEFT.value % 60).split('')
    minutes.value = format(Math.floor(TIME_LEFT.value / 60) % 60).split('')
    hours.value = format(Math.floor(TIME_LEFT.value / (60 * 60)) % 24).split('')
    days.value = format(Math.floor(TIME_LEFT.value / (60 * 60 * 24))).split('')

    TIME_LEFT.value--
  }

  useIntervalFn(timerFn, 1000)

  // Animation section
  const { $gsap: gsap } = useNuxtApp()

  function animateTimer(el: Ref<HTMLDivElement | null>, oldValue: string, newValue: string) {
    console.log(`${el.value}, ${oldValue}, ${newValue}`)
    console.log(gsap)
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    animateTimer,
  }
}
