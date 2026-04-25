export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  techStack?: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    slug: 'stark-industries',
    company: 'Stark Industries',
    role: 'Senior Software Engineer',
    startDate: '2021-06',
    endDate: '2024-09',
    summary:
      'Led full-stack feature development across customer-facing and internal web applications.',
    highlights: [
      'Delivered a role-based admin platform used by operations, support, and sales teams.',
      'Improved page performance by reducing client-side bundle size and optimizing data fetching.',
      'Partnered with product and design to ship roadmap initiatives on a biweekly cadence.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'wayne-enterprises',
    company: 'Wayne Enterprises',
    role: 'Software Engineer',
    startDate: '2018-03',
    endDate: '2021-05',
    summary:
      'Built and maintained internal tooling that supported operations and analytics workflows.',
    highlights: [
      'Implemented reusable UI components that standardized forms and dashboards across teams.',
      'Developed API integrations to unify customer data from multiple third-party systems.',
      'Authored automated tests and CI checks that reduced regressions in release cycles.',
    ],
    techStack: ['JavaScript', 'React', 'Express', 'MySQL'],
  },
  {
    slug: 'daily-planet',
    company: 'Daily Planet',
    role: 'Junior Web Developer',
    startDate: '2016-01',
    endDate: '2018-02',
    summary:
      'Contributed to frontend features and content workflows for high-traffic editorial pages.',
    highlights: [
      'Implemented responsive article templates used by the newsroom publishing team.',
      'Maintained CMS customization scripts and improved editorial publishing reliability.',
      'Collaborated with senior engineers to address accessibility and cross-browser issues.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
];
