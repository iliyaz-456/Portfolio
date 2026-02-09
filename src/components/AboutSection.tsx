import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Layers, Sparkles, Target } from "lucide-react";
import profileImage from "@assets/syed-iliyaz.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "Product Vision",
      description: "Turning ideas into focused product strategy.",
      icon: Target,
    },
    {
      title: "AI Engineering",
      description: "Building intelligent workflows and assistants.",
      icon: Brain,
    },
    {
      title: "Full-Stack Delivery",
      description: "Designing, shipping, and scaling web platforms.",
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 hero-grid opacity-10" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-1 bg-primary rounded-2xl blur-lg opacity-30" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl">
                  <img
                    src={""}
                    alt="Syed Iliyaz"
                    className="w-full h-auto object-cover"
                    style={{
                      clipPath: 'inset(5% 5% 5% 5%)',
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-panel rounded-full px-5 py-2 text-xs uppercase tracking-[0.35em] text-foreground/70">
                  Founder at Aternity
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6 text-lg text-foreground/80"
            >
              <p>
                I'm <span className="text-white font-semibold">Syed Iliyaz</span>, the founder and CEO of{" "}
                <span className="text-primary font-semibold">Aternity</span>, where we're building the future of technology solutions. 
                With a passion for AI and full-stack development, I specialize in creating innovative products that solve real-world problems.
              </p>
              <p>
                Currently pursuing my education at VJIT, I have hands-on experience with the MERN stack, React, Node.js, and modern web technologies. 
                My journey in tech has been driven by curiosity and a commitment to excellence, from leading my own startup to representing brands as a campus ambassador.
              </p>
              <p>
                Along with my technical skills, I have a strong foundation in data structures and algorithms, which enhances my problem-solving abilities. 
                I thrive on challenges that push the boundaries of what's possible and am always eager to learn and explore new technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="glass-panel rounded-2xl px-4 py-4 text-left hover-elevate transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="p-2 rounded-full bg-primary/10 text-primary">
                          <Icon className="w-4 h-4" />
                        </span>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      </div>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
