"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import ProjectVisual from "@/components/ui/ProjectVisual";
import Button from "@/components/ui/Button";
import { GitHubIcon } from "@/components/icons/SocialIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectDetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="project-card-shell card-base card-hover overflow-hidden"
    >
      <div
        className={cn(
          "grid min-h-[500px] grid-cols-1 items-stretch lg:min-h-[540px] lg:grid-cols-2 lg:gap-0",
          reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
        )}
      >
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className="mb-6 h-px w-12 bg-accent" aria-hidden="true" />

          <h3 className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>

          <div className="mb-8 space-y-5 sm:space-y-6">
            <ProjectDetailBlock label="Business Problem">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>
            </ProjectDetailBlock>

            <ProjectDetailBlock label="Dataset">
              <ul className="space-y-1.5">
                {project.metrics.slice(0, 2).map((metric) => (
                  <li
                    key={metric.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-accent" aria-hidden="true">
                      •
                    </span>
                    <span>
                      {metric.value} {metric.label}
                    </span>
                  </li>
                ))}
              </ul>
            </ProjectDetailBlock>

            <ProjectDetailBlock label="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ProjectDetailBlock>

            <ProjectDetailBlock label="KPIs">
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-background/60 p-3"
                  >
                    <p className="font-heading text-sm font-bold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </ProjectDetailBlock>

            <ProjectDetailBlock label="Business Impact">
              <ul className="space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 text-accent" aria-hidden="true">
                      ▸
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </ProjectDetailBlock>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<GitHubIcon size={16} />}
            >
              GitHub
            </Button>

            {project.demo && (
              <Button
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={<ExternalLink size={16} />}
              >
                Live Demo
              </Button>
            )}

            {project.docs && project.docs !== "#" && (
              <Button
                href={project.docs}
                variant="secondary"
                icon={<FileText size={16} />}
              >
                Docs
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center bg-background/40 p-8 sm:p-10 lg:p-12">
          <ProjectVisual project={project} />
        </div>
      </div>
    </motion.article>
  );
}
