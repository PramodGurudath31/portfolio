"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center section-padding lg:pl-0">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-hover/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/5 via-transparent to-accent-hover/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight text-heading md:text-7xl"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="gradient-text">{profile.name.split(" ")[1]}</span>.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-3xl font-semibold text-text md:text-5xl"
        >
          I ensure AI products ship with{" "}
          <span className="text-heading">confidence</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 max-w-xl text-lg leading-relaxed text-text"
        >
          {profile.tagline} Senior QA Automation Engineer with 13+ years
          architecting scalable test frameworks and leading quality strategy
          for Generative AI platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="#contact">Get In Touch</Button>
          <Button variant="secondary" href={profile.resumePath} download>
            <FileDown size={16} />
            Download Resume
          </Button>
          <Button
            variant="ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
