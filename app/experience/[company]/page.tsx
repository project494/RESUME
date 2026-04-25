import { notFound } from 'next/navigation';

import { experienceEntries } from '../../../data/experience';

type ExperiencePageProps = {
  params: {
    company: string;
  };
};

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = experienceEntries.find((entry) => entry.slug === params.company);

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <header>
        <h1>{experience.company}</h1>
        <p>{experience.role}</p>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>{experience.summary}</p>
      </section>

      <section>
        <h2>Highlights</h2>
        <ul>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      {experience.techStack?.length ? (
        <section>
          <h2>Tech Stack</h2>
          <ul>
            {experience.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
