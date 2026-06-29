"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-12 pb-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-2">
            <span className="font-heading font-bold text-white">
              <span className="text-accent">S</span>wapnil Dadel
            </span>
            <span className="hidden text-border sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="text-sm text-muted-foreground">
              GenAI Data Analyst
            </span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            &copy; {COPYRIGHT_YEAR} &middot; Built with Next.js &amp; Framer Motion
          </p>

          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/swapitsneil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="GitHub"
            >
              <GitHubIcon size={16} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/swapnil-nicolson-dadel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </motion.a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
