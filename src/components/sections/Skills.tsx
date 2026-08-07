"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/profile";

export function Skills() {
  return (
    <AnimatedSection className="section-padding">
      <SectionHeading
        id="skills"
        number="04"
        title="Skills & Technologies"
        subtitle="Tools and frameworks I use to build quality into every release."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <AnimatedItem key={category.title}>
            <GlassCard hover={false} className="h-full">
              <h3 className="mb-4 font-mono text-sm text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </GlassCard>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
