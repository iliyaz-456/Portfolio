import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Cpu, Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickStats = [
    {
      title: "Startup Builder",
      description: "Founder of Aternity",
      icon: Rocket,
    },
    {
      title: "AI + Full-Stack",
      description: "Product engineer",
      icon: Cpu,
    },
    {
      title: "SIH Finalist",
      description: "2025 finalist",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card" />
      <div className="absolute inset-0 hero-grid opacity-40" />

      <div className="absolute -top-24 right-6 w-80 h-80 bg-primary/25 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-md h-112 bg-accent/20 rounded-full blur-[160px]" />

      <div className="absolute top-24 right-[8%] hidden xl:block glass-panel px-5 py-4 rounded-2xl text-sm text-foreground/80 float-slow">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/50">Now Building</p>
        <p className="text-base font-semibold text-foreground">AI-first product experiences</p>
      </div>
      <div className="absolute bottom-24 left-[8%] hidden xl:block glass-panel px-5 py-4 rounded-2xl text-sm text-foreground/80 float-slower">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/50">Latest Focus</p>
        <p className="text-base font-semibold text-foreground">Virtual Shopping AI</p>
      </div>

      <div className="container relative z-10 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs uppercase tracking-[0.35em] text-foreground/70"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Available for collaboration
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight text-white">
              Syed Iliyaz
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium"
          >
            Founder & CEO of Aternity | SIH Finalist 2025 | AI & Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base md:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Building innovative solutions at the intersection of AI and technology.
            Passionate about creating impactful products that shape the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-3 mb-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary/50 hover:border-primary"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("tech-stack")}
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Explore Tech Stack
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {quickStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="glass-panel rounded-2xl px-5 py-4 text-left hover-elevate transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="p-2 rounded-full bg-primary/10 text-primary">
                      <Icon className="w-4 h-4" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">{stat.title}</p>
                  </div>
                  <p className="text-sm text-foreground/70">{stat.description}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/iliyaz-456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-3 rounded-md glass-panel"
              aria-label="GitHub"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/syediliyaz18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-3 rounded-md glass-panel"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:syediliyaz803@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-3 rounded-md glass-panel"
              aria-label="Email"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground cursor-pointer hover:text-primary transition-colors flex flex-col items-center gap-2"
            onClick={() => scrollToSection("about")}
            data-testid="button-scroll-down"
          >
            <ArrowDown className="w-6 h-6" />
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
