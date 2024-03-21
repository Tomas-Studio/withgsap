export default function (date: Date) {
  const currentDate = useNow()
  const futureDate = useState('future-date', () => date) // future date, can be changed when composable is initialized
  const TIME_LEFT = useState(
    'time-left',
    () => Math.floor((futureDate.value.getTime() - currentDate.value.getTime()) / 1000),
  ) // in seconds

  const days = useState('days', () => format(Math.floor(TIME_LEFT.value / (60 * 60 * 24))))
  const hours = useState('hours', () => format(Math.floor(TIME_LEFT.value / (60 * 60)) % 24))
  const minutes = useState('minutes', () => format(Math.floor(TIME_LEFT.value / 60) % 60))
  const seconds = useState('seconds', () => format(TIME_LEFT.value % 60))

  function format(time: number): string {
    return String(time).padStart(2, '0')
  }

  function timerFn() {
    seconds.value = format(TIME_LEFT.value % 60)
    minutes.value = format(Math.floor(TIME_LEFT.value / 60) % 60)
    hours.value = format(Math.floor(TIME_LEFT.value / (60 * 60)) % 24)
    days.value = format(Math.floor(TIME_LEFT.value / (60 * 60 * 24)))

    TIME_LEFT.value--
  }

  function animateTimer() {}

  return {
    days,
    hours,
    minutes,
    seconds,
    animateTimer,
    timerFn,
  }
}
