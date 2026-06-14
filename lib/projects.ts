export interface Project {
  id: string
  title: string
  year: number
  role: string
  tags: string[]
  summary: string
  problem: string
  process: string
  decision: string
  outcome: string
  link?: {
    label: string
    href: string
  }
}

export const projects: Project[] = [
  {
    id: "meadow-design-system",
    title: "Meadow Design System",
    year: 2024,
    role: "Lead Designer & Engineer",
    tags: ["Design Systems", "React", "TypeScript", "Figma"],
    summary:
      "A token-based component library unifying four product teams across a 200-person SaaS company.",
    problem:
      "Four product teams were shipping inconsistent UI — different button styles, conflicting color usage, and duplicated component code scattered across three repos. Users noticed, and it eroded trust in ways that were hard to quantify but easy to feel. Internal estimates put front-end rework at roughly 30% of engineering time.",
    process:
      "Spent two weeks auditing every component across all products: cataloguing overlap, mapping which patterns were structurally necessary versus incidentally similar. Ran workshops with each team's lead designer to surface constraints that hadn't been written down. The key discovery came early — Product A needed dense, scannable data tables; Product B needed accessible, conversational forms. Neither team's assumptions were compatible with the other's, which meant a single shared component set would fail both.",
    decision:
      "Rather than forcing convergence at the component level, we designed a two-layer system: a shared primitive layer (color tokens, spacing scale, type scale, motion easing) that every team inherits, plus a pattern library each team can extend without overriding the primitives. This preserved team autonomy where it mattered for product velocity, while enforcing consistency at the level users actually perceive.",
    outcome:
      "Shipped v1 in 12 weeks. Adoption reached 80% across all four products within two quarters, with no mandates — teams adopted because the system solved real problems. Front-end rework time dropped by roughly half. The system now includes 47 components, full dark-mode support, and automated accessibility testing on every pull request.",
    link: {
      label: "View on GitHub",
      href: "https://github.com/TODO",
    },
  },

  // TODO: Add your second project
  // {
  //   id: "project-2",
  //   title: "Project Title",
  //   year: 2023,
  //   role: "Your Role",
  //   tags: ["Tag 1", "Tag 2"],
  //   summary: "One-line summary for the card view.",
  //   problem: "...",
  //   process: "...",
  //   decision: "...",
  //   outcome: "...",
  // },
]
