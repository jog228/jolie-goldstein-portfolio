import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
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

// TODO: Update title, description, and other metadata
export const metadata: Metadata = {
  title: 'Jolie Goldstein — Front-End Developer & UX Designer',
  description:
    'Portfolio of Jolie Goldstein, a front-end developer and UX designer who builds products where visual precision and systems thinking meet.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // TODO: Set your real URL
    url: 'https://TODO.com',
    siteName: 'Jolie Goldstein',
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
      </body>
    </html>
  )
}
