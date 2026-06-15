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
    role: "UX Research & Design",
    tags: ["UX Research", "Usability Testing", "Generative AI", "Branding"],
    summary:
      "A generative-AI tutor that gives high school students conceptual and metacognitive math support, refined over two rounds of classroom usability testing with teachers and students.",
    problem:
      "Generative-AI tools were arriving in classrooms faster than anyone could tell whether they actually worked for the students using them. MathPal needed to support real math learners (not just demo well) which meant proving its usability and trustworthiness with teachers and students before any classroom rollout.",
    process:
      "I joined MathPal for its second round of usability testing, when the tool went into real classrooms including three 9th-grade teachers and 78 Algebra I students using it for a month. I ran in-school usability interviews, sitting with students and teachers after they'd actually used MathPal to find out what was landing and what wasn't. That's where the most useful feedback came from: students wanted a stuck detection feature that would notice when they were struggling, while teachers wanted more control over managing access during assessments, uploading their own worksheets, seeing analytics on how students were interacting with the tool. I co-authored the published findings, *Exploring User-Centered Design and Usability Testing of MathPal,* in the *Journal of Applied Instructional Design*.",
    link: {
      label: "VRead publication",
      href: "https://jaid.edtechbooks.org/jaid_15_2/swrcpddcag",
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
