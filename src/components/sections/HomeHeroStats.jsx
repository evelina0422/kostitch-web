import Container from '../layout/Container'
import {homeContent} from '../../data'

export default function HomeHeroStats() {
  const {items} = homeContent.heroStats

  return (
    <section className="w-full leading-normal max-lg:mt-8 sm:max-lg:mt-12">
      <Container>
        <div className="border-y border-border-line py-2 sm:py-4 lg:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
            {items.map((item) => (
              <div key={item.title} className="max-w-[10.5rem] sm:max-w-[13rem] lg:max-w-[15.5rem]">
                <div className="w-5 lg:w-8 h-px bg-text-on-light/30 mb-1.5 lg:mb-3" aria-hidden="true" />
                <p className="font-sans text-sm sm:text-base lg:text-xl font-bold text-text-on-light mb-0.5 lg:mb-1">
                  {item.title}
                </p>
                <p className="text-[10px] sm:text-[11px] lg:text-sm text-text-on-light/65 leading-snug lg:leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
