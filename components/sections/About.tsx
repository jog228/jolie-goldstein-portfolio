import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24" aria-labelledby="about-heading">
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
            <div className="space-y-6 text-[1.125rem] leading-relaxed text-ink">
              {}
              <p>
                I'm a full-stack developer and UX researcher studying computer science at{' '}
                <span className="text-muted">Lehigh University</span>, with minors in data
                science and graphic design. I work where building and research meet, I like
                writing the code, but I care just as much about what happens when someone who
                isn't me starts using it.
              </p>
              <p>
                This past summer I interned at the{' '}
                <span className="text-muted">Federal Reserve Board</span>, where I scoped and
                built Knowledge Exchange, a full-stack Flask and PostgreSQL platform for
                internal knowledge-sharing, from a design document through a working prototype
                to usability testing with real users. During a three-week Global Social Impact
                Fellowship in <span className="text-muted">India</span> in Summer 2025, I built
                iCodePal, an AI coding tutor Chrome extension now used in classrooms there.
                Across all of it, I've learned to care about the reasoning behind a decision as
                much as the decision itself, and to design for the person actually using the
                product rather than the one I imagined.
              </p>
              <p>
                As a sophomore, I was named a{' '}
                <span className="text-muted">Goldwater Scholarship</span> nominee, which has
                shaped my interest in pursuing a PhD or Master's in human-centered computing,
                HCI, or information science.
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
