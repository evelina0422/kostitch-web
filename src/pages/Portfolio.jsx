import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import Button from '../components/ui/Button'
import { portfolioContent } from '../data'

export default function Portfolio() {
  const {showComingSoon} = portfolioContent

  return (
    <>
      <Seo
        title={portfolioContent.seo.title}
        description={
          showComingSoon
            ? portfolioContent.seo.comingSoonDescription
            : portfolioContent.seo.description
        }
      />
      <section className="w-full pb-20 pt-44 md:pt-52 lg:pt-56 bg-cream">
        <div className="relative w-full overflow-hidden">
          <img
            src={portfolioContent.heroImage}
            alt=""
            aria-hidden="true"
            className="w-full min-h-[140px] h-[20vw] max-h-[260px] object-cover object-center block"
          />
          <h1 className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-0 px-4 sm:px-6 md:px-8 pb-0 font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {portfolioContent.title}
          </h1>
        </div>
        <Container>
          <div className="py-12 md:py-16">
            {showComingSoon ? (
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="max-w-2xl mx-auto px-6 sm:px-8 text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                  Coming Soon
                </p>
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-on-light mb-6">
                  Portfolio launching soon
                </h2>
                <p className="text-lg text-text-on-light/70 leading-relaxed mb-10">
                  {portfolioContent.comingSoonMessage}
                </p>
                <Link to="/contact">
                  <Button>Request a Quote</Button>
                </Link>
              </motion.div>
            ) : (
              <>
                <div className="text-right mb-16 md:mb-20">
                  <p className="text-2xl md:text-3xl font-bold uppercase text-text-on-light/80 max-w-sm ml-auto mr-6 sm:mr-8 md:mr-10">
                    {portfolioContent.subtitle}
                  </p>
                </div>
                <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioContent.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.1, duration: 0.5}}
                        className="bg-cream overflow-hidden hover:shadow-lg transition-all"
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
                </div>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
