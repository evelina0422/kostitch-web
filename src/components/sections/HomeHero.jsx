import { Link } from 'react-router-dom'
import { homeContent } from '../../data'
import Button from '../ui/Button'

function HeroContent({ className = '' }) {
  const { headline, ctaLabel } = homeContent.hero

  return (
    <div className={className}>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-on-light leading-tight mb-8">
        {headline}
      </h1>
      <Link to="/contact">
        <Button size="lg">{ctaLabel}</Button>
      </Link>
    </div>
  )
}

export default function HomeHero() {
  const { bannerImage, headline } = homeContent.hero

  return (
    <section className="w-full bg-light">
      <div className="container-custom pt-24 pb-8 md:hidden">
        <HeroContent />
      </div>

      <div className="relative w-full flex justify-end">
        <img
          src={bannerImage}
          alt={headline}
          width={1024}
          height={527}
          className="w-full max-w-[1024px] h-auto block"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 hidden md:flex items-center">
          <div className="container-custom w-full pb-12 lg:pb-16">
            <HeroContent className="max-w-xl lg:max-w-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
