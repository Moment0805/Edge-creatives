import { env } from '@/env'
import DownloadPdfButton from '@/components/ui/DownloadPdfButton'

export const metadata = {
  title: 'Privacy Policy | ' + env.NEXT_PUBLIC_COMPANY_NAME,
}

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white text-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          <DownloadPdfButton filename="privacy-policy" targetId="legal-content" />
        </div>

        <div id="legal-content" className="prose md:prose-lg prose-p:text-gray-600 prose-headings:font-medium prose-headings:text-[#0A0A0A] max-w-none bg-white p-2">

          <h2>1. Introduction</h2>
          <p>
            {env.NEXT_PUBLIC_COMPANY_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by {env.NEXT_PUBLIC_COMPANY_NAME}.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. 
            When you use our Contact form, we collect your name, email address, subject, and message.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul>
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
            <li>To send periodic emails (like responses to contact form inquiries)</li>
          </ul>
          
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy, you may contact us using the information below:
            <br />
            <strong>{env.NEXT_PUBLIC_COMPANY_NAME}</strong>
            <br />
            {env.NEXT_PUBLIC_COMPANY_ADDRESS}
            <br />
            {env.NEXT_PUBLIC_CONTACT_EMAIL}
          </p>
          
        </div>
      </div>
    </main>
  )
}
