import Image from 'next/image'

interface WorkSectionProps {
  src: string
  alt: string
  bg?: string          // tailwind bg class e.g. 'bg-[#0A0A0A]' — default none
  contained?: boolean  // max-w-3xl centered — default false (full width)
  aspectRatio?: string // e.g. '16/9' — default auto via natural height
}

export default function WorkSection({
  src,
  alt,
  bg = '',
  contained = false,
  aspectRatio,
}: WorkSectionProps) {
  return (
    <div className={`w-full ${bg}`}>
      <div className={contained ? 'max-w-3xl mx-auto px-6 py-12' : ''}>
        {aspectRatio ? (
          <div className="relative w-full" style={{ aspectRatio }}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            sizes="100vw"
            className="w-full h-auto block"
          />
        )}
      </div>
    </div>
  )
}
