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
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-sm font-mono text-muted/60 uppercase tracking-widest mb-5">
              Formação Complementar
            </h3>
            <div className="space-y-3">
              {resume.complementaryEducation.map((item) => (
                <div key={item.title} className="flex gap-3 text-sm">
                  <span className="text-accent shrink-0 mt-0.5">›</span>
                  <span className="text-muted">
                    {item.title}
                    <span className="text-muted/50 ml-2 font-mono text-xs">
                      {item.provider} · {item.year}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
