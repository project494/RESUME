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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
