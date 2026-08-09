"use client";

import { ExternalLink } from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { automationProjects, projects } from "@/data/profile";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection className="section-padding">
      <SectionHeading
        id="projects"
        number="03"
        title="Featured Projects"
        subtitle="Quality engineering initiatives across AI, automation, and CI/CD."
      />

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <AnimatedItem key={project.id}>
            <GlassCard className="group flex h-full flex-col">
              <h3 className="mb-2 text-lg font-semibold text-heading transition-colors group-hover:text-accent">
                {project.title}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-text">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <SkillBadge key={tag} label={tag} />
                ))}
              </div>
            </GlassCard>
          </AnimatedItem>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="mb-2 font-mono text-sm text-accent">Automation Projects</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text">
          Scalable automation frameworks engineered for web, mobile, and BDD-driven
          workflows — built with modern tooling to maximize coverage, speed, and
          maintainability across enterprise delivery pipelines.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {automationProjects.map((project) => (
            <AnimatedItem key={project.id}>
              <GlassCard className="group flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-heading transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border border-accent/20 bg-accent/5 p-2 text-accent transition-colors hover:border-accent/40 hover:bg-accent/10"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-text">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <SkillBadge key={tag} label={tag} />
                  ))}
                </div>
              </GlassCard>
            </AnimatedItem>
          ))}
        </div>
      </div>

      {other.length > 0 && (
        <>
          <h3 className="mb-6 font-mono text-sm text-accent">Other Projects</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {other.map((project) => (
              <AnimatedItem key={project.id}>
                <GlassCard className="group h-full">
                  <h4 className="mb-2 font-medium text-heading transition-colors group-hover:text-accent">
                    {project.title}
                  </h4>
                  <p className="mb-3 text-sm text-text">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <SkillBadge key={tag} label={tag} />
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </>
      )}
    </AnimatedSection>
  );
}
