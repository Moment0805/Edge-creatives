'use client'

import { useState } from 'react'
import { env } from '@/env'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // honeypot
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', website: '' })
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'Failed to send message.')
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white text-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Contact us</h1>
        <p className="text-lg text-gray-500 mb-12 max-w-xl">
          Interested in working together? Fill out the form below with some details about your project and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            {status === 'success' ? (
              <div className="bg-[#0A0A0A] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-medium mb-2">Message sent!</h3>
                <p className="text-white/70">Thank you for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] transition-all bg-gray-50/50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] transition-all bg-gray-50/50"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] transition-all bg-gray-50/50"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] transition-all bg-gray-50/50 resize-y"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#0A0A0A] text-white rounded-full px-8 py-4 font-medium mt-4 hover:bg-black/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Email</h4>
              <a href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-lg hover:opacity-70 transition-opacity">
                {env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Phone</h4>
              <a href={`tel:${env.NEXT_PUBLIC_CONTACT_PHONE}`} className="text-lg hover:opacity-70 transition-opacity">
                {env.NEXT_PUBLIC_CONTACT_PHONE}
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Studio</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                {env.NEXT_PUBLIC_COMPANY_NAME}<br />
                {env.NEXT_PUBLIC_COMPANY_ADDRESS.split(',').map((part, i) => (
                  <span key={i}>{part.trim()}{i < env.NEXT_PUBLIC_COMPANY_ADDRESS.split(',').length - 1 ? ', ' : ''}<br/></span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
