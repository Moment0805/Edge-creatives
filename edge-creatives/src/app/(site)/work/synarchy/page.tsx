import Image from 'next/image'
import WorkSection from '@/components/sections/WorkSection'
import WorkSectionGrid from '@/components/sections/WorkSectionGrid'

export const metadata = {
  title: 'Synarchy — The Edge Studio',
  description: 'Brand Identity, Website Design and Automation for Synarchy — a Web3 platform built for community-led organisations.',
}

export default function SynarchyPage() {
  return (
    <main className="w-full flex flex-col gap-[42px] pb-[42px] bg-white">

      {/* ── 1a. Full-width hero image ── */}
      <div className="w-full pt-[72px]">
        <Image
          src="/work 3.svg"
          alt="Synarchy — hero"
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
            Synarchy
          </h1>
        </div>

        {/* Right — body + metadata */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-[#0A0A0A]/70">
            <p>
              Synarchy is a Web3 platform built for community-led organisations — a space where governance, coordination, and culture converge. The ask was to build an identity and digital experience that felt native to this world: technically credible, visually bold, and human enough to bring non-technical people in.
            </p>
            <p>
              The design questions: How do you make decentralised governance feel accessible without dumbing it down? How do you build something that lives confidently in the Web3 space without leaning on the same tired clichés? What should authority look like when it belongs to everyone?
            </p>
            <p>
              The answer was a visual system rooted in precision and energy — a mark that could hold its own in a dark environment, a typographic voice that was clear without being cold, and a UI architecture designed to reduce friction at every decision point.
            </p>
            <p>
              The result is a brand and product experience that moves with the speed of its community. Built to coordinate. Built to last.
            </p>
          </div>

          {/* Project metadata */}
          <div className="border-t border-[#0A0A0A]/10 pt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Project Type</p>
              <p className="text-[13px] text-[#0A0A0A]/60">Brand Identity, Website design, Automation</p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Date</p>
              <p className="text-[13px] text-[#0A0A0A]/60">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Layout + Phone (2-col grid) ── */}
      <WorkSectionGrid
        leftSrc="/synarchy layout.svg"
        leftAlt="Synarchy layout system"
        rightSrc="/synarchy phone.svg"
        rightAlt="Synarchy mobile phone UI"
        bg="bg-white"
      />

      {/* ── 3. Design / brand system ── */}
      <WorkSection src="/synarchy design.svg" alt="Synarchy brand design system" />

      {/* ── 4. Tweet page ── */}
      <WorkSection src="/synarchy tweet page.svg" alt="Synarchy tweet / social page design" />

      {/* ── 5. Logo mark ── */}
      <WorkSection src="/synarchy logo.svg" alt="Synarchy logo mark" />

      {/* ── 6. X / Twitter brand ── */}
      <WorkSection src="/synarchy x.svg" alt="Synarchy X (Twitter) brand presence" />

      {/* ── 7. Typography ── */}
      <WorkSection src="/synarchy typography.svg" alt="Synarchy brand typography" />

      {/* ── 8. Color theme ── */}
      <WorkSection src="/synarchy color theme.svg" alt="Synarchy brand color palette" />

      {/* ── 9. Vest + work 3 (2-col grid) ── */}
      <WorkSectionGrid
        leftSrc="/synarchy vest.svg"
        leftAlt="Synarchy branded vest / apparel"
        rightSrc="/work 3.svg"
        rightAlt="Synarchy brand visual"
        bg="bg-white"
      />

      {/* ── 10. Mobile look ── */}
      <WorkSection src="/synarchy mobile look.svg" alt="Synarchy mobile app look" />

      {/* ── 11. Banner ── */}
      <WorkSection src="/synarchy banner.svg" alt="Synarchy brand banner" />

      {/* ── 12. Pinterest design ── */}
      <WorkSection src="/synarchy pinterest design.svg" alt="Synarchy Pinterest design" />

      {/* ── 13–16. Web/app mockups on dark purple background ── */}
      <div className="w-full bg-[#1A0533] flex flex-col items-center gap-0">
        <Image
          src="/synarchy webpage.svg"
          alt="Synarchy homepage webpage mockup"
          width={1600}
          height={900}
          sizes="100vw"
          className="w-full h-auto block"
        />
        <Image
          src="/synarchy homepage contd.svg"
          alt="Synarchy homepage continued"
          width={1600}
          height={900}
          sizes="100vw"
          className="w-full h-auto block"
        />
        <div className="w-full flex justify-start px-6 md:px-12">
          <Image
            src="/synarchy about us.svg"
            alt="Synarchy about us page mockup"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 75vw"
            className="h-auto block"
          />
        </div>
        <Image
          src="/synarchy web look.svg"
          alt="Synarchy web look final"
          width={1600}
          height={900}
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>

    </main>
  )
}
