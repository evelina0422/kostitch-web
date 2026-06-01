import { Link } from 'react-router-dom'
import { homeContent } from '../../data'
import Button from '../ui/Button'

function HeroContent({ className = '' }) {
  const { headlineLines, ctaLabel } = homeContent.hero

  return (
    <div className={className}>
      <h1 className="flex flex-col text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-text-on-light leading-tight mb-8">
        {headlineLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
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
  const { bannerImage, bannerImage2x, headlineLines } = homeContent.hero

  return (
    <section className="relative w-full bg-cream leading-[0] pt-20 lg:pt-0">
      <div className="relative overflow-hidden">
        <img
          src={bannerImage}
          srcSet={`${bannerImage} 1x, ${bannerImage2x} 2x`}
          sizes="100vw"
          alt={headlineLines.join(' ')}
          width={1024}
          height={528}
          className="w-full h-auto block align-bottom"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 hidden lg:flex items-center">
          <div className="container-custom w-full">
            <HeroContent className="max-w-md xl:max-w-[56%] 2xl:max-w-xl" />
          </div>
        </div>
      </div>

      <div className="lg:hidden container-custom py-8 sm:py-10 leading-normal">
        <HeroContent />
      </div>
    </section>
  )
}
