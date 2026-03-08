import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Paid Projects & Collaborations",
    period: "2023 — Present",
    description: "Building full-stack web applications including e-commerce platforms, rental marketplaces, POS systems, and learning platforms. Focused on scalable architecture, payment integrations, and real-time features.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    role: "Junior Developer",
    company: "Self-Taught / Internships",
    period: "2021 — 2023",
    description: "Started my tech journey as a junior developer, learning modern web development from the ground up. Built responsive websites, explored frontend frameworks, and developed foundational backend skills.",
    tech: ["JavaScript", "HTML/CSS", "Node.js", "Express.js", "Git"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            04 — Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-px h-px">
                  <div className="absolute -left-[5px] -top-[5px] w-[11px] h-[11px] rounded-full border-2 border-primary bg-background" />
                </div>

                <div className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[10px] font-mono rounded-full border border-border bg-secondary/50 text-muted-foreground"
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
      </div>
    </section>
  );
};

export default Experience;
