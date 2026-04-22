import Image from 'next/image'
import WorkSection from '@/components/sections/WorkSection'
import WorkSectionGrid from '@/components/sections/WorkSectionGrid'

export const metadata = {
  title: 'Maradan — The Edge Studio',
  description: 'Brand Identity and Packaging Design for Maradan — a premium skincare brand built on warmth, efficacy, and trust.',
}

export default function MaradanPage() {
  return (
    <main className="w-full flex flex-col gap-[42px] pb-[42px] bg-white">

      {/* ── 1a. Full-width hero image ── */}
      <div className="w-full pt-[72px]">
        <Image
          src="/work 4.svg"
          alt="Maradan — hero"
          width={1600}
          height={900}
          sizes="100vw"
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* ── 1b. Text intro — 2 columns ── */}
      <section className="w-full bg-white px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left — heading */}
        <div>
          <h1
            className="text-[#0A0A0A] leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400 }}
          >
            MARADAN
          </h1>
        </div>

        {/* Right — body + metadata */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-[#0A0A0A]/70">
            <p>
              Maradan is a premium skincare brand built on the belief that effective skincare should feel as good as it works. The ask was to build a brand identity and packaging system that communicated luxury, efficacy, and trust — without relying on clinical coldness or generic beauty tropes.
            </p>
            <p>
              The design questions: How do you make a skincare brand feel premium without feeling exclusive? How do you create visual harmony across a product range that&apos;s diverse but coherent? What does trust look like in a category where consumers are increasingly sceptical?
            </p>
            <p>
              The answer was warmth and restraint in equal measure — a typographic identity rooted in elegant serifs balanced by clean, breathing layouts. The packaging system gave each product its own voice while keeping the family unmistakably unified.
            </p>
            <p>
              The result is an identity that earns confidence at every touchpoint: on shelf, on skin, and on screen.
            </p>
          </div>

          {/* Project metadata */}
          <div className="border-t border-[#0A0A0A]/10 pt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Project Type</p>
              <p className="text-[13px] text-[#0A0A0A]/60">Brand Identity, Packaging Design</p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Date</p>
              <p className="text-[13px] text-[#0A0A0A]/60">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Typography specimen ── */}
      <WorkSection src="/maradan typography.svg" alt="Maradan brand typography — Rowney Bold in harmony with Dresan" />

      {/* ── 3. Oil drop on hand ── */}
      <WorkSection src="/maradan oil drop on hand.svg" alt="Maradan oil drop on hand" />

      {/* ── 4. Logo layout / wordmark ── */}
      <WorkSection src="/maradan logo layout.svg" alt="Maradan logo wordmark layout" />

      {/* ── 5. Full product lineup ── */}
      <WorkSection src="/maradan products 1.svg" alt="Maradan full product range" />

      {/* ── 6. AB + Card (2-col grid) ── */}
      <WorkSectionGrid
        leftSrc="/maradan AB.svg"
        leftAlt="Maradan AB monogram"
        rightSrc="/maradan card.svg"
        rightAlt="Maradan branded card mockup"
        bg="bg-white"
      />

      {/* ── 7. Natural materials / texture ── */}
      <WorkSection src="/maradan picture design.svg" alt="Maradan natural materials design" />

      {/* ── 8. Half product mockup ── */}
      <WorkSection src="/maradan half product.svg" alt="Maradan product close-up mockup" />

      {/* ── 9. Make your skin glow ── */}
      <WorkSection src="/maradan make your skin glow.svg" alt="Maradan — Make Your Skin Glow" />

      {/* ── 10. Repair hydrate glow ── */}
      <WorkSection src="/maradan repair hydrate glow.svg" alt="Maradan — Repair, Hydrate, Glow" />

      {/* ── 11. Color combo / palette ── */}
      <WorkSection src="/maradan color combo.svg" alt="Maradan brand color palette" />

      {/* ── 12. Phone design / app UI ── */}
      <WorkSection src="/maradan phone design.svg" alt="Maradan digital UI design" />

      {/* ── 13. Anti-aging product ── */}
      <WorkSection src="/maradan anti aging.svg" alt="Maradan anti-aging product" />

      {/* ── 14. Product 2 ── */}
      <WorkSection src="/maradan product 2.svg" alt="Maradan product variant 2" />

      {/* ── 15. Product 3 ── */}
      <WorkSection src="/maradan product 3.svg" alt="Maradan product variant 3" />

      {/* ── 16. Product 4 ── */}
      <WorkSection src="/maradan product 4.svg" alt="Maradan product variant 4" />

      {/* ── 17. Banner ── */}
      <WorkSection src="/maradan banner.svg" alt="Maradan brand banner" />

      {/* ── 18. Views ── */}
      <WorkSection src="/maradan views.svg" alt="Maradan brand views" />

      {/* ── 19. Tweets / social ── */}
      <WorkSection src="/maradan tweets.svg" alt="Maradan social media tweet mockups" />

    </main>
  )
}
