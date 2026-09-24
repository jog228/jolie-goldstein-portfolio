import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { leadership } from '@/lib/experience'

export function Leadership() {
  if (!leadership.length) return null

  return (
    <section
      id="leadership"
      className="py-16 md:py-24 border-t border-hairline"
      aria-labelledby="leadership-heading"
    >
      <Container>
        <ScrollReveal>
          <h2
            id="leadership-heading"
            className="font-display font-bold text-ink text-xl sm:text-2xl leading-tight tracking-tight mb-10 md:mb-14"
          >
            Leadership
          </h2>
        </ScrollReveal>

        <ul className="list-none space-y-0" role="list">
          {leadership.map((item, i) => (
            <ScrollReveal key={`${item.role}-${item.organization}`} delay={i * 0.05}>
              <li className="border-t border-hairline py-8">
                <div className="flex items-start gap-6">
                  {/* Indent spacer — matches press + experience */}
                  <span className="font-mono text-2xs tracking-widest uppercase text-muted shrink-0 pt-0.5 w-6 select-none" aria-hidden />

                  <div className="min-w-0 flex-1">
                    {/* Organization · Dates */}
                    <p className="font-mono text-2xs tracking-widest uppercase text-muted mb-3">
                      {item.organization} · {item.dates}
                    </p>

                    {/* Role */}
                    <p className="text-ink font-medium text-base leading-snug">
                      {item.role}
                    </p>
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