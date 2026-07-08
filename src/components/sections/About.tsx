"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <section id="sobre" className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Sobre
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted leading-relaxed text-base mb-8">
                {resume.about}
              </p>

              <div>
                <p className="text-xs font-mono text-muted/60 uppercase tracking-widest mb-3">Idiomas</p>
                <div className="flex gap-3">
                  {resume.languages.map((lang) => (
                    <div key={lang.name} className="text-sm text-foreground">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted ml-1">— {lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-muted/60 uppercase tracking-widest mb-4">Stack principal</p>
              <div className="flex flex-wrap gap-2">
                {resume.mainStack.map((tech) => (
                  <Badge key={tech} label={tech} color="blue" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
