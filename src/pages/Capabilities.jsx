import { motion } from 'framer-motion'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
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
  const { items, title, subtitle, heroImage, seo } = capabilitiesContent
  const leftColumn = LEFT_COLUMN_INDICES.map((i) => ({ ...items[i], originalIndex: i }))
  const rightColumn = RIGHT_COLUMN_INDICES.map((i) => ({ ...items[i], originalIndex: i }))

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
      />
      <section className="pb-20">
        <div className="pt-[5.5rem] lg:pt-[7.75rem] pb-8 md:pb-10">
          <div className="relative">
            <div className="relative w-full overflow-hidden aspect-[2.35/1] min-h-[18rem] sm:min-h-[22rem] xl:min-h-[28rem] 2xl:min-h-[34rem]">
              <img
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover object-[center_42%]"
              />
            </div>

            <div className="absolute inset-x-0 top-0 -bottom-6 md:-bottom-8">
              <Container className="relative h-full pt-6 md:pt-10">
                <h1 className="hidden md:block relative z-10 font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-wide text-cream max-w-sm xl:max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                  {title}
                </h1>

                <div className="md:hidden absolute top-6 right-4 sm:right-6 w-[13.5rem] sm:w-[16rem]">
                  <div className="bg-[#bd1504] px-4 py-5 sm:px-5 sm:py-6">
                    <h1 className="font-sans text-2xl sm:text-3xl font-bold leading-[1.1] tracking-wide text-right text-black">
                      {title}
                    </h1>
                  </div>
                  <p className="mt-6 text-right text-xs sm:text-sm font-bold uppercase text-cream leading-relaxed tracking-wide">
                    {subtitle}
                  </p>
                </div>

                <div className="hidden md:block absolute top-6 md:top-10 bottom-0 right-4 sm:right-6 md:right-10 w-[19rem]">
                  <div
                    className="absolute inset-y-0 right-0 w-[11rem] bg-[#bd1504]"
                    aria-hidden="true"
                  />
                  <p className="absolute bottom-8 md:bottom-10 right-0 w-full z-10 pr-6 md:pr-8 text-right font-bold uppercase text-black text-xl md:text-2xl leading-[1.1] tracking-wide">
                    {subtitle}
                  </p>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <Container>
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
