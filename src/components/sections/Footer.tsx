import { resume } from "@/data/resume";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs font-mono text-muted/50">
          © {new Date().getFullYear()} {resume.name.split(" ").slice(0, 2).join(" ")} · Feito com Next.js
        </p>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted/60 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
