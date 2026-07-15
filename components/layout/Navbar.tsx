"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 right-0 left-0 z-50 h-[72px] border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-background/60 backdrop-blur-md"
        }`}
      >
        <Container className="flex h-full items-center">
          <nav className="relative flex w-full items-center justify-between">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              whileHover={{ scale: 1.02 }}
              className="relative z-10 font-heading text-lg font-bold tracking-tight text-white"
            >
              <span className="text-accent">S</span>wapnil
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                ·dev
              </span>
            </motion.a>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="nav-link"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <div className="hidden lg:block">
                <Button
                  href="/Swapnil_Dadel_Resume.pdf"
                  download
                  variant="primary"
                  icon={<Download size={15} />}
                  className="h-10 px-4"
                >
                  Resume
                </Button>
              </div>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-2 text-muted-foreground transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[84px] right-4 left-4 z-50 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl lg:hidden"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="nav-link px-4 py-3"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="my-2 h-px bg-border" />

                <Button
                  href="/Swapnil_Dadel_Resume.pdf"
                  download
                  variant="primary"
                  icon={<Download size={15} />}
                  className="w-full"
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
