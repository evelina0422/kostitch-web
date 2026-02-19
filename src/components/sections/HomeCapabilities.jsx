import {motion} from 'framer-motion'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import {capabilitiesContent} from '../../data'

export default function HomeCapabilities() {
  return (
    <section className="py-20 bg-light">
      <Container>
        <SectionHeader title="Our Capabilities" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {capabilitiesContent.map((capability, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{delay: index * 0.05, duration: 0.4}}
              className="bg-beige p-6 rounded-lg text-center border border-border-line hover:border-accent hover:shadow-md transition-all"
            >
              <p className="font-semibold text-text-on-light">{capability.title}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
