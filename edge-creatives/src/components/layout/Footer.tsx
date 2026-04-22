import Link from 'next/link'
import Image from 'next/image'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const socialLinks = [
  { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <TikTokIcon />, href: 'https://tiktok.com', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white px-6 md:px-12 pt-16 pb-10 w-full">

      {/* Main grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 pb-12 border-b border-white/10">

        {/* Logo + description — spans full width on mobile */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image
              src="/logo white.svg"
              alt="The Edge Studio"
              fill
              sizes="56px"
              className="object-contain object-left"
            />
          </div>
          <p className="text-[#9A9A96] text-[13px] leading-relaxed max-w-[200px]">
            A design studio for ambitious brands, we work remotely at the sweet spot of craft and ideas that move people.
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-[15px] font-medium">Address</h4>
          <div className="flex flex-col gap-1 text-[#9A9A96] text-[13px] leading-relaxed">
            <span>Edge studio</span>
            <span>Globe Point, 1 Globe</span>
            <span>Road Leeds, UK. LS11</span>
            <span>5FD</span>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-[15px] font-medium">Terms & Conditions</h4>
          <div className="flex flex-col gap-1.5 text-[13px]">
            <Link href="#" className="text-[#9A9A96] hover:text-white transition-colors">Download PDF</Link>
            <Link href="#" className="text-[#9A9A96] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#9A9A96] hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Our studio */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-[15px] font-medium">Our studio</h4>
          <div className="flex flex-col gap-1.5 text-[13px]">
            <Link href="/about" className="text-[#9A9A96] hover:text-white transition-colors">About us</Link>
            <Link href="/work" className="text-[#9A9A96] hover:text-white transition-colors">Our work</Link>
            <Link href="/contact" className="text-[#9A9A96] hover:text-white transition-colors">Contact us</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-[15px] font-medium">Contact</h4>
          <div className="flex flex-col gap-1.5 text-[13px]">
            <a href="tel:+4401132453500" className="text-[#9A9A96] hover:text-white transition-colors">+44 (0)1132 453500</a>
            <a href="mailto:chat@edgestudio.com" className="text-[#9A9A96] hover:text-white transition-colors">chat@edgestudio.com</a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
        <p className="text-[#9A9A96] text-[13px]">© 2026 Edge studio · All rights reserved.</p>

        {/* Social icon buttons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#9A9A96] hover:text-white hover:border-white/40 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}
