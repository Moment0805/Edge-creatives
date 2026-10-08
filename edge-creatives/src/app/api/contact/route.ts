import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { env } from '@/env'
import { z } from 'zod'

const resend = new Resend(env.RESEND_API_KEY)

// Very basic in-memory rate limiting (Note: not suitable for multi-instance deployments)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().optional(), // Honeypot field
})

export async function POST(req: Request) {
  try {
    // 1. Basic Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || 'anonymous'
    const now = Date.now()
    const rateLimit = rateLimitMap.get(ip)

    if (rateLimit) {
      if (now - rateLimit.timestamp < 60000) { // 1 minute window
        if (rateLimit.count >= 3) {
          return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
        }
        rateLimit.count++
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now })
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now })
    }

    // 2. Parse and Validate
    const body = await req.json()
    const result = contactSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    
    const { name, email, subject, message, website } = result.data

    // 3. Honeypot check
    if (website) {
      // Spam detected, but return success to fool the bot
      return NextResponse.json({ success: true })
    }

    // 4. Send Email
    const { error } = await resend.emails.send({
      from: 'The Edge Studio <onboarding@resend.dev>', // Use onboarding@resend.dev for testing if domain not verified
      to: [env.CONTACT_EMAIL],
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
