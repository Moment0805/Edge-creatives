# The Edge Creatives — Project Brief & Starter Guide

> AI context document for Antigravity. Read this fully before generating any code.

---

## 1. What We're Building

**The Edge Creatives** is a design and creative studio that sits at the intersection of brand identity, web design, and creative direction. This is our official studio website — our primary digital storefront, portfolio showcase, and contact point for prospective clients.

The site must feel like the work we do: sharp, intentional, and memorable. It should position us as a top-tier creative studio for ambitious brands. Think Locomotive, Basic Agency, or Fantasy Interactive — not a template site, not a WordPress theme. Every interaction, scroll, and hover should reinforce the brand.

**Tone:** Bold minimalism with editorial energy. Black, white, and one sharp accent. Clean type, generous space, and animations that feel inevitable — not decorative.

---

## 2. Pages / Sections

```
/ (Home)
  ├── Hero              — full-screen, animated headline, scroll CTA
  ├── Featured Work     — 2-col project grid with hover reveals
  ├── Sectors           — pill tag cloud of industries
  └── CTA Banner        — "Need work that works?" + Let's chat

/work                   — full project archive grid
/work/[slug]            — individual case study (dynamic route)
/about                  — studio story, team, values
/contact                — contact form + info
```

---

## 3. Tech Stack

### Framework
| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 15** | App Router, React Server Components |
| Language | **TypeScript** | strict mode on |
| Styling | **Tailwind CSS v4** | utility-first, no component library |
| CMS | **Sanity v3** | headless, live preview, custom Studio |
| Deployment | **Vercel** | edge functions, image optimisation |
| Media | **Cloudinary** | portfolio images, video |

### Animation Stack
| Layer | Choice | Purpose |
|---|---|---|
| Scroll animations | **GSAP 3 + ScrollTrigger** | pin, parallax, scrub, timelines |
| Text animation | **GSAP SplitText** | char/word/line splits on hero |
| Component motion | **Motion (Framer Motion v11)** | page transitions, hover states |
| Smooth scroll | **Lenis** | native-feel momentum scroll |
| 3D / WebGL | **React Three Fiber + Drei** | hero abstract shape or mesh |
| 3D timeline | **Theatre.js** | visual keyframe editor for R3F scenes |

---

## 4. Project Initialisation

### Step 1 — Bootstrap Next.js app

```bash
npx create-next-app@latest edge-creatives \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd edge-creatives
```

### Step 2 — Install all dependencies

```bash
# Animation core
npm install gsap @gsap/react
npm install motion
npm install @studio-freight/lenis

# 3D / WebGL
npm install three @react-three/fiber @react-three/drei
npm install @theatre/core @theatre/r3f @theatre/studio

# CMS
npm install next-sanity @sanity/image-url @sanity/client
npm install -D sanity

# Utilities
npm install clsx tailwind-merge
npm install @types/three

# (Optional) type-safe env
npm install @t3-oss/env-nextjs zod
```

### Step 3 — Initialise Sanity Studio

```bash
npx sanity@latest init --env .env.local
```

Choose: **Create new project** → project name: `edge-creatives` → dataset: `production`

---

## 5. Key File Structure

```
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx          ← root layout, Lenis provider, custom cursor
│   │   ├── page.tsx            ← homepage
│   │   ├── work/
│   │   │   ├── page.tsx        ← work archive
│   │   │   └── [slug]/
│   │   │       └── page.tsx    ← case study dynamic route
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx        ← embedded Sanity Studio
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── CustomCursor.tsx    ← magnetic cursor effect
│   │   ├── SmoothScroll.tsx    ← Lenis provider wrapper
│   │   └── PageTransition.tsx  ← Motion AnimatePresence wrapper
│   ├── sections/
│   │   ├── Hero.tsx            ← GSAP SplitText + R3F canvas
│   │   ├── FeaturedWork.tsx
│   │   ├── Sectors.tsx
│   │   └── CTABanner.tsx
│   └── project/
│       ├── ProjectCard.tsx
│       └── CaseStudy.tsx
│
├── lib/
│   ├── sanity/
│   │   ├── client.ts           ← Sanity client config
│   │   ├── queries.ts          ← GROQ query strings
│   │   └── image.ts            ← urlFor helper
│   └── gsap/
│       └── animations.ts       ← reusable GSAP timeline helpers
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── project.ts          ← project schema
│   │   └── index.ts
│   └── sanity.config.ts
│
└── types/
    └── index.ts                ← shared TypeScript interfaces
```

