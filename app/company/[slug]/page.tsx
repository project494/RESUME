import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const companies = {
  "acme-inc": { name: "Acme Inc.", summary: "Worked on API platform reliability." },
  globex: { name: "Globex", summary: "Built analytics dashboards and ETL systems." },
  initech: { name: "Initech", summary: "Led frontend architecture modernization." }
} as const;

type CompanySlug = keyof typeof companies;

export function generateStaticParams() {
  return Object.keys(companies).map((slug) => ({ slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const company = companies[params.slug as CompanySlug];

  if (!company) {
    return { title: "Company Not Found" };
  }

  return {
    title: company.name,
    description: company.summary,
    alternates: {
      canonical: `/company/${params.slug}`
    }
  };
}

export default function CompanyDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const company = companies[params.slug as CompanySlug];

  if (!company) {
    notFound();
  }

  return (
    <main>
      <h1>{company.name}</h1>
      <p>{company.summary}</p>
      <p>
        <Link href="/company">All companies</Link>
      </p>
    </main>
  );
}
