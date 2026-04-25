export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  summary: string;
};

export const experience: ExperienceEntry[] = [
  {
    slug: 'acme-corp',
    company: 'Acme Corp',
    role: 'Senior Software Engineer',
    startDate: '2022-06-01',
    endDate: null,
    summary:
      'Built internal platform tooling for product teams, improving release velocity and reliability across services.',
  },
  {
    slug: 'globex',
    company: 'Globex Corporation',
    role: 'Software Engineer',
    startDate: '2019-03-01',
    endDate: '2022-05-31',
    summary:
      'Delivered customer-facing web features and collaborated with design to modernize UX on core workflows.',
  },
  {
    slug: 'initech',
    company: 'Initech',
    role: 'Junior Developer',
    startDate: '2017-07-01',
    endDate: '2019-02-28',
    summary:
      'Implemented backend APIs and automated reporting jobs that reduced manual operations effort.',
  },
];
