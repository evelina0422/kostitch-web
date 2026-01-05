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
                With over 15 years of experience in the garment manufacturing industry, Kostitch has established itself as a trusted partner for brands worldwide. We specialize in bringing apparel concepts to life with precision, quality, and efficiency.
              </p>
              <p className="text-text-on-light/70 leading-relaxed mb-6">
                Our state-of-the-art facilities, combined with our team of skilled professionals, enable us to handle projects of all sizes—from small batch sampling to large-scale production runs. We serve fashion brands, corporate clients, retailers, and private label businesses across multiple industries.
              </p>
              <p className="text-text-on-light/70 leading-relaxed">
                At Kostitch, we believe in building lasting partnerships. Our commitment to quality, reliability, and transparent communication ensures that every project meets and exceeds expectations.
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
