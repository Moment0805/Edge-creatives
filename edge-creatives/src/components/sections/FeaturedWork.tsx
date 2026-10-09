'use client'

import Image from 'next/image'
import Link from 'next/link'

const works = [
  {
    id: 1,
    title: 'Forlife foundation',
    categories: 'Brand identity, Website design',
    image: '/work 1.svg',
    slug: '/work/forlife',
  },
  {
    id: 2,
    title: "Sigma chief's League",
    categories: 'Merchandise, poster design',
    image: '/work 2.svg',
    slug: '/work/sigma',
  },
  {
    id: 3,
    title: 'Synarchy',
    categories: 'Brand identity, website design, Automation',
    image: '/work 3.svg',
    slug: '/work/synarchy',
  },
  {
    id: 4,
    title: 'Maradan',
    categories: 'Brand identity, Packaging design',
    image: '/work 4.svg',
    slug: '/work/maradan',
  },
]

export default function FeaturedWork() {
  return (
    <section className="w-full bg-white px-6 md:px-12 py-16">

      {/* Header row */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[40px] font-normal tracking-tight leading-none text-[#0A0A0A]">
          Featured Work:
        </h2>
        <div className="hidden md:flex items-center border border-[#0A0A0A] rounded-full px-4 py-1.5 text-sm font-normal text-[#0A0A0A]">
          Case Study
        </div>
      </div>

      {/* 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {works.map((work) => (
          <Link key={work.id} href={work.slug} className="group flex flex-col gap-3">

            {/* Image — exact 630×393 aspect */}
            <div className="relative w-full overflow-hidden rounded-xl bg-[#F0F0EE]" style={{ aspectRatio: '630 / 393' }}>
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Text beneath */}
            <div className="flex flex-col gap-[3px] pt-1">
              <h3 className="text-[18px] font-normal text-[#0A0A0A] leading-snug">{work.title}</h3>
              <p className="text-[14px] font-normal text-[#9A9A96]">{work.categories}</p>
            </div>

          </Link>
        ))}
      </div>

    </section>
  )
}
