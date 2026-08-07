"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, profile } from "@/data/profile";

export function About() {
  return (
    <AnimatedSection className="section-padding">
      <SectionHeading
        id="about"
        number="01"
        title="About Me"
        subtitle="Passionate about embedding quality into every layer of the software lifecycle."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <AnimatedItem className="lg:col-span-2">
          <GlassCard hover={false}>
            <p className="mb-4 leading-relaxed text-text">
              {profile.summary}
            </p>
            <p className="leading-relaxed text-text">
              Passionate about architecting scalable automation frameworks,
              embedding quality through CI/CD integration, and leading global QA
              teams to deliver secure, scalable, and high-performing AI-powered
              solutions using technologies such as Genesys Cloud, Azure,
              Deepgram, and AKKA.
            </p>
          </GlassCard>
        </AnimatedItem>

        <AnimatedItem>
          <GlassCard hover={false} className="h-full">
            <h3 className="mb-4 font-mono text-sm text-accent">Quick Facts</h3>
            <ul className="space-y-3">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs text-text/60">Education</p>
              <p className="mt-1 text-sm font-medium text-heading">
                {education.degree}
              </p>
              <p className="text-sm text-text">
                {education.institution}
              </p>
            </div>
          </GlassCard>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
