import SmoothScroll from '@/components/ui/SmoothScroll'
import CustomCursor from '@/components/ui/CustomCursor'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="relative flex min-h-screen flex-col">
        {/* Navbar component would go here */}
        <main className="flex-1 w-full">{children}</main>
        {/* Footer component would go here */}
      </div>
    </SmoothScroll>
  )
}
