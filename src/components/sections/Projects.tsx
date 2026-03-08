import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Furniture Store",
    description: "A full-stack e-commerce platform for furniture shopping with product catalogs, cart management, secure checkout, and an admin dashboard for inventory and order management.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    featured: true,
    color: "from-primary/20 to-accent/20",
    liveUrl: "https://furniture-store-lilac.vercel.app/",
    githubUrl: "https://github.com/Darlington2030",
  },
  {
    title: "Airbnb-like Platform",
    description: "A property rental marketplace featuring listing management, advanced search with filters, booking system, user reviews, and interactive maps for property discovery.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    featured: true,
    color: "from-accent/20 to-primary/20",
    liveUrl: "https://nezaaka-frontend.vercel.app/",
  },
  {
    title: "Course Platform",
    description: "An online learning platform inspired by Udemy with course creation tools, video streaming, progress tracking, quizzes, and instructor analytics dashboards.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    featured: false,
    color: "from-primary/15 to-green-500/15",
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable online store with product management, payment integration, order tracking, customer accounts, and a responsive storefront optimized for conversions.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Stripe"],
    featured: false,
    color: "from-accent/20 to-pink-500/15",
  },
  {
    title: "Point of Sale (POS)",
    description: "A modern POS system for retail businesses with real-time inventory tracking, sales reporting, receipt generation, and multi-terminal support.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    featured: false,
    color: "from-primary/20 to-accent/15",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            03 — Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative p-8 ${project.featured ? 'md:p-12' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  {project.featured && (
                    <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full border border-primary/30 text-primary bg-primary/5">
                      Featured
                    </span>
                  )}
                  <div className="flex gap-2 ml-auto">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-50 group-hover:opacity-100 transition-opacity">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-50 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={`font-bold text-foreground mb-3 ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  {project.title}
                </h3>
                <p className={`text-muted-foreground font-body leading-relaxed mb-6 ${project.featured ? 'text-base max-w-2xl' : 'text-sm'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary/50 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
