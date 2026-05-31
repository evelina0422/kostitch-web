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
      <div className="relative isolate overflow-hidden bg-cream">
        <img
          src="/images/about-sewing-machine.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-y-0 left-1/2 -translate-x-1/2 -z-10 h-full w-full max-w-6xl object-cover object-center"
        />
      <section className="pt-[11.25rem] pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title={aboutContent.title}
              subtitle={aboutContent.subtitle}
              titleClassName="!text-white"
              subtitleClassName="!text-white/80"
            />
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-40 mb-32">
              <div className="w-full md:w-1/3">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Kameron Tate at the Kostitch workshop"
                  className="w-full max-w-[250px] h-auto object-cover"
                />
                <h3 className="font-sans text-base md:text-lg font-bold uppercase tracking-wide text-white mt-6 mb-3 max-w-[250px]">
                  {aboutContent.portraitName}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-[250px]">
                  {aboutContent.portraitBio}
                </p>
              </div>
              <div className="w-full md:w-2/3 text-right self-start">
                <h2 className="font-sans text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-white mb-4 max-w-[26ch] ml-auto whitespace-pre-line">
                  {aboutContent.headline}
                </h2>
                <p className="text-base text-white/80 leading-relaxed max-w-[26ch] ml-auto">
                  {aboutContent.intro}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-12">
              <div className="prose prose-lg max-w-sm text-left">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-white/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col items-end text-right ml-auto md:mt-64">
                <img
                  src="/images/about-portrait-2.jpg"
                  alt="Kostitch co-founder Evelina Rudenko"
                  className="w-full max-w-[250px] h-auto object-cover"
                />
                <h3 className="font-sans text-base md:text-lg font-bold uppercase tracking-wide text-white mt-6 mb-3 max-w-[250px]">
                  {aboutContent.portraitName2}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-[250px]">
                  {aboutContent.portraitBio2}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#bd1504] py-8 md:py-12">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="w-full md:w-2/5 flex justify-center">
              <img
                src="/images/philosophy-sewing.jpg"
                alt="A maker working at a Singer sewing machine"
                className="w-full max-w-[320px] h-auto rounded-2xl object-cover shadow-xl md:-my-16 md:translate-y-20"
              />
            </div>
            <div className="w-full md:w-3/5 text-right">
              <div className="ml-auto max-w-md">
                <h2 className="font-sans text-xl md:text-2xl font-bold uppercase tracking-widest text-text-on-light mb-6">
                  {aboutContent.philosophy.title}
                </h2>
                <p className="font-sans text-sm md:text-base font-medium uppercase tracking-wide leading-relaxed text-text-on-light">
                  {aboutContent.philosophy.quote}
                </p>
                <p className="font-sans text-sm md:text-base font-medium uppercase tracking-wide text-text-on-light mt-2">
                  {aboutContent.philosophy.author}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-80 pb-80">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 max-w-sm md:-ml-16 lg:-ml-24 -mt-16">
              <h3 className="text-2xl font-bold text-black mb-6">Our Values</h3>
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
                    <span className="text-black text-base">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>
      </div>
    </>
  )
}
