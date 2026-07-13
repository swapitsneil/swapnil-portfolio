"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "swapnilnicolson.201@gmail.com",
    href: "mailto:swapnilnicolson.201@gmail.com",
    icon: Mail,
    iconClass: "contact-icon-blue",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/swapitsneil",
    href: "https://github.com/swapitsneil",
    icon: GitHubIcon,
    iconClass: "contact-icon-neutral",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/swapnil-nicolson-dadel",
    href: "https://www.linkedin.com/in/swapnil-nicolson-dadel",
    icon: LinkedInIcon,
    iconClass: "contact-icon-linkedin",
  },
];

export default function ContactSection() {
  return (
    <Section
      id="contact"
      className="pb-28"
      containerClassName="relative"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center sm:mb-20"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Open to opportunities
        </div>

        <h2 className="font-heading mb-6 text-4xl leading-[1.1] font-bold text-white sm:text-5xl">
          Let&apos;s Build <span className="gradient-text">Something</span>
          <br />
          Amazing.
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Whether you have a data challenge, a product idea, or just want to
          connect &mdash; I&apos;d love to hear from you. Always open to
          interesting conversations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="mailto:swapnilnicolson.201@gmail.com"
            variant="primary"
            icon={<Mail size={18} />}
            iconRight={<ArrowRight size={16} />}
          >
            Send me an email
          </Button>
          <Button
            href="/data_analyst_resume_2026_july.pdf"
            download
            variant="secondary"
            icon={<Download size={18} />}
          >
            Download Data Analyst Resume · July 2026
          </Button>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
        {contactLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id !== "email" ? "_blank" : undefined}
              rel={link.id !== "email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="contact-card group md:flex-col md:items-start"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${link.iconClass}`}
              >
                <Icon
                  size={18}
                  className="text-muted-foreground transition-colors group-hover:text-white"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-xs tracking-wider text-muted-foreground uppercase">
                  {link.label}
                </p>
                <p className="truncate text-sm font-medium text-white">
                  {link.value}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent md:mt-auto"
                aria-hidden="true"
              />
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
