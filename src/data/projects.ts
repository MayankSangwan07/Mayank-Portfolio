export type ProjectStatus = "in-progress" | "completed" | "coming-soon";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: ProjectStatus;
  github: string;
  live?: string;
  bannerColor: string;
  accentColor: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "kaamsetu",
    title: "KaamSetu",
    description:
      "Hyperlocal job marketplace connecting India's 450M daily-wage workers with hirers — real-time, multilingual, proximity-ranked.",
    longDescription:
      "Full-stack two-sided marketplace with dual-mode user system (worker/hirer), Socket.io real-time chat gated by job interactions, Haversine-based proximity search with composite smart ranking (distance, wage, rating, recency), Google OAuth, multilingual UI across 5 Indian languages, and Cloudinary-powered worker portfolios.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind", "Cloudinary"],
    status: "in-progress",
    github: "https://github.com/MAYANKSANGWAN462",
    bannerColor: "#1a1040",
    accentColor: "#6c63ff",
    featured: true,
  },
  {
    id: "coming-soon-1",
    title: "Next project",
    description: "Something new is being built. Stay tuned.",
    longDescription: "",
    tech: [],
    status: "coming-soon",
    github: "https://github.com/MAYANKSANGWAN462",
    bannerColor: "#0f1a12",
    accentColor: "#22c55e",
    featured: false,
  },
];