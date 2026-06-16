import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/providers/ThemeProvider'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  // Variable font — weight range 100–900 and custom axes are available via CSS
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://joliegoldstein.com'),
  title: {
    default: 'Jolie Goldstein',
    template: '%s — Jolie Goldstein',
  },
  description:
    'Front-end developer and UX designer. I build interfaces where clean code meets real user research.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joliegoldstein.com',
    siteName: 'Jolie Goldstein',
    title: 'Jolie Goldstein',
    description: 'Front-end developer and UX designer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jolie Goldstein',
    description: 'Front-end developer and UX designer.',
  },
}

// Runs synchronously before first paint to prevent FOUC
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',s||(m?'dark':'light'))}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Anti-FOUC: set theme before paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
