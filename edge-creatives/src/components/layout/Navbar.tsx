'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        {/* Logo — square icon mark */}
        <Link href="/" className="relative block w-12 h-12 flex-shrink-0">
          <Image
            src="/logo black.svg"
            alt="The Edge Studio"
            fill
            sizes="48px"
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[17px] font-normal leading-none transition-opacity duration-200 hover:opacity-60 ${
                pathname === link.href ? 'opacity-40' : 'text-[#0A0A0A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#0A0A0A] text-white px-5 py-2 rounded-full text-sm font-normal tracking-wide transition-transform active:scale-95"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-40 bg-white flex flex-col px-6 pt-24"
          >
            <div className="flex flex-col gap-8 mt-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[40px] font-normal tracking-tight text-[#0A0A0A] leading-none"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
