'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { projects, type Project } from '@/lib/projects'

function CaseStudySection({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-hairline pt-8 pb-8">
      <p className="font-mono text-2xs tracking-widest uppercase text-muted mb-4">
        {label}
      </p>
      <p className="text-ink leading-relaxed text-[1.0625rem] max-w-[62ch]">
        {children}
      </p>
    </div>
  )
}

function ProjectRow({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: Project
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const toggleRef = useRef<HTMLButtonElement>(null)
  const num = String(index + 1).padStart(2, '0')

  return (
    <li>
      {/* ── Row header ── */}
      <button
        ref={toggleRef}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`case-study-${project.id}`}
        className="group w-full text-left border-t border-hairline py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
      >
        <div className="flex items-start justify-between gap-6">
          {/* Left — number + title + role */}
          <div className="flex items-start gap-6 min-w-0">
            <span className="font-mono text-2xs tracking-widest uppercase text-muted mt-1 shrink-0 select-none">
              {num}
            </span>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-ink text-xl sm:text-2xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-2xs tracking-widest uppercase text-muted mt-2">
                {project.role} · {project.year}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-2xs tracking-wider uppercase text-muted border border-hairline rounded-sm px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — expand indicator */}
          <div
            className="font-mono text-2xs tracking-widest uppercase text-muted mt-1 shrink-0 transition-colors group-hover:text-ink"
            aria-hidden
          >
            {isOpen ? '—' : '+'}
          </div>
        </div>

        {/* Summary — only visible when collapsed */}
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-2xs tracking-wide text-muted mt-4 pl-6 sm:pl-12"
            >
              {project.summary}
            </motion.p>
          )}
        </AnimatePresence>
      </button>

      {/* ── Case study panel ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`case-study-${project.id}`}
            role="region"
            aria-label={`${project.title} case study`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pl-6 sm:pl-12 pr-0 pb-10">
              {/* Accent mark above case study */}
              <div className="w-5 h-px bg-accent mb-8" />

              <CaseStudySection label="Problem">
                {project.problem}
              </CaseStudySection>
              <CaseStudySection label="Process">
                {project.process}
              </CaseStudySection>

              {/* Footer actions */}
              <div className="border-t border-hairline pt-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {project.link && (
                    <Link
                      href={project.link.href}
                      className="inline-flex items-center gap-1.5 font-mono text-2xs tracking-widest uppercase text-accent border-b border-accent pb-px hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
                    >
                      {project.link.label}
                      <ArrowUpRight size={10} aria-hidden />
                    </Link>
                  )}
                </div>
                <button
                  onClick={() => {
                    onToggle()
                    // return focus to the row header after closing
                    setTimeout(() => toggleRef.current?.focus(), 10)
                  }}
                  aria-label="Collapse case study"
                  className="flex items-center gap-1.5 font-mono text-2xs tracking-widest uppercase text-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
                >
                  <X size={11} aria-hidden />
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-display font-bold text-ink tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Work
            </h2>
            <span className="font-mono text-2xs tracking-widest uppercase text-muted">
              {projects.length} {projects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </ScrollReveal>


        <ul className="list-none" role="list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <ProjectRow
                project={project}
                index={i}
                isOpen={openId === project.id}
                onToggle={() => toggle(project.id)}
              />
            </ScrollReveal>
          ))}
        </ul>

        {/* Bottom border after last project */}
        <div className="border-t border-hairline" />
      </Container>
    </section>
  )
}
