import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-hairline" aria-labelledby="contact-heading">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <ScrollReveal>
            <h2
              id="contact-heading"
              className="font-display font-bold text-ink tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Say hello
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <p className="text-[1.0625rem] leading-relaxed text-ink max-w-[48ch]">
                {/* TODO: Customize this message */}
                Whether it's a role, a collaboration, or just a conversation
                about design systems and type — I'm glad to hear from you.
              </p>

              <div className="space-y-4">
                {/* TODO: Replace with your email */}
                <a
                  href="mailto:TODO@email.com"
                  className="group inline-flex items-center gap-1.5 font-display font-bold text-ink text-2xl sm:text-3xl tracking-tight hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
                >
                  hello@TODO.com
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>

                <div className="flex gap-6 pt-2">
                  {/* TODO: Add or remove social links */}
                  {[
                    { label: 'GitHub', href: 'https://github.com/TODO' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/TODO' },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex items-center gap-1 font-mono text-2xs tracking-widest uppercase text-muted border-b border-hairline pb-px hover:text-ink hover:border-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    >
                      {label}
                      <ArrowUpRight size={10} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
