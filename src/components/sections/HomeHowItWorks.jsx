import {motion} from 'framer-motion'
import Container from '../layout/Container'
import {homeContent} from '../../data'

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

export default function HomeHowItWorks() {
  const {eyebrow, title, steps} = homeContent.howItWorks

  return (
    <section className="pt-16 sm:pt-24 pb-32 sm:pb-48 lg:pb-64 bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <div className="bg-beige p-6 sm:p-8 lg:p-10">
          <div className="mb-12 lg:mb-16">
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-on-light/50 mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-wide text-text-on-light">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, '0')

              return (
                <motion.div
                  key={step.title}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.08, duration: 0.5}}
                >
                  <p className="text-sm text-text-on-light/60 mb-3">{stepNumber}</p>
                  <div className="w-10 h-px bg-text-on-light/30 mb-6" aria-hidden="true" />
                  <h3 className="font-sans text-lg font-bold text-text-on-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-on-light/65 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
