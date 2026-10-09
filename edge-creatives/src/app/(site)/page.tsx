import Hero from '@/components/sections/Hero'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Sectors from '@/components/sections/Sectors'
import CTABanner from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedWork />
      <Sectors />
      <CTABanner />
    </div>
  )
}
