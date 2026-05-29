import {motion} from 'framer-motion'
import {
  MessageCircle,
  PenTool,
  Scissors,
  CheckCircle,
  Factory,
  PackageCheck,
  ChevronRight,
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
  const {title, steps} = homeContent.process

  return (
    <section className="pt-0 pb-14 md:pb-16 bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <SectionHeader title={title} titleClassName="uppercase tracking-wide" className="mb-8 md:mb-10" />

        <div className="hidden xl:grid xl:grid-cols-[repeat(11,minmax(0,1fr))] xl:items-start xl:gap-0">
          {steps.map((step, index) => {
            const Icon = processIcons[index]
            const stepNumber = String(index + 1).padStart(2, '0')

            return (
              <div key={step} className="contents">
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.08, duration: 0.5}}
                  className="col-span-2 flex flex-col items-center text-center px-2"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-text-on-dark text-xs font-bold flex items-center justify-center">
                      {stepNumber}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-text-on-light leading-snug max-w-[9.5rem]">
                    {step}
                  </h3>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="col-span-1 flex items-center justify-center pt-8">
                    <ChevronRight className="w-5 h-5 text-accent/60" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:hidden">
          {steps.map((step, index) => {
            const Icon = processIcons[index]
            const stepNumber = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={step}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.08, duration: 0.5}}
                className="relative flex flex-col items-center text-center p-6 rounded-lg border border-border-line bg-transparent hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-text-on-dark text-xs font-bold flex items-center justify-center">
                    {stepNumber}
                  </span>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide text-text-on-light leading-snug">
                  {step}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
