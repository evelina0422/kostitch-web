import { homeContent } from '../../data'

export default function HomeHero() {
  return (
    <section className="w-full">
      <h1 className="sr-only">{homeContent.hero.headline}</h1>
      <img
        src={homeContent.hero.bannerImage}
        alt={homeContent.hero.headline}
        className="w-full h-auto block"
        fetchPriority="high"
      />
    </section>
  )
}
