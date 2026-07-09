"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function Education() {
  return (
    <section id="formacao" className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Formação Acadêmica
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {resume.education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card>
                  <span className="inline-block text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full mb-3">
                    {edu.status}
                  </span>
                  <h3 className="font-display font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-accent text-sm font-medium mb-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-muted/60">{edu.period}</p>
                  {edu.estimatedEnd && (
                    <p className="text-xs font-mono text-muted/50 mt-0.5">
                      Conclusão estimada: {edu.estimatedEnd}
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="pt-8 border-t border-border/50"
          >
            <a
              href="https://www.linkedin.com/in/daniel-sebastian-nc/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
            >
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                Formação Complementar &amp; Certificações
              </h3>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted group-hover:text-accent transition-colors"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <p className="text-muted text-sm mt-1">Ver todas as certificações no LinkedIn →</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
