import { env } from '@/env'
import DownloadPdfButton from '@/components/ui/DownloadPdfButton'

export const metadata = {
  title: 'Cookie Policy | ' + env.NEXT_PUBLIC_COMPANY_NAME,
}

export default function CookiesPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white text-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Cookie Policy</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          <DownloadPdfButton filename="cookie-policy" targetId="legal-content" />
        </div>

        <div id="legal-content" className="prose prose-lg prose-p:text-gray-600 prose-headings:font-medium prose-headings:text-[#0A0A0A] max-w-none bg-white p-2">

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
          </p>
          
          <h2>2. How we use cookies</h2>
          <p>
            At {env.NEXT_PUBLIC_COMPANY_NAME}, we use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers (such as Google Analytics) to assist us in better understanding our site visitors.
          </p>

          <h2>3. What types of cookies do we use?</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.</li>
            <li><strong>Analytics/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
          </ul>
          
          <h2>4. Managing cookies</h2>
          <p>
            You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at {env.NEXT_PUBLIC_CONTACT_EMAIL} or by mail using the details provided below:
            <br />
            <strong>{env.NEXT_PUBLIC_COMPANY_NAME}</strong>
            <br />
            {env.NEXT_PUBLIC_COMPANY_ADDRESS}
          </p>
          
        </div>
      </div>
    </main>
  )
}
