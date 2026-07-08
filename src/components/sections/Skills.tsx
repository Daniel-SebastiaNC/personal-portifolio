"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Badge } from "@/components/ui/Badge";

const categoryColors: Record<string, "blue" | "green" | "purple" | "orange" | "red" | "default"> = {
  "Backend": "blue",
  "Frontend": "purple",
  "Mobile / Embarcado": "orange",
  "DevOps / Infra": "green",
  "Banco de Dados": "default",
  "Testes": "red",
  "Metodologias": "default",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-surface border border-border rounded-xl p-5"
              >
                <p className="text-xs font-mono text-muted/60 uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      label={skill}
                      color={categoryColors[group.category] ?? "default"}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
