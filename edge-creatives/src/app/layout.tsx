import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { env } from '@/env'

const hostGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/HostGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HostGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HostGrotesk-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/HostGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HostGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HostGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HostGrotesk-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-hostgrotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Edge Creatives',
  description: 'A design studio for ambitious brands. We work remotely at the sweet spot of craft and ideas that move people.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Using HostGrotesk for both body and display fonts as per standard HostGrotesk brand application.
  return (
    <html lang="en" suppressHydrationWarning className={`${hostGrotesk.variable}`}>
      <body className="antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
