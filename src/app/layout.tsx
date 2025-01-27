import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layouts/header";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/layouts/footer";
import SalesIQ from "@/components/shared/salesiq";
import { Instrument_Sans, Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const uncutSans = localFont({
  src: [
    {
      path: "../fonts/uncut/Uncut-Sans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/uncut/Uncut-Sans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/uncut/Uncut-Sans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-uncut-sans",
  display: "swap",
});

const instrument = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Coderbrix - Bricks of code, build to last",
  description:
    "Coderbrix is a professional software agency specializing in scalable web, mobile, and backend development. We deliver tailored solutions to meet your business goals. Let's collaborate to bring your bricks of vision to life.",
  keywords:
    "Coderbrix, coderbrix, codebrix, codebrics, coderbric, coderbricks, software agency, software solutions, web development, mobile development, scalable applications, custom software, digital transformation, IT services, Quality Assurance, QA, Testing, DevOps, Cloud, AWS, Azure, GCP, Google Cloud, Firebase, React, Angular, Node.js, Express, NestJS, Next.js, Gatsby, GraphQL, TypeScript, JavaScript, HTML, CSS, SCSS, SASS, Tailwind CSS, Material UI, Ant Design, Bootstrap, MongoDB, MySQL, PostgreSQL, Firebase, Firestore, Redis, Docker, Kubernetes, CI/CD, Jenkins, GitLab, GitHub, Bitbucket, Jira, Confluence, Slack, Zoom, Microsoft Teams, Google Meet, Zoom, Zoom Meetings, Zoom Webinars, Zoom Integration, Zoom API, Zoom SDK, Zoom App, Zoom Development, Zoom Customization, Zoom Solutions, Zoom",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Coderbrix" />
        <meta
          name="google-site-verification"
          content="1aZpThTY80rEsfEXNzPuRR8S2GWUZdJpNsCqk3j7lZg"
        />
        <meta name="msvalidate.01" content="5A115588A060E527F51843FF3AA88CFE" />
        <link rel="canonical" href="https://www.coderbrix.com" />
        <meta
          property="og:title"
          content="Coderbrix - Bricks of code, build to last"
        />
        <meta
          property="og:description"
          content="Let's collaborate to bring your bricks of vision to life with Coderbrix. 🚀 Ready to dive in?"
        />
        <meta
          property="og:image"
          content="https://www.coderbrix.com/og:coderbrix.png"
        />
        <meta property="og:url" content="https://www.coderbrix.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Coderbrix" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@coderbrix" />
        <meta
          name="twitter:title"
          content="Coderbrix - Bricks of code, build to last"
        />
        <meta
          name="twitter:description"
          content="Let's collaborate to bring your bricks of vision to life with Coderbrix. 🚀 Ready to dive in?"
        />
        <meta
          name="twitter:image"
          content="https://www.coderbrix.com/og:coderbrix.png"
        />

        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${instrument.className} ${manrope.variable} ${uncutSans.variable}`}
      >
        <Header />
        {children}
        <Footer />

        <GoogleAnalytics gaId="G-TQQE5WRG1F" />
        <Analytics />
        <SpeedInsights />

        <Script id="organization-json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.coderbrix.com",
            logo: "https://www.coderbrix.com/apple-icon.png",
          })}
        </Script>

        <SalesIQ />
      </body>
    </html>
  );
}
