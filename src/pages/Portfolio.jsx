import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'

const portfolioItems = [
  {category: 'Fashion Apparel', description: 'Contemporary women\'s collection'},
  {category: 'Corporate Uniforms', description: 'Professional workwear for enterprise clients'},
  {category: 'Athleisure', description: 'Performance activewear line'},
  {category: 'Children\'s Wear', description: 'Safe and comfortable kids\' clothing'},
  {category: 'Private Label', description: 'Custom branded retail collections'},
  {category: 'Promotional Apparel', description: 'Event and marketing merchandise'},
]

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Our Portfolio - Kostitch"
        description="Explore our portfolio of successful garment manufacturing projects across fashion, uniforms, athleisure, and more."
      />
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title="Our Portfolio"
            subtitle="Showcasing quality craftsmanship across diverse projects"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className="bg-beige rounded-lg overflow-hidden border border-border-line hover:shadow-lg transition-all"
              >
                <div className="bg-light aspect-[4/3] flex items-center justify-center border border-border-line">
                  <span className="text-text-on-light/50">Project Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-on-light mb-2">{item.category}</h3>
                  <p className="text-text-on-light/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
