import Image from 'next/image'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="w-full bg-white px-6 md:px-12 py-12 md:py-16">

      <div
        className="w-full rounded-[24px] flex flex-col items-center justify-center text-center py-16 md:py-20 px-6"
        style={{ backgroundColor: '#DCF0F5' }}
      >
        {/* Heading */}
        <h2 className="text-[#0A0A0A] mb-8" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.1 }}>
          Need work that <strong className="font-bold"><em>works ?</em></strong>
        </h2>

        {/* Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white rounded-full px-6 py-3 text-[15px] font-normal transition-opacity hover:opacity-80"
        >
          Let&apos;s chat
          <div className="relative w-[14px] h-[14px] flex-shrink-0">
            <Image
              src="/arrow.svg"
              alt=""
              fill
              sizes="14px"
              className="object-contain"
            />
          </div>
        </Link>

      </div>

    </section>
  )
}
