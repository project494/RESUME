import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RESUME | Software Engineer",
    template: "%s | RESUME"
  },
  description:
    "Professional portfolio and resume site featuring projects, experience, and contact details.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "RESUME | Software Engineer",
    description:
      "Professional portfolio and resume site featuring projects, experience, and contact details.",
    siteName: "RESUME"
  },
  twitter: {
    card: "summary_large_image",
    title: "RESUME | Software Engineer",
    description:
      "Professional portfolio and resume site featuring projects, experience, and contact details."
  }
};

export default function RootLayout({
  children
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resume Web App',
  description: 'A simple resume and experience website built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <body>
        <header>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/experience/acme">Experience</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <small>© {new Date().getFullYear()} Resume Web App</small>
        </footer>
      </body>
    </html>
  );
}
