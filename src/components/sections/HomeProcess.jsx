import {motion} from 'framer-motion'
import {
  MessageCircle,
  PenTool,
  Scissors,
  CheckCircle,
  Factory,
  PackageCheck,
} from 'lucide-react'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import {homeContent} from '../../data'

const processIcons = [MessageCircle, PenTool, Scissors, CheckCircle, Factory, PackageCheck]

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

export default function HomeProcess() {
  const {title, subtitle, steps} = homeContent.process

  return (
    <section className="pt-[9rem] md:pt-[12rem] pb-16 md:pb-20 bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          titleClassName="uppercase tracking-wide"
          className="mb-12 md:mb-16"
        />

        {/* Desktop: connected horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-6 gap-x-4">
            {/* Connecting line running through the icon centers */}
            <div
              className="absolute top-10 left-[8.333%] right-[8.333%] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20"
              aria-hidden="true"
            />

            {steps.map((step, index) => {
              const Icon = processIcons[index]
              const stepNumber = String(index + 1).padStart(2, '0')

              return (
                <motion.div
                  key={step.label}
                  initial={{opacity: 0, y: 24}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1, duration: 0.5}}
                  className="group relative z-10 flex flex-col items-center text-center px-2"
                >
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-cream border-2 border-accent flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:-translate-y-1">
                      <Icon
                        className="w-8 h-8 text-accent transition-colors duration-300 group-hover:text-text-on-dark"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-accent text-text-on-dark text-xs font-bold flex items-center justify-center ring-4 ring-cream">
                      {stepNumber}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-text-on-light leading-snug">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm text-text-on-light/65 leading-relaxed max-w-[14rem]">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile / tablet: stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {steps.map((step, index) => {
            const Icon = processIcons[index]
            const stepNumber = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={step.label}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.08, duration: 0.5}}
                className="relative flex items-start gap-4 p-5 rounded-xl border border-border-line bg-cream/60 backdrop-blur-sm hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-accent text-text-on-dark text-[0.65rem] font-bold flex items-center justify-center ring-2 ring-cream">
                    {stepNumber}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-text-on-light leading-snug">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-on-light/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
