'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'motion/react'

// Lazy load the R3F Canvas
const Scene = dynamic(() => import('@/components/canvas/HeroShape').then(mod => {
  const { Canvas } = require('@react-three/fiber')
  return function R3FScene() {
    return (
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <mod.default />
      </Canvas>
    )
  }
}), { ssr: false })

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh'])

  const copy = "A design studio for ambitious brands, we work remotely at the sweet spot of craft and ideas that move people."
  const words = copy.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.3,
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  }

  return (
    <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-white dark:bg-brand-black px-6 md:px-12 pt-20">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen">
        <Scene />
      </div>

      {/* Copy foreground */}
      <motion.div 
        style={{ y }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center"
      >
        <motion.h1 
          className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] text-brand-black dark:text-brand-white text-center text-balance flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span 
              key={index} 
              className="inline-block"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
      
    </section>
  )
}
