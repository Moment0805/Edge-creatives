import Image from 'next/image'

interface WorkSectionGridProps {
  leftSrc: string
  leftAlt: string
  rightSrc: string
  rightAlt: string
  bg?: string
}

export default function WorkSectionGrid({
  leftSrc,
  leftAlt,
  rightSrc,
  rightAlt,
  bg = 'bg-white',
}: WorkSectionGridProps) {
  return (
    <div className={`w-full ${bg} px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-6`}>
      <Image
        src={leftSrc}
        alt={leftAlt}
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="w-full h-auto block rounded-xl"
      />
      <Image
        src={rightSrc}
        alt={rightAlt}
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="w-full h-auto block rounded-xl"
      />
    </div>
  )
}
