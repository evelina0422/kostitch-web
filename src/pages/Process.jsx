import {motion} from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import {homeContent} from '../data/content'

export default function Process() {
  return (
    <>
      <Seo
        title="Our Manufacturing Process - Kostitch"
        description="Learn about our streamlined manufacturing process from inquiry to delivery, ensuring quality and efficiency at every step."
      />
      <section className="pt-32 pb-20">
        <Container>
          <SectionHeader
            title="Our Manufacturing Process"
            subtitle="A streamlined approach from concept to delivery"
          />
          <div className="space-y-8">
            {homeContent.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: index % 2 === 0 ? -20 : 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-gray-400">Process Step Visual</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