---

## 6. Core Setup Files to Generate First

When starting, generate these files **in order**:

1. `src/lib/sanity/client.ts` — Sanity client
2. `src/sanity/schemaTypes/project.ts` — Project content model
3. `src/components/ui/SmoothScroll.tsx` — Lenis wrapper
4. `src/components/ui/CustomCursor.tsx` — Magnetic cursor
5. `src/app/(site)/layout.tsx` — Root layout wiring everything together
6. `src/components/sections/Hero.tsx` — Hero with GSAP SplitText + scroll reveal

---

## 7. Environment Variables

Create `.env.local` with:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Site
NEXT_PUBLIC_SITE_URL=https://edgecreatives.com
```

---

## 8. Sanity Project Schema (Minimal)

```ts
// sanity/schemaTypes/project.ts
export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'services', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'sectors', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'featured', type: 'boolean' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
  ],
  orderings: [{ title: 'Year, New', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] }],
})
```

---

## 9. Animation Patterns to Implement

### Hero text reveal (GSAP SplitText)
```ts
// On mount, split headline into chars, stagger them in from y:40, opacity:0
gsap.from(splitChars, {
  y: 60, opacity: 0, duration: 1, stagger: 0.03,
  ease: 'power3.out', delay: 0.3
})
```

### Scroll-triggered project cards
```ts
// Each card scrubs in as user scrolls into view
ScrollTrigger.batch('.project-card', {
  onEnter: (els) => gsap.from(els, { y: 80, opacity: 0, stagger: 0.1, duration: 0.9 }),
})
```

### Lenis + ScrollTrigger sync
```ts
// In SmoothScroll.tsx — required for ScrollTrigger to work with Lenis
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```

---

## 10. Design Tokens (Tailwind Config Reference)

```ts
// tailwind.config.ts — extend with brand tokens
theme: {
  extend: {
    colors: {
      brand: {
        black:  '#0A0A0A',
        white:  '#F5F5F3',
        accent: '#E8593C',  // adjust to final brand colour
        muted:  '#9A9A96',
      }
    },
    fontFamily: {
      display: ['var(--font-display)'],   // editorial/heading font
      body:    ['var(--font-body)'],      // clean body font
      mono:    ['var(--font-mono)'],
    },
  }
}
```

Recommended font pairing: **Editorial New** (display) + **Geist** (body) — or swap display for **Neue Montreal** or **Basement Grotesque** depending on final brand direction.

---

## 11. Performance Checklist

- [ ] Lazy-load `@react-three/fiber` canvas with `next/dynamic` + `{ ssr: false }`
- [ ] Use `next/image` for every portfolio image
- [ ] Kill GSAP ScrollTriggers on component unmount
- [ ] Wrap Lenis in `useEffect` with cleanup
- [ ] Use `React.Suspense` boundaries around Sanity data fetches
- [ ] Set `loading="lazy"` on below-fold images

---

## 12. First Task for Antigravity

> Start by generating the following in order:
>
> 1. `src/lib/sanity/client.ts`
> 2. `src/components/ui/SmoothScroll.tsx` — Lenis provider with GSAP sync
> 3. `src/app/(site)/layout.tsx` — wrapping SmoothScroll + global styles
> 4. `src/components/sections/Hero.tsx` — full-screen hero, animated headline using GSAP SplitText, minimal layout matching the Edge Creatives brand direction (dark, editorial, bold)
>
> Use TypeScript throughout. No component libraries. Tailwind only. Animations performant and cleaned up on unmount.

---

*Document version: 1.0 — April 2026*
*Stack owner: The Edge Creatives dev team*
