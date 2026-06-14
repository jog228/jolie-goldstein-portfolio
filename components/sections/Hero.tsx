'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'

interface FadeProps {
  delay?: number
}

function fade({ delay = 0 }: FadeProps = {}) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }
}

// TODO: Replace all placeholder values below
const LINKS = [
  { label: 'GitHub', href: 'https://github.com/TODO' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/TODO' },
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'hello@TODO.com', href: 'mailto:TODO@email.com' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[92dvh] flex-col justify-end">
      <Container className="pb-20 pt-32">
        {/* Availability badge */}
        <motion.p
          {...fade({ delay: 0 })}
          className="font-mono text-2xs tracking-widest uppercase text-muted mb-10"
        >
          {/* TODO: Update availability status */}
          Available for work · 2025
        </motion.p>

        {/* Name — fluid display type */}
        <motion.h1
          {...fade({ delay: 0.08 })}
          className="font-display font-black tracking-tight text-ink leading-[0.93] mb-8"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          {/* TODO: Your name */}
          Jolie<br />Goldstein
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fade({ delay: 0.16 })}
          className="font-mono text-2xs tracking-widest uppercase text-muted mb-7"
        >
          Front-End Developer & UX Designer
        </motion.p>

        {/* Positioning statement */}
        <motion.p
          {...fade({ delay: 0.24 })}
          className="text-lg text-ink leading-relaxed max-w-[34rem] mb-14"
        >
          {/* TODO: One sentence that captures what makes your work yours */}
          I design and build interfaces where visual precision and systems
          thinking create products worth remembering.
        </motion.p>

        {/* Links */}
        <motion.nav
          {...fade({ delay: 0.32 })}
          aria-label="External links"
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          {LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="group inline-flex items-center gap-1 font-mono text-2xs tracking-widest uppercase text-muted border-b border-hairline pb-px transition-colors hover:text-accent hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
            >
              {label}
              <ArrowUpRight
                size={10}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          ))}
        </motion.nav>
      </Container>

      {/* Section separator */}
      <div className="border-t border-hairline" />
    </section>
  )
}
