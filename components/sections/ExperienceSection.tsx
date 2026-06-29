"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { MapPin, Calendar, Building2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        badge="Experience"
        badgeColor="bg-[#F59E0B]"
        title={
          <>
            Where I&apos;ve <span className="gradient-text">worked</span>
          </>
        }
        description="Hands-on internships that sharpened my ability to deliver data products under real business constraints."
      />

      <div className="relative">
        <div
          className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-8"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="grid grid-cols-[3rem_1fr] items-start gap-4 sm:grid-cols-[4rem_1fr] sm:gap-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2, type: "spring" }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <Building2 size={18} className="text-accent" aria-hidden="true" />
              </motion.div>

              <div className="card-base card-hover">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-accent">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + j * 0.06 + 0.3 }}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 shrink-0 text-xs text-accent" aria-hidden="true">
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
