import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* Other sections like FeaturedWork, Sectors, CTABanner will go below */}
      <div className="h-screen bg-brand-white dark:bg-brand-black flex items-center justify-center">
        <p className="text-brand-muted">Featured Work Placeholder</p>
      </div>
    </div>
  )
}
