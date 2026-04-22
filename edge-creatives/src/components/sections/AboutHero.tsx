'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function AboutHero() {
  return (
    <section className="w-full bg-white px-6 md:px-12 pt-28 md:pt-32 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="w-full rounded-[24px] flex flex-col items-center justify-center text-center py-16 md:py-20 px-6"
        style={{ backgroundColor: '#DCF0F5' }}
      >
        <h1
          className="text-[#0A0A0A] mb-8 text-balance"
          style={{
            fontWeight: 500,
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            maxWidth: '500px',
            textAlign: 'center',
          }}
        >
          Your brand should be the sharpest thing in the room.
        </h1>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white rounded-full px-6 py-3 text-[15px] font-normal transition-opacity hover:opacity-80"
        >
          Explore our work
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
      </motion.div>
    </section>
  )
}
