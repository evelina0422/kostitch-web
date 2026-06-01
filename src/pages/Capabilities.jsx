import { motion } from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { capabilitiesContent } from '../data'

const LEFT_COLUMN_INDICES = [0, 2, 3, 6]
const RIGHT_COLUMN_INDICES = [1, 4, 5, 7, 8]

function ServiceCard({ capability, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="bg-transparent w-full max-w-[240px]"
    >
      {capability.image && (
        <div className="relative aspect-square w-full mb-3">
          <img
            src={capability.image}
            alt={capability.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xs md:text-sm font-bold uppercase tracking-wide text-text-on-light mb-1.5">
        {capability.title}
      </h3>
      <p className="text-xs text-text-on-light/70 leading-relaxed">
        {capability.description}
      </p>
    </motion.article>
  )
}

export default function Capabilities() {
  const { items } = capabilitiesContent
  const leftColumn = LEFT_COLUMN_INDICES.map((i) => ({ ...items[i], originalIndex: i }))
  const rightColumn = RIGHT_COLUMN_INDICES.map((i) => ({ ...items[i], originalIndex: i }))

  return (
    <>
      <Seo
        title={capabilitiesContent.seo.title}
        description={capabilitiesContent.seo.description}
      />
      <section className="pt-28 pb-20">
        <Container>
          <SectionHeader
            title={capabilitiesContent.title}
            subtitle={capabilitiesContent.subtitle}
            align="left"
            titleClassName="max-w-sm"
            titleSizeClassName="text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
            subtitleRedBar
          />
          <div className="flex flex-col md:flex-row gap-x-4 md:gap-x-6 w-fit max-w-full">
            <div className="flex flex-col gap-12 md:gap-16">
              {leftColumn.map((capability) => (
                <ServiceCard
                  key={capability.originalIndex}
                  capability={capability}
                  index={capability.originalIndex}
                />
              ))}
            </div>
            <div className="flex flex-col gap-12 md:gap-16 md:pt-64 lg:pt-72">
              {rightColumn.map((capability) => (
                <ServiceCard
                  key={capability.originalIndex}
                  capability={capability}
                  index={capability.originalIndex}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
