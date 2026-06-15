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

export const internship: Internship = {
  role: "Application Design & Development Intern",
  organization: "Federal Reserve Board — Division of Research & Statistics",
  location: "Washington, DC",
  dates: "Jun 2026 – Present",
  description:
    "Building and supporting SharePoint Online applications for document management and internal communications, on a cross-functional team of UX designers, engineers, and product managers — gathering requirements from stakeholders and turning them into features in an Agile workflow.",
}

export const leadership: LeadershipItem[] = [
  {
    role: "President (previously Treasurer)",
    organization: "Lehigh AI Club",
    dates: "Aug 2025 – Present",
  },
  {
    role: "Student Engagement Officer",
    organization: "Women in Computer Science (WiCS)",
    dates: "Aug 2025 – Present",
  },
  {
    role: "ChatCSE Ambassador",
    organization: "Lehigh CSE Department",
    dates: "Oct 2025 – Present",
  },
]
