"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export function Experience() {
  return (
    <section id="experiencia" className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Experiência Profissional
          </h2>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-3 hidden sm:block" />

            <div className="space-y-10">
              {resume.experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="sm:pl-10 relative"
                >
                  <div className="hidden sm:block absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-accent bg-background" />

                  <div className="bg-surface border border-border rounded-xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-display font-semibold text-foreground text-lg">
                        {exp.company}
                      </h3>
                      <span className="text-xs font-mono text-muted bg-background border border-border px-2 py-0.5 rounded-md">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-accent text-sm font-medium mb-1">{exp.role}</p>
                    <p className="text-xs font-mono text-muted/60 mb-3">{exp.period}</p>
                    <p className="text-muted text-sm mb-4">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted flex gap-2">
                          <span className="text-accent mt-0.5 shrink-0">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
