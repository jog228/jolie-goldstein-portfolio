import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// TODO: Edit these lists to reflect your actual skills
const SKILL_GROUPS = [
  {
    label: 'Engineering',
    items: [
      'TypeScript',
      'React',
      'JavaScript',
      'Firebase / Firestore',
      'Tailwind CSS',
      'Git / GitHub',
    ],
  },
  {
    label: 'Design',
    items: [
      'UX/UI Design',
      'Interaction Design',
      'Visual Identity & Branding',
      'Logo Design',
      'WordPress & SharePoint',
    ],
  },
  {
    label: 'Tools & Process',
    items: [
      'Usability Testing',
      'User Interviews',
      'Qualitative Research',
      'Requirements Gathering',
      'Agile',
    ],
  },
]

export function Skills() {
  return (
    <section className="py-24 border-t border-hairline" aria-labelledby="skills-heading">
      <Container>
        <ScrollReveal>
          <h2
            id="skills-heading"
            className="font-display font-bold text-ink tracking-tight mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {SKILL_GROUPS.map((group, gi) => (
            <ScrollReveal key={group.label} delay={gi * 0.07}>
              <div>
                <p className="font-mono text-2xs tracking-widest uppercase text-muted mb-5">
                  {group.label}
                </p>
                <ul className="space-y-3 list-none">
                  {group.items.map(skill => (
                    <li key={skill} className="text-ink text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
