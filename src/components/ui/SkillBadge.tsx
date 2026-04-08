"use client";

interface SkillBadgeProps {
  name: string;
  icon: string;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 glass-card rounded-xl border border-accent-border/30 hover:border-accent-primary/50 transition-all duration-300 group cursor-default select-none mx-3 flex-shrink-0">
      <i className={`${icon} text-2xl group-hover:scale-110 transition-transform duration-300`} />
      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}