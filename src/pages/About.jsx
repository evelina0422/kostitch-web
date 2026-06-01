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
          className="pointer-events-none select-none absolute inset-y-0 left-1/2 -translate-x-1/2 -z-10 h-full w-full max-w-5xl object-cover object-center"
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

      <section className="bg-[#bd1504] py-2 md:py-3">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-full md:w-2/5 flex justify-center">
              <img
                src="/images/philosophy-sewing.jpg"
                alt="A maker working at a Singer sewing machine"
                className="w-full max-w-[220px] h-auto rounded-2xl object-cover shadow-xl md:-my-4 md:translate-y-6"
              />
            </div>
            <div className="w-full md:w-3/5 text-right">
              <div className="ml-auto max-w-md">
                <h2 className="font-sans text-lg md:text-xl font-bold uppercase tracking-widest text-text-on-light mb-2">
                  {aboutContent.philosophy.title}
                </h2>
                <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide leading-snug text-text-on-light">
                  {aboutContent.philosophy.quote}
                </p>
                <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide text-text-on-light mt-1">
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
            <div className="mb-12 max-w-xs ml-2 md:ml-4 -mt-40">
              <h3 className="text-xl font-bold text-black mb-4">Our Values</h3>
              <ul className="space-y-3">
                {aboutContent.values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1, duration: 0.5}}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 text-accent mr-2.5 flex-shrink-0 mt-0.5" />
                    <span className="text-black text-sm leading-relaxed">{value}</span>
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
