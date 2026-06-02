import Seo from '../seo/Seo'
import HomeHero from '../components/sections/HomeHero'
import HomeShowcase from '../components/sections/HomeShowcase'
import HomeProcess from '../components/sections/HomeProcess'
import HomeWhyUs from '../components/sections/HomeWhyUs'
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
      <HomeShowcase />
      <HomeProcess />
      <HomeWhyUs />
      <HomeCTA />
    </>
  )
}
