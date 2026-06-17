import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { press } from '@/lib/press'

export function Press() {
  if (!press.length) return null

  return (
    <section className="py-16 md:py-24 border-t border-hairline" aria-labelledby="press-heading">
      <Container>
        {/* Section label — intentionally lighter than a full h2 heading */}
        <ScrollReveal>
          <p
            id="press-heading"
            className="font-mono text-2xs tracking-widest uppercase text-muted mb-10 md:mb-14"
          >
            Press
          </p>
        </ScrollReveal>

        <ul className="list-none space-y-0" role="list">
          {press.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 0.05}>
              <li className="border-t border-hairline py-8">
                <div className="flex items-start gap-6">
                  {/* Indent spacer — matches experience section */}
                  <span className="font-mono text-2xs tracking-widest uppercase text-muted shrink-0 pt-0.5 w-6 select-none" aria-hidden />

                  <div className="min-w-0 flex-1">
                    {/* Publication · Date */}
                    <p className="font-mono text-2xs tracking-widest uppercase text-muted mb-3">
                      {item.publication} · {item.date}
                    </p>

                    {/* Article title */}
                    <p className="text-ink font-medium text-base leading-snug mb-5">
                      {item.title}
                    </p>

                    {/* Pull quote */}
                    <blockquote className="border-l-2 border-hairline pl-4 mb-5">
                      <p className="text-muted text-sm leading-relaxed italic">
                        &ldquo;{item.pullQuote}&rdquo;
                      </p>
                      <cite className="not-italic font-mono text-2xs tracking-widest uppercase text-muted mt-2 block">
                        — {item.attribution}
                      </cite>
                    </blockquote>

                    {/* Read link */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-2xs tracking-widest uppercase text-muted border-b border-hairline pb-px hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
                    >
                      Read article
                      <ArrowUpRight size={10} aria-hidden />
                    </a>
                  </div>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <div className="border-t border-hairline" />
      </Container>
    </section>
  )
}
