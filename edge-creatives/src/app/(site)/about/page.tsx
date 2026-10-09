import AboutHero from '@/components/sections/AboutHero'
import ApproachServices from '@/components/sections/ApproachServices'

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AboutHero />
      <ApproachServices />
    </div>
  )
}
