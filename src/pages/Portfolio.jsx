import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'

const portfolioItems = [
  {
    category: 'Fashion Apparel',
    description: 'Contemporary women\'s collection',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop'
  },
  {
    category: 'Corporate Uniforms',
    description: 'Professional workwear for enterprise clients',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop'
  },
  {
    category: 'Athleisure',
    description: 'Performance activewear line',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop'
  },
  {
    category: 'Private Label',
    description: 'Custom branded retail collections',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
  },
  {
    category: 'Promotional Apparel',
    description: 'Event and marketing merchandise',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop'
  },
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
                <div className="bg-light aspect-[4/3] overflow-hidden border border-border-line">
                  <img
                    src={item.image}
                    alt={`${item.category} project`}
                    className="w-full h-full object-cover"
                  />
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
