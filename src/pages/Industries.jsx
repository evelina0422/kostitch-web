import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import {industriesContent} from '../data/content'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve - Kostitch"
        description="We serve fashion brands, corporate uniforms, athleisure, children's wear, private label, and promotional apparel industries."
      />
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title="Industries We Serve"
            subtitle="Expert manufacturing solutions across diverse apparel markets"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesContent.map((industry, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className="bg-beige p-8 rounded-lg border border-border-line hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="bg-light rounded-lg aspect-video mb-4 flex items-center justify-center border border-border-line">
                  <span className="text-text-on-light/50 text-sm">Industry Image</span>
                </div>
                <h3 className="text-2xl font-bold text-text-on-light mb-3">{industry.title}</h3>
                <p className="text-text-on-light/70 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
