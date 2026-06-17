import { Link } from 'react-router-dom'
import { homeContent } from '../../data'
import Button from '../ui/Button'

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

function getHeadlineText(line) {
  return typeof line === 'string' ? line : line.text
}

function HeroContent({ className = '' }) {
  const {headlineLines, subtext, ctaLabel, secondaryCtaLabel, secondaryCtaPath} = homeContent.hero

  return (
    <div className={className}>
      <h1 className="flex flex-col text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-text-on-light leading-tight mb-4 sm:mb-6">
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
      <p className="text-sm sm:text-base text-text-on-light/80 leading-relaxed mb-6 sm:mb-8 max-w-md">
        {subtext}
      </p>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
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
    <section className="relative w-full max-lg:leading-normal leading-[0] max-lg:pt-20 lg:pt-0 lg:bg-cream">
      <div className="relative z-10 lg:hidden bg-cream bg-repeat" style={paperBackground}>
        <div className="container-custom pt-6 pb-1 sm:pt-8 sm:pb-2">
          <HeroContent className="[&_h1]:mb-3 sm:[&_h1]:mb-4 [&_p]:mb-4 sm:[&_p]:mb-5" />
        </div>
      </div>

      <div className="relative z-0 max-lg:container-custom lg:hidden -mt-16 sm:-mt-14">
        <div className="relative w-full overflow-hidden aspect-[5/6] sm:aspect-[4/5]">
          <img
            src={bannerImage}
            srcSet={`${bannerImage} 1x, ${bannerImage2x} 2x`}
            sizes="100vw"
            alt={headlineLines.map(getHeadlineText).join(' ')}
            width={1024}
            height={528}
            className="absolute inset-0 h-full w-full object-cover object-[80%_56%]"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="relative hidden lg:block overflow-hidden">
        <img
          src={bannerImage}
          srcSet={`${bannerImage} 1x, ${bannerImage2x} 2x`}
          sizes="100vw"
          alt={headlineLines.map(getHeadlineText).join(' ')}
          width={1024}
          height={528}
          className="w-full h-auto block align-bottom"
          decoding="async"
        />
        <div className="absolute inset-0 flex items-end pb-16 xl:pb-20">
          <div className="container-custom w-full leading-normal">
            <HeroContent className="max-w-md xl:max-w-[56%] 2xl:max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
