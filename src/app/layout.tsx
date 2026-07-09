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
  title: "Daniel Sebastian — Desenvolvedor Full Stack | Java · C# · .NET | Angular · React · Next.js",
  description:
    "Portfólio de Daniel Sebastian Nunes Cavalcanti. Desenvolvedor Full Stack com experiência em Java, Spring Boot, C# e .NET no backend, e Angular, React e Next.js no frontend. Atualmente no Moura Tech – Grupo Moura.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Daniel Sebastian — Desenvolvedor Full Stack",
    description:
      "Backend com Java, Spring Boot, C# e .NET. Frontend com Angular, React e Next.js. Portfólio de Daniel Sebastian Nunes Cavalcanti.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Sebastian — Desenvolvedor Full Stack",
    description:
      "Backend com Java, Spring Boot, C# e .NET. Frontend com Angular, React e Next.js.",
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
