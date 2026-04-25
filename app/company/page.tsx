import Link from "next/link";

const companies = [
  { slug: "acme-inc", name: "Acme Inc." },
  { slug: "globex", name: "Globex" },
  { slug: "initech", name: "Initech" }
];

export default function CompanyIndexPage() {
  return (
    <main>
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.slug}>
            <Link href={`/company/${company.slug}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </main>
  );
}
