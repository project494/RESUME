import Link from 'next/link';

import { experience } from '../../data/experience';

const formatDate = (date: string | null) => {
  if (!date) {
    return 'Present';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));
};

const sortByMostRecent = (a: (typeof experience)[number], b: (typeof experience)[number]) => {
  const aEnd = a.endDate ? new Date(a.endDate).getTime() : Number.POSITIVE_INFINITY;
  const bEnd = b.endDate ? new Date(b.endDate).getTime() : Number.POSITIVE_INFINITY;

  if (aEnd !== bEnd) {
    return bEnd - aEnd;
  }

  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
};

export default function ExperiencePage() {
  const sortedExperience = [...experience].sort(sortByMostRecent);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Experience</h1>

      <ul className="space-y-4">
        {sortedExperience.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/experience/${item.slug}`}
              className="block rounded-lg border border-neutral-200 p-5 transition hover:border-neutral-300 hover:bg-neutral-50"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold leading-tight">{item.company}</h2>
                  <p className="text-sm text-neutral-600">{item.role}</p>
                </div>
                <p className="text-sm text-neutral-500">
                  {formatDate(item.startDate)} – {formatDate(item.endDate)}
                </p>
              </div>
              <p className="mt-3 text-sm text-neutral-700">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
