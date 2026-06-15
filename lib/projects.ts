export interface Project {
  id: string
  title: string
  year: number
  role: string
  tags: string[]
  summary: string
  problem: string
  process: string
  link?: {
    label: string
    href: string
  }
}

export const projects: Project[] = [
  {
    id: "mathpal",
    title: "MathPal",
    year: 2024,
    role: "Lead Designer & Engineer",
    tags: ["Design Systems", "React", "TypeScript", "Figma"],
    summary:
      "A token-based component library unifying four product teams across a 200-person SaaS company.",
    problem:
      "Four product teams were shipping inconsistent UI — different button styles, conflicting color usage, and duplicated component code scattered across three repos. Users noticed, and it eroded trust in ways that were hard to quantify but easy to feel. Internal estimates put front-end rework at roughly 30% of engineering time.",
    process:
      "Spent two weeks auditing every component across all products: cataloguing overlap, mapping which patterns were structurally necessary versus incidentally similar. Ran workshops with each team's lead designer to surface constraints that hadn't been written down. The key discovery came early — Product A needed dense, scannable data tables; Product B needed accessible, conversational forms. Neither team's assumptions were compatible with the other's, which meant a single shared component set would fail both.",
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
  // },
]
