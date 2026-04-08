"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const statusConfig = {
  "in-progress": { label: "In Progress", color: "text-amber-400 bg-amber-400/10 border-amber-400/30" },
  completed: { label: "Completed", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30" },
  "coming-soon": { label: "Coming Soon", color: "text-text-muted bg-text-muted/10 border-text-muted/30" },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const isComingSoon = project.status === "coming-soon";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative rounded-2xl overflow-hidden border border-accent-border/20 bg-bg-card transition-all duration-500 hover:border-accent-primary/40 hover:-translate-y-2 hover:shadow-accent ${isComingSoon ? "opacity-50" : ""}`}
    >
      {/* Banner */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.bannerColor }}
      >
        <div className="absolute inset-0 dot-grid-bg opacity-30" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${project.accentColor} 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h3
            className="text-3xl font-bold tracking-tight"
            style={{ color: project.accentColor }}
          >
            {project.title}
          </h3>
          {project.id === "kaamsetu" && (
            <p className="text-xs font-mono text-white/50 mt-1 tracking-widest uppercase">
              काम सेतु — Work Bridge
            </p>
          )}
        </div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, ${project.accentColor}22, transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
          <span
            className={`text-xs px-2.5 py-1 rounded-full border font-medium flex-shrink-0 ${statusConfig[project.status].color}`}
          >
            {statusConfig[project.status].label}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-accent-glow border border-accent-border/30 text-accent-secondary font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {!isComingSoon && (
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-accent-border/40 text-text-secondary hover:text-text-primary hover:border-accent-primary/60 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/40 text-accent-primary hover:bg-accent-primary/20 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}