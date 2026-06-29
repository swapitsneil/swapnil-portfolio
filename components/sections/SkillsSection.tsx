"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, { dot: string; badge: string }> = {
  Languages: {
    dot: "bg-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]",
    badge: "skill-badge-blue",
  },
  Databases: {
    dot: "bg-[#8B5CF6] shadow-[0_0_8px_rgba(139,92,246,0.5)]",
    badge: "skill-badge-purple",
  },
  Analytics: {
    dot: "bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    badge: "skill-badge-green",
  },
  Visualization: {
    dot: "bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]",
    badge: "skill-badge-amber",
  },
  "AI & LLMs": {
    dot: "bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.5)]",
    badge: "skill-badge-cyan",
  },
  Development: {
    dot: "bg-[#F87171] shadow-[0_0_8px_rgba(248,113,113,0.5)]",
    badge: "skill-badge-red",
  },
};

const certifications = [
  "HackerRank Python (Intermediate)",
  "HackerRank SQL (Intermediate)",
  "GenAI for Beginners — Great Learning",
  "3× National Hackathons",
  "2× International Hackathons (Devpost)",
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader
        badge="Technical Skills"
        badgeColor="bg-[#10B981]"
        title={
          <>
            Tools of the <span className="gradient-text">trade</span>
          </>
        }
        description="A curated stack built for modern data work — from SQL pipelines to Gemini AI agents."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
        {skillCategories.map((category, i) => {
          const styles =
            categoryStyles[category.name] ?? categoryStyles.Languages;

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-base card-hover flex h-full min-h-[180px] flex-col"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className={cn("h-2.5 w-2.5 shrink-0 rounded-full", styles.dot)}
                  aria-hidden="true"
                />
                <h3 className="font-heading text-sm font-bold tracking-wider text-white uppercase">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-wrap content-start gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={cn(
                      "cursor-default rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                      styles.badge
                    )}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="card-base mt-16 sm:mt-20"
      >
        <h3 className="font-heading mb-5 flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase">
          <span
            className="h-2.5 w-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            aria-hidden="true"
          />
          Certifications & Achievements
        </h3>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-background/50 px-3 py-2 text-xs font-medium text-muted-foreground"
            >
              <span className="text-[#F59E0B]" aria-hidden="true">
                ✓
              </span>
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
