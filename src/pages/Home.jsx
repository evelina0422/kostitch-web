import Seo from '../seo/Seo'
import HomeHero from '../components/sections/HomeHero'
import HomeHeroStats from '../components/sections/HomeHeroStats'
import HomeRepairsTeaser from '../components/sections/HomeRepairsTeaser'
import HomeIntro from '../components/sections/HomeIntro'
import HomeWhyUs from '../components/sections/HomeWhyUs'
import HomeHowItWorks from '../components/sections/HomeHowItWorks'
import HomeCTA from '../components/sections/HomeCTA'
import {homeContent} from '../data'
import {siteConfig} from '../data/siteConfig'

export default function Home() {
  const {title, description, ogImage} = homeContent.seo

  return (
    <>
      <Seo
        title={title}
        description={description}
        ogImage={`${siteConfig.siteUrl}${ogImage}`}
      />
      <HomeHero />
      <HomeHeroStats />
      <HomeRepairsTeaser />
      <HomeIntro />
      <HomeWhyUs />
      <HomeHowItWorks />
      <HomeCTA />
    </>
  )
}
