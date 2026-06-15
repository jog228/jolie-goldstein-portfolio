export interface Internship {
  role: string
  organization: string
  location: string
  dates: string
  description: string
}

export interface LeadershipItem {
  role: string
  organization: string
  dates: string
}

export const internships: Internship[] = [
  {
    role: "Application Design & Development Intern",
    organization: "Federal Reserve Board > Division of Research & Statistics",
    location: "Washington, DC",
    dates: "Jun 2026 – Present",
    description: "Building SharePoint Online applications for document management and internal communications on the ADD team in Research & Statistics, alongside UX designers, software engineers, and product managers. I gather requirements from stakeholders and translate them into application features in an Agile workflow.",
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
