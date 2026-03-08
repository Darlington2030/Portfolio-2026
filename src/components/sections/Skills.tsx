import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "GraphQL", "REST APIs", "Microservices"],
    icon: "⚙️",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    icon: "🗄️",
  },
  {
    title: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"],
    icon: "🚀",
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "VS Code", "Linux", "Vim"],
    icon: "🛠️",
  },
  {
    title: "Practices",
    skills: ["TDD", "Agile", "System Design", "Code Review", "Clean Code"],
    icon: "📐",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            02 — Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-gradient">expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-secondary/30 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary/50 text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
