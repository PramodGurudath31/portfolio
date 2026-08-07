"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  id,
  number,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 scroll-mt-24", className)}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-sm text-accent">{number}.</span>
        <h2 className="text-2xl font-semibold text-heading md:text-3xl">
          {title}
        </h2>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent sm:block" />
      </div>
      {subtitle && (
        <p className="max-w-2xl text-text">{subtitle}</p>
      )}
    </motion.div>
  );
}
