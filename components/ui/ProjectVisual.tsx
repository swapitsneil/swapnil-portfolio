"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

const accentClassMap: Record<string, string> = {
  "google-play-analytics": "project-visual-blue",
  "autonomous-data-analyst": "project-visual-purple",
  "crypto-intelligence-platform": "project-visual-purple",
  "ecommerce-advanced-analytics": "project-visual-green",
  "amazon-prime-analytics": "project-visual-blue",
  "insurance-lead-analytics": "project-visual-green",
  "spotify-schema-design": "project-visual-purple",
  "healthcare-analysis": "project-visual-blue",
};

const barHeights = [65, 82, 58, 91, 74, 88, 62, 95, 70, 85];

export default function ProjectVisual({ project, className }: ProjectVisualProps) {
  const accentClass =
    accentClassMap[project.id] ?? "project-visual-blue";

  return (
    <div
      className={cn(
        "relative h-full min-h-[280px] w-full lg:min-h-[360px]",
        accentClass,
        className
      )}
    >
      <div className="project-visual-glow pointer-events-none absolute inset-0 scale-105 rounded-3xl blur-2xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 truncate text-xs text-muted-foreground">
            {project.title} — Dashboard
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.slice(0, 3).map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-xl border border-border bg-background/60 p-3"
              >
                <p className="font-heading text-sm font-bold text-white">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-1 items-end gap-1">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.5 }}
                className="project-visual-bar flex-1 origin-bottom rounded-t-sm"
                data-height={height}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="project-visual-tag rounded-md px-2 py-0.5 text-[10px] font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
