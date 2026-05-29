import {motion} from 'framer-motion'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import {homeContent} from '../../data'

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

export default function HomeWhyUs() {
  const {title, items, images} = homeContent.whyUs

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <SectionHeader title={title} titleClassName="uppercase tracking-wide" />

        <div className="grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1 grid md:grid-cols-2 gap-6 lg:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className="p-6 rounded-lg border border-border-line bg-transparent hover:border-accent hover:shadow-lg transition-all"
              >
                <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-text-on-light mb-3">
                  {item.title}
                </h3>
                <p className="text-text-on-light/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[280px] sm:max-w-[300px] xl:max-w-[320px] min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] lg:sticky lg:top-28">
            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1, duration: 0.6}}
              className="absolute top-0 left-0 z-10 w-[78%] overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                width={819}
                height={1024}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.25, duration: 0.6}}
              className="absolute bottom-0 right-0 z-20 w-[78%] overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                width={819}
                height={1024}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
