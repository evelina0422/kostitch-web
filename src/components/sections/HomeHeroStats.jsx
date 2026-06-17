import Container from '../layout/Container'
import {homeContent} from '../../data'

export default function HomeHeroStats() {
  const {items} = homeContent.heroStats

  return (
    <section className="w-full leading-normal">
      <Container>
        <div className="border-y border-border-line py-5 sm:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {items.map((item) => (
              <div key={item.title} className="max-w-[8.5rem] sm:max-w-[9.5rem]">
                <div className="w-8 h-px bg-text-on-light/30 mb-3" aria-hidden="true" />
                <p className="font-sans text-lg sm:text-xl font-bold text-text-on-light mb-1">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-text-on-light/65 leading-relaxed">
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
