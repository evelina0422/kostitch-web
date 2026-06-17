import Seo from '../seo/Seo'
import HomeHero from '../components/sections/HomeHero'
import HomeHeroStats from '../components/sections/HomeHeroStats'
import HomeIntro from '../components/sections/HomeIntro'
import HomeWhyUs from '../components/sections/HomeWhyUs'
import HomeHowItWorks from '../components/sections/HomeHowItWorks'
import HomeCTA from '../components/sections/HomeCTA'
import {homeContent} from '../data'

export default function Home() {
  return (
    <>
      <Seo
        title={homeContent.seo.title}
        description={homeContent.seo.description}
      />
      <HomeHero />
      <HomeHeroStats />
      <HomeIntro />
      <HomeWhyUs />
      <HomeHowItWorks />
      <HomeCTA />
    </>
  )
}
