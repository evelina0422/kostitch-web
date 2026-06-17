import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {Ruler, PenTool, ShieldCheck, Layers, Wrench, MessageCircle} from 'lucide-react'
import Container from '../layout/Container'
import {homeContent} from '../../data'

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

const iconMap = {
  pattern: Ruler,
  design: PenTool,
  quality: ShieldCheck,
  production: Layers,
  modifications: Wrench,
  communication: MessageCircle,
}

export default function HomeWhyUs() {
  const {eyebrow, title, linkLabel, linkPath, items} = homeContent.whyUs

  return (
    <section className="pt-0 pb-16 sm:pb-24 lg:pb-40 bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 mb-8 lg:mb-12">
          <div>
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-on-light/50 mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-wide uppercase text-text-on-light">
              {title}
            </h2>
          </div>

          {linkLabel && linkPath && (
            <Link
              to={linkPath}
              className="text-sm font-semibold text-text-on-light underline underline-offset-4 decoration-text-on-light/30 hover:decoration-accent hover:text-accent transition-colors"
            >
              {linkLabel}
            </Link>
          )}
        </div>

        <div className="border border-border-line bg-cream/40">
          <div className="-m-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const Icon = iconMap[item.icon]

              return (
                <motion.div
                  key={item.title}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: (index % 3) * 0.08, duration: 0.5}}
                  className="border-t border-l border-border-line p-6 sm:p-8"
                >
                  {Icon && (
                    <Icon
                      className="w-7 h-7 text-text-on-light/80 mb-6"
                      strokeWidth={1.6}
                    />
                  )}
                  <h3 className="font-sans text-lg font-bold text-text-on-light mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-on-light/65 leading-relaxed">
                    {item.description}
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
