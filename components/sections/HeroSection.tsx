"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, BarChart2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnalyticsDashboard from "@/components/ui/AnalyticsDashboard";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      <div className="absolute inset-0 grid-bg opacity-100" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto w-full max-w-xl space-y-9 lg:mx-0 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-secondary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Available for opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="gradient-text">Swapnil</span>
                <br />
                <span className="text-white">Nicolson</span>
                <br />
                <span className="text-white">Dadel</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <BarChart2 className="shrink-0 text-accent" size={20} aria-hidden="true" />
              <span className="font-heading text-xl font-semibold text-accent-secondary">
                GenAI Data Analyst
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Building intelligent analytics products using{" "}
              <span className="font-medium text-white">Python</span>,{" "}
              <span className="font-medium text-white">SQL</span>,{" "}
              <span className="font-medium text-white">Power BI</span> and{" "}
              <span className="font-medium text-white">AI</span>. Turning raw
              data into decisions that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <Button
                variant="primary"
                onClick={() => handleScroll("#projects")}
                iconRight={<ArrowRight size={16} />}
              >
                View Projects
              </Button>

              <Button
                href="/resume.pdf"
                download
                variant="secondary"
                icon={<Download size={16} />}
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-1"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="h-px max-w-[60px] flex-1 bg-border" aria-hidden="true" />
              <motion.a
                href="https://github.com/swapitsneil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="rounded-xl border border-border p-2.5 text-muted-foreground transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/swapnil-nicolson-dadel"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="rounded-xl border border-border p-2.5 text-muted-foreground transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <AnalyticsDashboard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-0.5 rounded-full bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </Container>
    </section>
  );
}
