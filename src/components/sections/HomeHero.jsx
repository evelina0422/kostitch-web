import { Link } from 'react-router-dom'
import { homeContent } from '../../data'
import Button from '../ui/Button'

function getHeadlineText(line) {
  return typeof line === 'string' ? line : line.text
}

function HeroContent({ className = '' }) {
  const {headlineLines, subtext, ctaLabel, secondaryCtaLabel, secondaryCtaPath} = homeContent.hero

  return (
    <div className={className}>
      <h1 className="flex flex-col text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-text-on-light leading-tight mb-6">
        {headlineLines.map((line) => {
          const text = getHeadlineText(line)
          const italic = typeof line === 'object' && line.italic

          return (
            <span key={text} className={`block ${italic ? 'italic' : ''}`}>
              {text}
            </span>
          )
        })}
      </h1>
      <p className="text-sm sm:text-base text-text-on-light/80 leading-relaxed mb-8 max-w-md">
        {subtext}
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <Link to="/contact">
          <Button size="sm" className="rounded-full uppercase tracking-widest !text-text-on-light">
            {ctaLabel}
          </Button>
        </Link>
        <Link
          to={secondaryCtaPath}
          className="text-sm text-text-on-light underline underline-offset-[6px] decoration-text-on-light hover:text-text-on-light/80 transition-colors"
        >
          {secondaryCtaLabel} →
        </Link>
      </div>
    </div>
  )
}

export default function HomeHero() {
  const { bannerImage, bannerImage2x, headlineLines } = homeContent.hero

  return (
    <section className="relative w-full leading-[0] max-lg:pt-20 lg:pt-0 lg:bg-cream">
      <div className="relative overflow-hidden">
        <img
          src={bannerImage}
          srcSet={`${bannerImage} 1x, ${bannerImage2x} 2x`}
          sizes="100vw"
          alt={headlineLines.map(getHeadlineText).join(' ')}
          width={1024}
          height={528}
          className="w-full h-auto block align-bottom"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 hidden lg:flex items-end pb-16 xl:pb-20">
          <div className="container-custom w-full">
            <HeroContent className="max-w-md xl:max-w-[56%] 2xl:max-w-xl" />
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full leading-normal">
        <div className="container-custom py-8 sm:py-10">
          <HeroContent />
        </div>
      </div>
    </section>
  )
}
