"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  badgeColor?: string;
  title: React.ReactNode;
  description: string;
}

export default function SectionHeader({
  badge,
  badgeColor = "bg-primary",
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center sm:mb-16"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
        <span className={`h-1.5 w-1.5 rounded-full ${badgeColor}`} />
        {badge}
      </div>
      <h2 className="font-heading mb-6 text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
