import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function About() {
  return (
    <section id="about" className="py-24 border-t border-hairline" aria-labelledby="about-heading">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <ScrollReveal>
            <h2
              id="about-heading"
              className="font-display font-bold text-ink tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              About
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-[1.0625rem] leading-relaxed text-ink">
              {/* TODO: Replace with your bio — aim for 2–3 short paragraphs */}
              <p>
                I'm a front-end developer and UX designer based in{' '}
                <span className="text-muted">[TODO: city]</span>. I'm drawn to
                the intersection where design systems, accessibility, and
                engineering craft meet — the work that makes everything else
                more consistent and more humane.
              </p>
              <p>
                Before focusing on product design and engineering, I{' '}
                <span className="text-muted">[TODO: brief background — education, prior work, pivot story]</span>.
                That path shaped how I think: I care about the reasoning behind
                decisions as much as the decisions themselves.
              </p>
              <p>
                Outside of work, I{' '}
                <span className="text-muted">[TODO: hobbies / interests that say something real about you]</span>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
