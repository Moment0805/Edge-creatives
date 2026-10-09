import Image from 'next/image'

const sectors = [
  'Web 3',
  'Charity',
  'Food',
  'Household',
  'Money & Fintech',
  'Pet Care',
  'Health & Beauty',
  'Soft Drinks',
  'Sports & Lifestyle',
]

export default function Sectors() {
  return (
    <section className="w-full bg-white px-6 md:px-12 py-16">

      <h2 className="text-[40px] font-normal tracking-tight leading-none text-[#0A0A0A] mb-10">
        Sectors we&apos;ve worked in:
      </h2>

      <div className="flex flex-wrap gap-3">
        {sectors.map((sector) => (
          <div
            key={sector}
            className="flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-[10px] rounded-full cursor-default select-none"
          >
            <span className="text-[15px] font-normal leading-none">{sector}</span>
            {/* arrow.svg is a white arrow on the black pill */}
            <div className="relative w-4 h-4 flex-shrink-0">
              <Image
                src="/arrow.svg"
                alt=""
                fill
                sizes="16px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
