import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {ArrowRight, Check} from 'lucide-react'
import Button from '../ui/Button'
import Container from '../layout/Container'
import {homeContent} from '../../data/content'

export default function HomeHero() {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-light to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-light mb-6 leading-tight">
              {homeContent.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-text-on-light/70 mb-8 leading-relaxed">
              {homeContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="inline-block ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Book a Call
                </Button>
              </Link>
            </div>
            <ul className="space-y-3">
              {homeContent.hero.bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: 0.3 + index * 0.1, duration: 0.5}}
                  className="flex items-center text-text-on-light"
                >
                  <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.2}}
            className="relative"
          >
            <div className="bg-border-line rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="text-text-on-light/50">Factory Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
