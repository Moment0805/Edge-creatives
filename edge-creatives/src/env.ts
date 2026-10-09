import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    CONTACT_EMAIL: z.string().email(),
    RESEND_API_KEY: z.string().min(1).default('re_placeholder_key'),
    SANITY_API_READ_TOKEN: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().min(1).default(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
    NEXT_PUBLIC_COMPANY_NAME: z.string().min(1).default('Edge studio'),
    NEXT_PUBLIC_COMPANY_ADDRESS: z.string().min(1).default('ARL Road, Ojoo, Ibadan, Nigeria'),
    NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().default('admin@wearetheedge.studio'),
    NEXT_PUBLIC_CONTACT_PHONE: z.string().min(1).default('+2348169456059'),
    NEXT_PUBLIC_SOCIAL_INSTAGRAM: z.string().min(1).default('https://instagram.com'),
    NEXT_PUBLIC_SOCIAL_LINKEDIN: z.string().min(1).default('https://linkedin.com'),
    NEXT_PUBLIC_SOCIAL_TWITTER: z.string().min(1).default('https://twitter.com'),
    NEXT_PUBLIC_SOCIAL_TIKTOK: z.string().min(1).default('https://tiktok.com'),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).optional(),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1).optional(),
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1).optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_COMPANY_ADDRESS: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    NEXT_PUBLIC_SOCIAL_INSTAGRAM: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    NEXT_PUBLIC_SOCIAL_LINKEDIN: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    NEXT_PUBLIC_SOCIAL_TWITTER: process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
    NEXT_PUBLIC_SOCIAL_TIKTOK: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
})
