import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent transition-colors hover:border-accent/40 hover:bg-accent/10",
        className
      )}
    >
      {label}
    </span>
  );
}
