import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import {homeContent} from '../data/content'

export default function Capabilities() {
  return (
    <>
      <Seo
        title="Our Capabilities - Kostitch"
        description="Comprehensive garment manufacturing capabilities including cut & sew, pattern making, sampling, bulk production, screen printing, embroidery, and more."
      />
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title="Our Manufacturing Capabilities"
            subtitle="From design to delivery, we offer end-to-end garment manufacturing services"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeContent.capabilities.items.map((capability, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.05, duration: 0.5}}
                className="bg-white p-8 rounded-lg border border-border-line hover:border-accent hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-text-on-light mb-3">{capability}</h3>
                <p className="text-text-on-light/70">
                  Professional {capability.toLowerCase()} services with attention to detail and quality standards.
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
