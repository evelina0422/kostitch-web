import Seo from '../seo/Seo'
import HomeHero from '../components/sections/HomeHero'
import HomeWhyUs from '../components/sections/HomeWhyUs'
import HomeCapabilities from '../components/sections/HomeCapabilities'
import HomeProcess from '../components/sections/HomeProcess'
import HomeCTA from '../components/sections/HomeCTA'

export default function Home() {
  return (
    <>
      <Seo
        title="Kostitch - Premium Garment Manufacturing for Global Brands"
        description="Professional garment manufacturing services. From concept to delivery, we bring your apparel visions to life with precision, quality, and reliability."
      />
      <HomeHero />
      <HomeWhyUs />
      <HomeCapabilities />
      <HomeProcess />
      <HomeCTA />
    </>
  )
}
