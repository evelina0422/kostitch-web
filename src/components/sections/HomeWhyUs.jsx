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
    <section className="pt-[26rem] md:pt-[36rem] pb-[26rem] md:pb-[32rem] bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <SectionHeader
          title={title}
          align="left"
          titleSizeClassName="text-2xl md:text-3xl lg:text-4xl"
          titleClassName="uppercase tracking-wide"
        />

        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-4 lg:gap-6 items-start">
          <div className="order-2 lg:order-1 grid md:grid-cols-2 gap-y-3 gap-x-0 lg:gap-y-4 lg:gap-x-1 lg:pl-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className="w-full max-w-xs p-4 rounded-lg border border-border-line bg-transparent hover:border-accent hover:shadow-lg transition-all"
              >
                <h3 className="font-sans text-base font-bold uppercase tracking-wide text-text-on-light mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-on-light/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[360px] sm:max-w-[400px] xl:max-w-[420px] min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] lg:-mt-44">
            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1, duration: 0.6}}
              className="absolute -top-10 left-0 z-10 w-[85%] overflow-hidden rounded-3xl shadow-lg"
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
              className="absolute -bottom-44 -right-8 z-20 w-[85%] overflow-hidden rounded-3xl shadow-lg"
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
