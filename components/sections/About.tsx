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
                I'm a computer science student at {' '}
                <span className="text-muted">Lehigh University</span>, minoring in data science 
                and graphic design. I build full-stack products and study how people actually 
                use them, especially when AI is part of the experience. I like writing the code, 
                but I care just as much about what happens when someone who isn't me starts using it.
              </p>
              <p>
                This past summer I interned at the{' '}
                <span className="text-muted">Federal Reserve Board</span>, where I scoped and
                built Knowledge Exchange, a full-stack Flask and PostgreSQL platform for
                internal knowledge-sharing, from a design document through a working prototype
                to usability testing with real users. Through {' '}
                <span className="text-muted">Lehigh's Global Social Impact Fellowship </span>, 
                I co-built iCodePal, an AI coding tutor Chrome extension now used 
                in classrooms in India; I own the teacher dashboard, the student code-generation 
                workflows, and the Firebase data layer. Across all of it, I've learned to care 
                about the reasoning behind a decision as much as the decision itself, and to design
                for the person actually using the product rather than the one I imagined.
              </p>
              <p>
                Now I'm a research assistant in Lehigh's DiFranzo Lab, where I'm designing a design 
                fiction study that uses a speculative AI dating-profile experience to explore how people 
                react when AI steps into personal self-presentation. I'm also a grader for CSE 216 Software 
                Engineering. That research, along with being named a Lehigh nominee for the Goldwater Scholarship
                 as a sophomore, is pushing me toward a PhD or Master's in HCI, human-centered computing, or 
                 information science. I also serve as president of Lehigh's AI Club, one of the largest student
                  organizations on campus.
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
