import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { portfolioContent } from '../data'

export default function Portfolio() {
  return (
    <>
      <Seo
        title={portfolioContent.seo.title}
        description={portfolioContent.seo.description}
      />
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title={portfolioContent.title}
            subtitle={portfolioContent.subtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioContent.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className="bg-beige overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="bg-light aspect-[4/3] overflow-hidden">
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
