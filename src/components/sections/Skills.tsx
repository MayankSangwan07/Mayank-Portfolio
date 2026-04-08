"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillsRow1, skillsRow2 } from "@/data/skills";

function MarqueeRow({ skills, direction = "left" }: { skills: typeof skillsRow1; direction?: "left" | "right" }) {
  const doubled = [...skills, ...skills];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
      <div
        className={`flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} hover:[animation-play-state:paused]`}
      >
        {doubled.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-secondary/30">
      <div className="container-width mb-14">
        <SectionHeading
          label="Tech stack"
          title="Skills"
          subtitle="Technologies I build with — hover the marquee to pause it."
        />
      </div>
      <div className="flex flex-col gap-5">
        <MarqueeRow skills={skillsRow1} direction="left" />
        <MarqueeRow skills={skillsRow2} direction="right" />
      </div>
    </section>
  );
}