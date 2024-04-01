export default function () {
  const showInfo = useState('show-info', () => false)

  const { $gsap: gsap } = useNuxtApp()

  function onBeforeEnter(el: Element) {
    gsap.set(el, {
      xPercent: 100,
    })
  }

  function onEnter(el: Element, done: () => void) {
    gsap.to(el, {
      xPercent: 0,
      duration: 0.3,
      ease: 'power1',
      onComplete: done,
    })
  }

  function onLeave(el: Element, done: () => void) {
    gsap.to(el, {
      xPercent: 100,
      duration: 0.3,
      ease: 'power1',
      onComplete: done,
    })
  }

  return {
    showInfo,
    onLeave,
    onEnter,
    onBeforeEnter,
  }
}
