import Seo from '../seo/Seo'
import HomeHero from '../components/sections/HomeHero'
import HomeWhyUs from '../components/sections/HomeWhyUs'
import HomeCapabilities from '../components/sections/HomeCapabilities'
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
      <HomeWhyUs />
      <HomeCapabilities />
      <HomeCTA />
    </>
  )
}
