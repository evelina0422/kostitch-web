import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import {Check} from 'lucide-react'
import {aboutContent} from '../data'

export default function About() {
  return (
    <>
      <Seo
        title={aboutContent.seo.title}
        description={aboutContent.seo.description}
      />
      <section className="pt-16 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title={aboutContent.title}
              subtitle={aboutContent.subtitle}
            />
            <div className="prose prose-lg max-w-none mb-12">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-on-light/70 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-beige rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-text-on-light mb-6">Our Values</h3>
              <ul className="space-y-4">
                {aboutContent.values.map((value, index) => (
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

          </div>
        </Container>
      </section>
    </>
  )
}
