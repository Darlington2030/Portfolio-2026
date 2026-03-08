import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side - left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center order-1"
          >
            <div className="relative max-w-sm w-full">
              {/* Gradient glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-60" />
              
              {/* Image card */}
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-2xl group">
                <div className="aspect-[3/4]">
                  <img
                    src={profileImg}
                    alt="Professional portrait of Darlington Maloba, software developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-sm font-mono text-primary">Darlington Maloba</p>
                  <p className="text-xs text-muted-foreground">Software Developer</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border border-primary/20 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl border border-accent/20 -z-10" />
            </div>
          </motion.div>

          {/* Text side - right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2"
          >
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
              01 — About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Building the future,
              <br />
              <span className="text-gradient">one line at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm a software developer passionate about crafting 
                high-quality web applications. I focus on building reliable systems 
                with clean, maintainable codebases.
              </p>
              <p>
                My approach combines deep technical expertise with a keen eye for design. 
                I believe great software should be both powerful and beautiful — every pixel matters, 
                every millisecond counts.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles, or exploring the latest in web technologies.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">100K+</p>
                <p className="text-xs text-muted-foreground mt-1">Users Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;