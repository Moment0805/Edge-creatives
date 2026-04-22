import Image from 'next/image'
import WorkSection from '@/components/sections/WorkSection'
import WorkSectionGrid from '@/components/sections/WorkSectionGrid'

export const metadata = {
  title: 'Forlife Foundation — The Edge Studio',
  description: 'Brand Identity, Motion, Iconography, and Merchandising for Forlife Foundation — a healthcare NGO building healthier futures.',
}

export default function ForlifePage() {
  return (
    <main className="w-full flex flex-col gap-[42px] pb-[42px] bg-white">

      {/* ── 1a. Full-width hero image ── */}
      <div className="w-full pt-[72px]">
        <Image
          src="/work 1.svg"
          alt="Forlife Foundation — hero"
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
            Healthier Futures,<br />For Life.
          </h1>
        </div>

        {/* Right — body + metadata */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-[#0A0A0A]/70">
            <p>
              For Life wants everyone, regardless of where they live or what they earn, to have access to the healthcare, nutrition, and clean water that makes life worth living. Through programs rooted in communities — from maternal care to clean water systems, from nutrition support to emergency relief — For Life doesn&apos;t just respond to need. It builds toward a future where that need no longer exists. For life.
            </p>
            <p>
              Considering that access, dignity, and genuine community transformation are at the heart of everything For Life does, the main design questions were: how do we visually translate a mission this enduring into an identity that truly carries it? How do we build something that communicates — to a struggling mother, a rural community, a global partner — that this support is not temporary? That it is for life?
            </p>
            <p>
              The catchphrase became the soul of the identity. For life is not decoration — it is a design principle. It informed every decision: the warmth in the color palette, the openness of the typography, the steadiness of the visual system across every touchpoint. An identity built to feel like a promise kept, not just a promise made.
            </p>
            <p>
              The website carried this further. Every section from the flagship programs to the donation flow was designed to move people from awareness to belief to action. The experience needed to feel as reliable as the work itself. Clear, human, and built to last.
            </p>
            <p>
              The new identity and digital presence embody For Life&apos;s commitment to helping families not just survive, but thrive today and always. For life.
            </p>
          </div>

          {/* Project metadata */}
          <div className="border-t border-[#0A0A0A]/10 pt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Project Type</p>
              <p className="text-[13px] text-[#0A0A0A]/60">Brand Identity, Motion, Iconography, Merchandising</p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Date</p>
              <p className="text-[13px] text-[#0A0A0A]/60">October</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Circle brand elements ── */}
      <WorkSection src="/forlife circle set.svg" alt="Forlife brand circle elements" bg="bg-[#0A0A0A]" />

      {/* ── 3. Health For All ── */}
      <WorkSection src="/forlife health for all.svg" alt="Healthier futures for all — Forlife" />

      {/* ── 4. Infinity mark + Foundation logo (2-col) ── */}
      <WorkSectionGrid
        leftSrc="/forlife infinity.svg"
        leftAlt="Forlife infinity logo mark"
        rightSrc="/forlife foundation.svg"
        rightAlt="Forlife Foundation logo lockup"
        bg="bg-white"
      />

      {/* ── 5. Color combo ── */}
      <WorkSection src="/forlife color combo.svg" alt="Forlife brand color palette" />

      {/* ── 6. @ Logo + Fonts (2-col) ── */}
      <section className="w-full bg-white px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/forlife @ logo.svg"
          alt="Forlife @ digital logo mark"
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto block"
        />
        <Image
          src="/forlife fonts inter.svg"
          alt="Forlife typography — Inter font specimen"
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto block"
        />
      </section>

      {/* ── 7. Envelope mockup ── */}
      <WorkSection src="/envelope forlife.svg" alt="Forlife envelope stationery mockup" />

      {/* ── 8. Letter / stationery ── */}
      <WorkSection src="/forlife letter.svg" alt="Forlife letterhead stationery" />

      {/* ── 9. ID Card ── */}
      <WorkSection src="/forlife ID card.svg" alt="Forlife staff ID card mockup" />

      {/* ── 10. iPhone wallpaper ── */}
      <WorkSection src="/forlife iphone wallpaper.svg" alt="Forlife iPhone wallpaper digital touchpoint" contained />

      {/* ── 11. Tweets / social media ── */}
      <WorkSection src="/forlife tweets.svg" alt="Forlife social media tweet mockups" />

    </main>
  )
}
