"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <AnimatedSection className="section-padding">
      <SectionHeading
        id="experience"
        number="02"
        title="Work Experience"
        subtitle="A timeline of roles driving quality engineering and AI validation."
      />

      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute top-0 left-[19px] hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:block" />

        {experience.map((job) => (
          <AnimatedItem key={job.id}>
            <div className="relative flex flex-col gap-4 md:flex-row md:gap-8">
              {/* Timeline dot */}
              <div className="hidden md:flex md:w-10 md:shrink-0 md:justify-center">
                <div className="relative z-10 mt-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              </div>

              <GlassCard className="flex-1">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-heading">
                      {job.role}
                    </h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-text/70">
                    {job.period}
                  </span>
                </div>

                <p className="mb-4 text-sm text-text">
                  {job.description}
                </p>

                <ul className="mb-4 space-y-2">
                  {job.highlights.slice(0, 4).map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-text"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <SkillBadge key={tech} label={tech} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
