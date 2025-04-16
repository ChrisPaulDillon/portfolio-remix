export type WorkExperienceData = {
  companyName: string
  role: string
  description: string
  date: string
  responsibilities: string[]
  technologies: string[]
}

export const WORK_EXPERIENCE_DATA: WorkExperienceData[] = [
  {
    companyName: 'Serial Affinity',
    role: 'Senior Full Stack Engineer',
    description: 'Leading development of enterprise-scale web applications and mentoring junior developers.',
    date: 'June 2023 - Present',
    responsibilities: [
      'Architected and implemented scalable microservices using .NET Core and React',
      'Led technical design discussions and code reviews for team of 5 developers',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted technical interviews'
    ],
    technologies: ['C#', '.NET Core', 'React', 'TypeScript', 'Azure', 'Docker']
  },
  {
    companyName: 'Serial Affinity',
    role: 'Full Stack Engineer',
    description: 'Developed and maintained complex web applications using modern technologies.',
    date: 'March 2020 - June 2023',
    responsibilities: [
      'Developed full-stack features using React and .NET Core',
      'Optimized database performance reducing query times by 60%',
      'Implemented real-time data synchronization using SignalR',
      'Contributed to architecture decisions and technical documentation'
    ],
    technologies: ['C#', '.NET Core', 'React', 'SQL Server', 'Redis', 'TypeScript']
  },
  {
    companyName: 'My1Login',
    role: 'Graduate Full Stack Engineer',
    description: 'Contributed to identity and access management solutions.',
    date: 'September 2017 - March 2020',
    responsibilities: [
      'Developed secure authentication workflows',
      'Built responsive web interfaces using React',
      'Implemented RESTful APIs using .NET Core',
      'Participated in agile development processes'
    ],
    technologies: ['C#', '.NET Core', 'React', 'OAuth', 'SAML', 'SQL Server']
  }
]