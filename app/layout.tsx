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
