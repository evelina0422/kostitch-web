import {motion} from 'framer-motion'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import {homeContent} from '../../data/content'

export default function HomeWhyUs() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader title={homeContent.whyUs.title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeContent.whyUs.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1, duration: 0.5}}
              className="p-6 rounded-lg border border-border-line hover:border-accent hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-text-on-light mb-3">{item.title}</h3>
              <p className="text-text-on-light/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
