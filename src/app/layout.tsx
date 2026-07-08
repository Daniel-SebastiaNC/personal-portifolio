import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daniel Sebastian — Desenvolvedor Java Spring Backend | Angular | Next.js",
  description:
    "Portfólio de Daniel Sebastian Nunes Cavalcanti. Desenvolvedor backend com foco em Java e Spring Boot, com experiência em Angular, React e Next.js.",
  openGraph: {
    title: "Daniel Sebastian — Desenvolvedor Backend",
    description:
      "Portfólio de Daniel Sebastian Nunes Cavalcanti. Backend Java/Spring, fullstack com Angular e Next.js.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Sebastian — Desenvolvedor Backend",
    description: "Portfólio de Daniel Sebastian Nunes Cavalcanti.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
