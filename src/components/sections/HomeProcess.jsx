import {motion} from 'framer-motion'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import {homeContent} from '../../data/content'

export default function HomeProcess() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader title={homeContent.process.title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeContent.process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1, duration: 0.5}}
              className="relative"
            >
              <div className="bg-light rounded-lg p-6 h-full border-l-4 border-accent">
                <div className="text-accent font-bold text-sm mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-text-on-light mb-3">{step.title}</h3>
                <p className="text-text-on-light/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
