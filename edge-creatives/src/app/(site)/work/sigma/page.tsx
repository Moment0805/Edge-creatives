import Image from 'next/image'
import WorkSection from '@/components/sections/WorkSection'
import WorkSectionGrid from '@/components/sections/WorkSectionGrid'

export const metadata = {
  title: "Sigma Chiefs' League — The Edge Studio",
  description: "Print, Social Media and Merchandise Design for Sigma Chiefs' League — a football league community identity built for competition and culture.",
}

export default function SigmaPage() {
  return (
    <main className="w-full flex flex-col gap-[42px] pb-[42px] bg-white">

      {/* ── 1a. Full-width hero image ── */}
      <div className="w-full pt-[72px]">
        <Image
          src="/work 2.svg"
          alt="Sigma Chiefs' League — hero"
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
            Sigma Chief&apos;s<br />League
          </h1>
        </div>

        {/* Right — body + metadata */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-[#0A0A0A]/70">
            <p>
              Sigma Chief&apos;s League is a football league community built around competition, culture, and the kind of pride that makes you show up every weekend. The ask was to build a visual identity that could hold all of that — one that felt serious enough to command respect, yet alive enough to move on social media and mean something to the people playing.
            </p>
            <p>
              The design questions that shaped the work: How do you build a sports brand that doesn&apos;t feel borrowed from somewhere else? How do you create something that travels from a jersey to an Instagram post to an email without losing its edge? What does a league identity look like when it&apos;s built for the people in it, not just the people watching?
            </p>
            <p>
              The answer came from leaning into authority and belonging at once. The mark needed to feel like something you&apos;d earn the right to wear. Heraldic in structure, contemporary in execution — a crest that carries the weight of competition without being stiff about it.
            </p>
            <p>
              The visual language extended across the full system: social media templates built for momentum and matchday energy, print assets that hold up at any size, and an email design system that communicates with the same conviction as the brand itself. Nothing was decorative. Every element was asked to earn its place. The result is an identity that knows what it is — and so does everyone who sees it.
            </p>
          </div>

          {/* Project metadata */}
          <div className="border-t border-[#0A0A0A]/10 pt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Project Type</p>
              <p className="text-[13px] text-[#0A0A0A]/60">Print, Social media and Merchandise Design</p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Date</p>
              <p className="text-[13px] text-[#0A0A0A]/60">October 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Sigma Chief logo (crest) ── */}
      <WorkSection src="/sigma chief logo.svg" alt="Sigma Chiefs' League crest logo" contained />

      {/* ── 3. Sigma League logo ── */}
      <WorkSection src="/sigma league logo.svg" alt="Sigma Chiefs' League circular badge" contained />

      {/* ── 4. Color palette ── */}
      <WorkSection src="/sigma color combo.svg" alt="Sigma Chiefs' League brand color palette" />

      {/* ── 5. Game On — full width ── */}
      <WorkSection src="/sigma game on.svg" alt="Sigma Chiefs' League — Game On poster" />

      {/* ── 6. Matchday flags ── */}
      <WorkSection src="/sigma matchday flag.svg" alt="Sigma Chiefs' League matchday flags" />

      {/* ── 7. Sack bag merchandise — full width, no bg ── */}
      <WorkSection src="/sigma sackbag.svg" alt="Sigma Chiefs' League drawstring sack bag merch" />

      {/* ── 8. Keyholders ── */}
      <WorkSection src="/sigma keyholder.svg" alt="Sigma Chiefs' League keyholder merchandise" />

      {/* ── 9. Purple vest / jersey ── */}
      <WorkSection src="/sigma purple vest.svg" alt="Sigma Chiefs' League purple jersey" />

      {/* ── 10. 2-col: Gametime artboard + Game On artboard ── */}
      <WorkSectionGrid
        leftSrc="/sigma gametime Artboard.svg"
        leftAlt="Sigma — It's Game Time artboard"
        rightSrc="/sigma gameon artboard.svg"
        rightAlt="Sigma — Game On artboard"
        bg="bg-white"
      />

      {/* ── 11. 2-col: Purple vest + Fixtures flyer ── */}
      <WorkSectionGrid
        leftSrc="/sigma purple vest.svg"
        leftAlt="Sigma Chiefs' League purple vest"
        rightSrc="/sigma fixtures flyer.svg"
        rightAlt="Sigma Chiefs' League fixtures flyer"
        bg="bg-white"
      />

    </main>
  )
}
