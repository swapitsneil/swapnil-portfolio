"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { GitHubIcon } from "@/components/icons/SocialIcons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        badge="Selected Work"
        badgeColor="bg-primary"
        title={
          <>
            Projects that <span className="gradient-text">ship</span>
          </>
        }
        description="End-to-end data products — from raw ingestion to business insights. Each project solves a real problem with measurable impact."
      />

      <div className="flex flex-col gap-10 lg:gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 flex justify-center"
      >
        <Button
          href="https://github.com/swapitsneil"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          icon={<GitHubIcon size={16} />}
          iconRight={<ExternalLink size={14} />}
        >
          View all on GitHub
        </Button>
      </motion.div>
    </Section>
  );
}
