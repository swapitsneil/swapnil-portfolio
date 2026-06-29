"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  BrainCircuit,
  LineChart,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "bi",
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Power BI dashboards, DAX measures, and KPI frameworks that translate complex data into clear executive narratives.",
    accentClass: "feature-accent-blue",
  },
  {
    id: "de",
    icon: Database,
    title: "Data Engineering",
    description:
      "Python ETL workflows, SQL pipelines, and layered data architectures (Bronze → Silver → Gold) for reliable, scalable analytics.",
    accentClass: "feature-accent-purple",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "Generative AI",
    description:
      "LLM-powered analytics, RAG pipelines, AI agents with n8n and CrewAI, and Gemini-integrated market intelligence systems.",
    accentClass: "feature-accent-cyan",
  },
  {
    id: "da",
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Cohort analysis, funnel analysis, customer lifetime value, statistical modelling, and actionable business insights.",
    accentClass: "feature-accent-green",
  },
];

export default function WhatIBuildSection() {
  return (
    <Section>
      <SectionHeader
        badge="What I Build"
        badgeColor="bg-[#8B5CF6]"
        title={
          <>
            From raw data to{" "}
            <span className="gradient-text">real decisions</span>
          </>
        }
        description="Four core disciplines that define my work — each one grounded in production-quality output and measurable business value."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={cn(
                "card-base card-hover group relative flex h-full cursor-default flex-col",
                feature.accentClass
              )}
            >
              <div className="feature-icon mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon
                  size={22}
                  className="feature-icon-svg transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-heading mb-3 text-base font-bold leading-tight text-white">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <div className="feature-accent-line absolute right-6 bottom-0 left-6 h-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
