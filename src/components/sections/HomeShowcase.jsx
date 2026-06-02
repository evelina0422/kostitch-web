import {useState, useEffect, useCallback} from 'react'
import {motion, AnimatePresence, useReducedMotion} from 'framer-motion'
import Container from '../layout/Container'
import {homeContent} from '../../data'

const ROTATE_INTERVAL_MS = 5000

const slideVariants = {
  enter: (direction) => ({x: direction > 0 ? '100%' : '-100%', opacity: 0}),
  center: {x: 0, opacity: 1},
  exit: (direction) => ({x: direction > 0 ? '-100%' : '100%', opacity: 0}),
}

export default function HomeShowcase() {
  const {slides} = homeContent.showcase
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  const goTo = useCallback(
    (nextIndex, nextDirection = 1) => {
      if (slides.length <= 1) return
      setDirection(nextDirection)
      setIndex(((nextIndex % slides.length) + slides.length) % slides.length)
    },
    [slides.length],
  )

  const goNext = useCallback(() => {
    goTo(index + 1, 1)
  }, [goTo, index])

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const timer = setInterval(goNext, ROTATE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, slides.length, goNext])

  if (!slides.length) return null

  const current = slides[index]

  return (
    <section
      aria-label="Photo showcase"
      className="w-full bg-cream py-10 md:py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Container>
        <div className="relative mx-auto w-full max-w-2xl md:max-w-3xl min-h-[280px] sm:min-h-[340px] md:min-h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.article
              key={index}
              custom={direction}
              variants={reduceMotion ? undefined : slideVariants}
              initial={reduceMotion ? false : 'enter'}
              animate="center"
              exit={reduceMotion ? undefined : 'exit'}
              transition={{duration: 0.65, ease: [0.4, 0, 0.2, 1]}}
              className="absolute inset-0 flex items-center justify-center px-2 sm:px-4"
            >
              <div className="w-full max-w-xl border border-border-line bg-beige shadow-lg hover:border-accent hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center bg-light p-6 sm:p-8 md:p-10 min-h-[240px] sm:min-h-[300px] md:min-h-[360px]">
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-w-full max-h-[200px] sm:max-h-[260px] md:max-h-[320px] w-auto h-auto object-contain"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {slides.length > 1 && (
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Showcase slides"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className={`h-2 w-2 transition-colors ${
                  i === index ? 'bg-accent' : 'bg-text-on-light/40 hover:bg-text-on-light/70'
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
