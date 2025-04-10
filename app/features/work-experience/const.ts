export type WorkExperienceData = {
  companyName: string
  role: string
  techStack?: string[]
  description: string
  date: string
}

export const WORK_EXPERIENCE_DATA: WorkExperienceData[] = [
  {
    companyName: 'Serial Affinity',
    role: 'Senior Full Stack Engineer',
    techStack: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
    description: 'Test test test',
    date: 'June 2023 - Present'
  },
  {
    companyName: 'Serial Affinity',
    role: 'Full Stack Engineer',
    description: 'Test test test',
    date: 'March 2020 - June 2023'
  },
  {
    companyName: 'My1Login',
    role: 'Graduate Full Stack Engineer',
    description: 'Test test test',
    date: 'September 2017 - March 2020'
  }
]
