'use client'

import { motion } from 'motion/react'

const words = 'A design studio for ambitious brands, we work remotely at the sweet spot of craft and ideas that move people.'.split(' ')

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.2 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="relative w-full bg-white flex items-center justify-center pt-[180px] pb-[90px] md:pt-[240px] md:pb-[130px] px-6">
      <motion.h1
        className="text-center"
        style={{
          fontFamily: 'var(--font-hostgrotesk)',
          fontWeight: 400,
          fontSize: '41.6px',
          lineHeight: '47.84px',
          letterSpacing: '-1.2px',
          maxWidth: '780px',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span key={i} className="inline-block mr-[0.28em]" variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </section>
  )
}
