import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { internship, leadership } from '@/lib/experience'

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-hairline" aria-labelledby="experience-heading">
      <Container>
        {/* Heading */}
        <ScrollReveal>
          <h2
            id="experience-heading"
            className="font-display font-bold text-ink tracking-tight mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Experience
          </h2>
        </ScrollReveal>

        {/* ── Featured internship ── */}
        <ScrollReveal delay={0.05}>
          <div className="border-t border-hairline py-8">
            <div className="flex items-start gap-6">
              {/* Indent spacer — aligns with project list numbers */}
              <span className="font-mono text-2xs tracking-widest uppercase text-muted shrink-0 pt-0.5 select-none w-6" aria-hidden>
                ↳
              </span>

              <div className="min-w-0 flex-1">
                {/* Role */}
                <p className="text-ink font-medium text-base leading-snug">
                  {internship.role}
                </p>

                {/* Org · Location · Dates */}
                <p className="font-mono text-2xs tracking-widest uppercase text-muted mt-2">
                  {internship.organization} · {internship.location} · {internship.dates}
                </p>

                {/* Description */}
                <p className="text-muted leading-relaxed text-sm mt-4 max-w-[62ch]">
                  {internship.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Leadership list ── */}
        <ul className="list-none mt-4" role="list">
          {leadership.map((item, i) => (
            <ScrollReveal key={item.organization} delay={0.1 + i * 0.05}>
              <li className="border-t border-hairline py-4 flex items-baseline gap-6">
                <span className="font-mono text-2xs tracking-widest uppercase text-muted shrink-0 select-none w-6" aria-hidden />
                <p className="font-mono text-2xs tracking-widest uppercase text-muted">
                  {item.role} · {item.organization} · {item.dates}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <div className="border-t border-hairline" />
      </Container>
    </section>
  )
}
