"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileDown, Menu, X } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavContent = () => (
    <>
      <div className="mb-8">
        <a href="#" className="group inline-block">
          <span className="font-mono text-2xl font-bold text-heading transition-colors group-hover:text-accent">
            PG
          </span>
        </a>
      </div>

      <nav className="hidden lg:block">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group flex items-center gap-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-accent" : "text-text hover:text-accent"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs transition-all",
                      isActive ? "text-accent" : "text-text/60 group-hover:text-accent"
                    )}
                  >
                    {String(navLinks.indexOf(link) + 1).padStart(2, "0")}.
                  </span>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto hidden flex-col gap-3 lg:flex">
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={profile.resumePath}
            download
            className="text-text transition-colors hover:text-accent"
            aria-label="Download resume"
          >
            <FileDown size={20} />
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile header */}
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-xl lg:hidden">
        <a href="#" className="font-mono text-xl font-bold text-heading">
          PG
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-heading"
          aria-label="Toggle menu"
        >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-background/95 pt-20 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-2 px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-medium text-heading transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex gap-4 border-t border-border pt-6">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                LinkedIn
              </a>
              <a href={profile.resumePath} download className="text-accent">
                Resume
              </a>
            </div>
          </nav>
        </motion.div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden h-screen w-[280px] flex-col border-r border-border bg-background/50 px-8 py-16 backdrop-blur-sm lg:flex">
        <NavContent />
      </aside>
    </>
  );
}
