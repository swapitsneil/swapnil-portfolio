"use client";

import { motion } from "framer-motion";
import { educationList } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";

export default function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader
        badge="Education"
        badgeColor="bg-[#8B5CF6]"
        title={
          <>
            Academic <span className="gradient-text">background</span>
          </>
        }
        description="Strong computer science foundations from two institutions, culminating in an M.Tech from BIT Mesra."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {educationList.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="card-base card-hover group flex h-full flex-col hover:border-[#8B5CF6]/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
              <GraduationCap size={22} className="text-[#8B5CF6]" aria-hidden="true" />
            </div>

            <h3 className="font-heading mb-2 text-lg font-bold leading-tight text-white transition-colors duration-200 group-hover:text-[#A78BFA]">
              {edu.degree}
            </h3>

            <p className="mb-auto text-sm font-semibold text-accent-secondary">
              {edu.institution}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <span className="text-sm text-muted-foreground">{edu.period}</span>
              <div className="flex items-center gap-1.5 rounded-lg border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-3 py-1">
                <Award size={12} className="text-[#A78BFA]" aria-hidden="true" />
                <span className="text-xs font-bold text-[#A78BFA]">{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
