import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-hairline" aria-labelledby="about-heading">
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
              {}
              <p>
                I'm a front-end developer and UX designer studying computer science at{' '}
                <span className="text-muted">Lehigh University</span>, with minors in data
                science and graphic design. I work where building and research meet, I like
                writing the code, but I care just as much about what happens when someone who
                isn't me starts using it.
              </p>
              <p>
                I'm currently an Application Design & Development intern at the{' '}
                <span className="text-muted">Federal Reserve Board</span>, building internal
                applications on a cross-functional team of designers, engineers, and product
                managers. My work so far has ranged widely, from an AI coding tutor now used
                in classrooms in <span className="text-muted">India</span> to a peer-reviewed
                usability study. Across all of it, I've learned to care about the reasoning
                behind a decision as much as the decision itself, and to design for the person
                actually using the product rather than the one I imagined.
              </p>
              <p>
                Outside of work, I like to stay active, collect vinyl records, and read murder thrillers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
