import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to RESUME</h1>
      <p>Explore company profiles and project highlights.</p>
      <nav>
        <ul>
          <li>
            <Link href="/company">Companies</Link>
          </li>
          <li>
            <Link href="/company/acme-inc">Featured Company</Link>
          </li>
        </ul>
      </nav>
    </main>
export default function HomePage() {
  return (
    <section>
      <h1>Welcome</h1>
      <p>This is the homepage of your resume web app.</p>
    </section>
  );
}
