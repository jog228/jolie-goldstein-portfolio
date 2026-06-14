'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-hairline bg-canvas/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-2xs tracking-widest uppercase text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
          >
            {/* TODO: Replace with your name or initials */}
            JG
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden sm:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-2xs tracking-widest uppercase text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
                >
                  {label}
                </a>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
