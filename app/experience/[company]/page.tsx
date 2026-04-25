interface ExperiencePageProps {
  params: Promise<{ company: string }>;
}

export default async function ExperienceCompanyPage({ params }: ExperiencePageProps) {
  const { company } = await params;

  return (
    <section>
      <h1>Experience: {decodeURIComponent(company)}</h1>
      <p>Use this page to describe your accomplishments at this company.</p>
    </section>
  );
}
