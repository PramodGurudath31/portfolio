"use client";

import { FileDown, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <AnimatedSection className="section-padding pb-32">
      <SectionHeading
        id="contact"
        number="06"
        title="Get In Touch"
        subtitle="Open to discussing QA leadership, AI testing strategy, or automation architecture."
      />

      <AnimatedItem>
        <GlassCard hover={false} className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg leading-relaxed text-text">
            Whether you have a question about quality engineering, AI validation,
            or just want to connect - my inbox is always open. I&apos;ll do my
            best to get back to you!
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${profile.email}`}>
              <Mail size={16} />
              Say Hello
            </Button>
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
          </div>

          <div className="flex flex-col items-center gap-3 border-t border-border pt-6 text-sm text-text sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail size={14} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone size={14} />
              {profile.phone}
            </a>
          </div>
        </GlassCard>
      </AnimatedItem>
    </AnimatedSection>
  );
}
