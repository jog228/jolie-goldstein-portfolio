// Project — a specific deliverable, always produced under a parent Experience.
export interface Project {
  id: string
  title: string
  year: number
  tags: string[]
  summary: string
  problem: string
  process: string
  link?: {
    label: string
    href: string
  }
}

// Experience — a defined engagement (internship, program, freelance practice).
// Its `projects` are the concrete things built during that engagement.
export interface Experience {
  id: string
  role: string
  organization: string
  location: string
  dates: string
  description: string
  projects: Project[]
}

export interface LeadershipItem {
  role: string
  organization: string
  dates: string
}

export const experience: Experience[] = [
  {
    id: "federal-reserve",
    role: "Application Design & Development Intern",
    organization: "Federal Reserve Board · Division of Research & Statistics",
    location: "Washington, DC",
    dates: "Jun 2026 – Aug 2026",
    description: "Scoped, designed, and built Knowledge Exchange, a full-stack Flask/PostgreSQL platform replacing an aging Drupal tool for internal knowledge-sharing across the Board. I wrote the design document, prioritized the feature set, built the application solo, and led usability testing with real users in the final weeks. Alongside that, I contributed to the division's SharePoint Online migration and day-to-day requests for the R&S division site, working on a cross-functional team of UX designers, engineers, and product managers in an Agile workflow.",
    projects: [
      {
        id: "intelswap",
        title: "Intelswap",
        year: 2026,
        tags: ["Full-Stack", "Flask", "PostgreSQL", "UX Research"],
        summary:
          "A full-stack internal knowledge-sharing platform built during a Federal Reserve Board internship, later rebuilt as a standalone portfolio project.",
        problem:
          "The Federal Reserve Board's internal knowledge-sharing tool ran on Drupal, which the division was retiring, and there was no clear plan for what would replace it. Employees needed a place to post questions, share working code, and find answers other people had already worked out, without losing that history when Drupal came down.",
        process:
          "I scoped the rebuild myself: wrote the design document, prioritized which features actually mattered, and built the full application in Flask and PostgreSQL from the ground up, including posts, tagged questions, comments that support inline code and file attachments, favoriting, archiving, and a personal profile with post history. I ran usability testing with real employees in the final weeks, walking them through tasks like posting a question, finding it again later, and referring a colleague to it, then used that feedback to adjust the interface. After the internship, I rebuilt the project from scratch as a standalone portfolio piece: replaced the Fed's internal SSO with a session-based demo login, removed every Fed-specific reference from the templates and rewrote the database layer, and moved configuration into environment variables so anyone can run it locally.",
        link: {
          label: "View on GitHub",
          href: "https://github.com/jog228/intelswap",
        },
      },
    ],
  },

  {
    id: "difranzo-lab",
    role: "Undergraduate Research Assistant",
    organization: "DiFranzo Lab (Human-Computer Interaction), Lehigh University",
    location: "Bethlehem, PA",
    dates: "Jan 2026 – Present",
    description: "This ongoing research investigates how giving users control over AI explanation depth affects both cognitive trust and cognitive load when working with AI coding assistants. The planned study uses a between-subjects design, where CS and engineering students will either be assigned a fixed explanation level or given a toggle to choose between minimal, explanatory, and exploratory explanations while completing coding tasks on a custom research platform. Currently in the design and measurement-selection phase, the project treats trust and cognitive load as parallel outcomes of interface design rather than assuming one causes the other.",
    projects: [],
  },

  {
    id: "creative-inquiry",
    role: "Global Social Impact / Continuing Impact Fellow",
    organization: "Creative Inquiry Program, Lehigh University",
    location: "Bethlehem, PA",
    dates: "JAN 2025 - PRESENT",
    description: "Ongoing UX research through Lehigh's Creative Inquiry program: usability testing and design work on two AI-powered learning tools, MathPal and iCodePal, including in-classroom interviews with real students and teachers.",
    projects: [
      {
        id: "mathpal",
        title: "MathPal",
        year: 2025,
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
        year: 2026,
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
    ],
  },

  {
    id: "freelance",
    role: "Freelance Web Designer",
    organization: "Independent",
    location: "Remote",
    dates: "2024 – 2025",
    description: "Independent freelance web design work for two small businesses: brand identity and full site builds for 81 North, an AI-driven recruitment startup, and Your Fine Trip, a luxury travel advisor.",
    projects: [
      {
        id: "81-north",
        title: "81 North",
        year: 2024,
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
        id: "your-fine-trip",
        title: "Your Fine Trip",
        year: 2025,
        tags: ["Web Design", "Branding", "Visual Identity"],
        summary:
          "Brand identity and website for an independent luxury travel advisor, built freelance from logo to launch.",
        problem:
          "An independent travel advisor needed a professional online presence to establish her brand and give prospective clients an easy way to learn about her and get in touch. As a solo business, she needed something polished but simple, a site that made a strong first impression without becoming a maintenance burden.",
        process:
          "I designed the brand and logo and built the site on WordPress: a clean, three-page presence (home, about, and contact) focused on making a personal, design-forward first impression for prospective travelers. I leaned on my graphic design background to set the visual identity, choosing the type, color, and imagery to feel warm and high-end rather than generic. I built it to be straightforward to maintain, then handed the finished site off to the client to run on her own.",
        link: {
          label: "Visit Your Fine Trip",
          href: "https://yourfinetrip.com/",
        },
      },
    ],
  },
]

export const leadership: LeadershipItem[] = [
  {
    role: "President",
    organization: "AI Club",
    dates: "May 2026 – Present",
  },

  {
    role: "ChatCSE Ambassador",
    organization: "Lehigh CSE Department",
    dates: "Oct 2025 – Present",
  },

  {
    role: "Student Engagement Officer",
    organization: "Lehigh Women in Computer Science (WiCS)",
    dates: "Aug 2025 – Present",
  },

  {
    role: "Treasurer",
    organization: "Lehigh AI Club",
    dates: "Aug 2025 – April 2026",
  },

]
