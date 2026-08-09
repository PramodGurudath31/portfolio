import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-text">
      <p>
        Designed & built by{" "}
        <span className="text-accent">{profile.name}</span>. Built with Next.js,
        TypeScript & Tailwind CSS.
      </p>
      <p className="mt-2 text-xs text-muted">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
