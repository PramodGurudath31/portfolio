"use client";

import { Award } from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <AnimatedSection className="section-padding">
      <SectionHeading
        id="certifications"
        number="05"
        title="Certifications"
        subtitle="Professional credentials in agile leadership and AI quality engineering."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <AnimatedItem key={cert.title}>
            <GlassCard className="group flex items-start gap-4">
              <div className="rounded-lg border border-accent/20 bg-accent/5 p-2.5 transition-colors group-hover:border-accent/40">
                <Award size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-heading">
                  {cert.title}
                </h3>
                <p className="text-sm text-text">
                  {cert.issuer}
                </p>
                <span className="mt-1 inline-block font-mono text-xs text-muted">
                  {cert.category}
                </span>
              </div>
            </GlassCard>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
