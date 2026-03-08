import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Text side */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-6"
            >
              <span className="block">Engineering</span>
              <span className="block text-gradient glow-text">scalable digital</span>
              <span className="block">experiences.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-body leading-relaxed mx-auto lg:mx-0"
            >
              Software developer specializing in building exceptional digital products 
              with modern technologies, clean architecture, and pixel-perfect interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  View My Work
                  <ExternalLink className="ml-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-1" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl opacity-60" />
              
              {/* Outer ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50">
                {/* Inner image container */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-background shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Professional portrait of Darlington Maloba, software developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Available badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-8 px-3 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-12 w-11 h-11 rounded-xl border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-base shadow-xl"
              >
                ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [-3, 6, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-2 bottom-16 w-11 h-11 rounded-xl border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-base shadow-xl"
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;