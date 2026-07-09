"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function Projects() {
  return (
    <section id="projetos" className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Projetos Pessoais
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {resume.projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-foreground text-lg">{project.name}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.privateRepo && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-muted/70 bg-border/40 border border-border/60 px-2 py-0.5 rounded-full">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          Git Privado
                        </span>
                      )}
                      {project.githubUrl && !project.privateRepo && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-foreground transition-colors"
                          aria-label={`GitHub — ${project.name}`}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs font-mono text-muted/50 mb-3">{project.period}</p>
                  <p className="text-muted text-sm mb-5 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent/80 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Ver vídeo de funcionamento
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
