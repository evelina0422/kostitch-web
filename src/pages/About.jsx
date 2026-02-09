import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import {Check} from 'lucide-react'

const values = [
  'Quality First: Every garment meets our rigorous standards',
  'Reliability: On-time delivery, every time',
  'Transparency: Clear communication throughout the process',
  'Innovation: Continuous improvement in processes and techniques',
  'Partnership: Building long-term relationships with our clients',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us - Kostitch"
        description="Learn about Kostitch, a leading garment manufacturing company with over 15 years of experience serving global brands."
      />
      <section className="pt-16 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="About Kostitch"
              subtitle="Your trusted partner in garment manufacturing"
            />
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-on-light/70 leading-relaxed mb-6">
                With over 5 years of experience in garment manufacturing, Kostitch supports businesses across the United States with dependable, production-driven apparel solutions. We specialize in turning designs into durable, high-quality garments built to perform in real-world environments.
              </p>
              <p className="text-text-on-light/70 leading-relaxed mb-6">
                Our production capabilities are designed to handle everything from small sampling runs to high-volume manufacturing. Backed by skilled technicians and streamlined processes, we deliver consistent results while meeting strict quality, timeline, and compliance requirements.
              </p>
              <p className="text-text-on-light/70 leading-relaxed mb-6">
                We work with a broad range of industries, including fashion brands, corporate and workforce uniforms, athleisure, janitorial and maintenance apparel, private label programs, promotional products, healthcare and medical wear, construction and industrial workwear, hospitality and food services, education and institutions, and security and law enforcement.
              </p>
              <p className="text-text-on-light/70 leading-relaxed">
                At Kostitch, we operate as a manufacturing partner, not just a vendor. We prioritize clear communication, repeatable quality, and on-time delivery to support long-term, scalable partnerships.
              </p>
            </div>

            <div className="bg-beige rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-text-on-light mb-6">Our Values</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1, duration: 0.5}}
                    className="flex items-start"
                  >
                    <Check className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-text-on-light text-lg">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-text-on-light/70">Years of Experience</div>
              </motion.div>
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.1}}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-text-on-light/70">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.2}}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-text-on-light/70">Global Clients</div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
