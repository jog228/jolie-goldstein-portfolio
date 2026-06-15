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
    id: "81-north",
    title: "81 North",
    year: 2024,
    role: "Website Designer",
    tags: ["Web Design", "Branding", "Content Strategy"],
    summary:
      "Brand identity and a multi-page marketing site for an AI-driven recruitment startup, designed and maintained end to end.",
    problem:
      "81 North needed a credible, professional web presence to introduce an AI-driven recruitment service to two very different audiences at once: job seekers looking for roles and companies looking to hire. The small team also needed a site they could keep current on their own, without a developer on call for every change.",
    process:
      "I designed the brand, including the logo, and built out the full site: home, services, separate job-seeker and hiring pages, interview coaching, and a blog. I structured the pages around the two audiences the business serves, keeping the message clear and distinct for each. I built it on a no-code platform on purpose, so the team could update content and publish new posts themselves rather than depending on a developer for every change. The result is a live business site the company maintains on its own.",
    link: {
      label: "Visit 81 North",
      href: "https://81north.ai/",
    },
  },

  {
    id: "mathpal",
    title: "MathPal",
    year: 2025,
    role: "UX Research & Design",
    tags: ["UX Research", "Usability Testing", "Generative AI", "Branding"],
    summary:
      "A generative-AI tutor that gives high school students conceptual and metacognitive math support, refined over two rounds of classroom usability testing with teachers and students.",
    problem:
      "Generative-AI tools were arriving in classrooms faster than anyone could tell whether they actually worked for the students using them. MathPal needed to support real math learners (not just demo well) which meant proving its usability and trustworthiness with teachers and students before any classroom rollout.",
    process:
      "I joined MathPal for its second round of usability testing, when the tool went into real classrooms including three 9th-grade teachers and 78 Algebra I students using it for a month. I conducted in-school usability interviews, sitting with students and teachers after they'd actually used MathPal to find out what was landing and what wasn't. That's where the most useful feedback came from: students wanted a stuck detection feature that would notice when they were struggling, while teachers wanted more control over managing access during assessments, uploading their own worksheets, seeing analytics on how students were interacting with the tool. I co-authored the published findings, \"Exploring User-Centered Design and Usability Testing of MathPal\", in the Journal of Applied Instructional Design.",
    link: {
      label: "Read publication",
      href: "https://jaid.edtechbooks.org/jaid_15_2/swrcpddcag",
    },
  },

  {
    id: "icodepal",
    title: "iCodePal",
    year: 2025,
    role: "UX Research & Design",
    tags: ["UX Research", "AI in Education", "Coding Education", "Usability Testing"],
    summary:
      "An AI-powered coding companion that gives K-12 learners conceptual and metacognitive support as they learn to program, built for computer science classrooms with the Agastya International Foundation in India.",
    problem:
      "In many under-resourced classrooms, computer science is taught by teachers without formal programming training, in large classes with limited time and shared devices. Students learning to code in Scratch get little conceptual feedback, so they fall back on snapping blocks together at random instead of reasoning through the logic. iCodePal set out to put that missing feedback directly into the editor, without replacing the teacher or requiring infrastructure these schools don't have.",
    process:
      "I designed and built iCodePal as a Chrome extension that works directly inside Scratch, the block-based editor students use in their first year of coding. The heart of it is a scan-based feedback model: rather than monitoring students constantly, iCodePal only reads their code when they click to ask for help. When they do, it pulls a structured snapshot of their Scratch workspace (control flow, variables, how the blocks connect) and returns guidance right inside the editor, without giving away the answer. I made the on-request choice deliberately, to keep students in control and avoid burying them in unsolicited feedback. Because these classrooms share devices and many students don't have email accounts, I built authentication around teacher-generated class and student codes instead of individual logins, backed by a Firebase database that logs each interaction under anonymized IDs. That let me build a teacher dashboard for creating and managing classes while keeping student data structured for engagement insights: all without anyone needing a personal account. Every one of those decisions came out of fieldwork at the Agastya International Foundation in southern India, where I observed classrooms and talked with teachers about what actually constrains them: large classes, limited time, shared devices, and English-centric interfaces.",
    link: {
      label: "Visit iCodePal",
      href: "https://wordpress.lehigh.edu/icodepal/",
    },
  },

  {
    id: "your-fine-trip",
    title: "Your Fine Trip",
    year: 2025,
    role: "Website Designer",
    tags: ["Web Design", "Branding", "Visual Identity"],
    summary:
      "Brand identity and website for an independent luxury travel advisor, built freelance from logo to launch.",
    problem:
      "An independent travel advisor needed a professional online presence to establish her brand and give prospective clients an easy way to learn about her and get in touch. As a solo business, she needed something polished but simple, a site that made a strong first impression without becoming a maintenance burden.",
    process:
      "I designed the brand and logo and built the site on WordPress: a clean, three-page presence (home, about, and contact) focused on making a personal, design-forward first impression for prospective travelers. I leaned on my graphic design background to set the visual identity, choosing the type, color, and imagery to feel warm and high-end rather than generic. I built it to be straightforward to maintain, then handed the finished site off to the client to run on her own.",
    link: {
      label: "Visit site",
      href: "https://yourfinetrip.com/",
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
