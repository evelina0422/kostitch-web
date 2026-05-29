import { Link } from 'react-router-dom'
import { homeContent } from '../../data'
import Button from '../ui/Button'

function HeroContent({ className = '' }) {
  const { headline, ctaLabel } = homeContent.hero

  return (
    <div className={className}>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-text-on-light leading-tight mb-8">
        {headline}
      </h1>
      <Link to="/contact">
        <Button size="lg" className="rounded-full uppercase tracking-widest !text-text-on-light">
          {ctaLabel}
        </Button>
      </Link>
    </div>
  )
}

export default function HomeHero() {
  const { bannerImage, bannerImage2x, headline } = homeContent.hero

  return (
    <section className="relative w-full bg-light">
      <img
        src={bannerImage}
        srcSet={`${bannerImage} 1x, ${bannerImage2x} 2x`}
        sizes="100vw"
        alt={headline}
        width={1024}
        height={633}
        className="w-full h-auto block"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 flex items-start">
        <div className="container-custom w-full pt-28 pb-12 md:pt-32 lg:pb-16">
          <HeroContent className="max-w-[11rem] sm:max-w-xs md:max-w-[46%] lg:max-w-md" />
        </div>
      </div>
    </section>
  )
}
