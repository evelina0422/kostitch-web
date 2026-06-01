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
    <section className="pt-16 sm:pt-24 lg:pt-[36rem] pb-16 sm:pb-24 lg:pb-[32rem] bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <SectionHeader
          title={title}
          align="left"
          titleSizeClassName="text-2xl md:text-3xl lg:text-4xl"
          titleClassName="uppercase tracking-wide"
          className="mb-8 lg:mb-12"
        />

        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-6 items-start">
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4 lg:gap-y-4 lg:gap-x-1 lg:pl-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1, duration: 0.5}}
                className="w-full sm:max-w-none lg:max-w-xs p-4 rounded-lg border border-border-line bg-transparent hover:border-accent hover:shadow-lg transition-all"
              >
                <h3 className="font-sans text-base font-bold uppercase tracking-wide text-text-on-light mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-on-light/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[360px] sm:max-w-[400px] xl:max-w-[420px] flex flex-col gap-8 lg:block lg:min-h-[520px] lg:-mt-44">
            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1, duration: 0.6}}
              className="relative w-full overflow-hidden rounded-3xl shadow-lg lg:absolute lg:w-[85%] lg:-top-10 lg:left-0 lg:z-10"
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
              className="relative w-full overflow-hidden rounded-3xl shadow-lg lg:absolute lg:w-[85%] lg:self-end lg:-bottom-44 lg:-right-8 lg:z-20"
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
