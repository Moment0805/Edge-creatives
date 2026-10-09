import SmoothScroll from '@/components/ui/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
