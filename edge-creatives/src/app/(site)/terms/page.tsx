import { env } from '@/env'
import DownloadPdfButton from '@/components/ui/DownloadPdfButton'

export const metadata = {
  title: 'Terms of Service | ' + env.NEXT_PUBLIC_COMPANY_NAME,
}

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white text-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Terms of Service</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          <DownloadPdfButton filename="terms-of-service" targetId="legal-content" />
        </div>

        <div id="legal-content" className="prose md:prose-lg prose-p:text-gray-600 prose-headings:font-medium prose-headings:text-[#0A0A0A] max-w-none bg-white p-2">

          <h2>1. Introduction</h2>
          <p>
            Welcome to {env.NEXT_PUBLIC_COMPANY_NAME} ("we," "our," or "us"). These Terms of Service govern your access to and use of our website located at {env.NEXT_PUBLIC_SITE_URL}, as well as any services we provide.
          </p>
          
          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our website or use our services.
          </p>

          <h2>3. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at {env.NEXT_PUBLIC_CONTACT_EMAIL} or write to us at:
            <br />
            <strong>{env.NEXT_PUBLIC_COMPANY_NAME}</strong>
            <br />
            {env.NEXT_PUBLIC_COMPANY_ADDRESS}
          </p>
          
          <h2>4. Use of the Site</h2>
          <p>
            You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights.
          </p>
          
        </div>
      </div>
    </main>
  )
}
