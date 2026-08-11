import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Press } from '@/components/sections/Press'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Press />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
