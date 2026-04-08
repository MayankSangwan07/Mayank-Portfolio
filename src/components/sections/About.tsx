"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { meta } from "@/data/meta";

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
    </svg>
  ),
  target: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <SectionHeading
          label="About me"
          title="Who I am"
          subtitle="A developer building real things for real people."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              {meta.bio}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Node.js", "MongoDB", "Python", "C++"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-accent-glow border border-accent-border/30 text-accent-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{meta.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary flex-shrink-0">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>Thapar Institute of Engineering & Technology, Patiala</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Open to internships & collaborations</span>
              </div>
            </div>
          </motion.div>

          {/* Trait cards */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {meta.traits.map((trait) => (
              <motion.div
                key={trait.title}
                variants={cardVariants}
                className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-accent-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-glow border border-accent-border/40 flex items-center justify-center text-accent-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[trait.icon]}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{trait.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{trait.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}