import "./globals.css";
import localFont from "next/font/local";
import { metadata } from "./metadata";
export { metadata };

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josué Perrault",
  jobTitle: "Développeur Web & Étudiant à l'ESGI Rennes en Ingénierie du Web",
  url: "https://portfolio-josue.com",
  sameAs: [
    "https://github.com/josueprlt",
    "https://www.linkedin.com/in/josué-perrault-2a663a265/"
  ],
  knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "ESGI Rennes"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
        suppressHydrationWarning
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}