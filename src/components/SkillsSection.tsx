import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap } from "lucide-react";

const skillsData = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "SQL", level: 80, category: "Database" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 hero-grid opacity-10" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Skills & Expertise
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Technologies and tools I work with to bring ideas to life.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="relative glass-panel rounded-2xl p-5"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full border border-border/60 px-2 py-0.5 text-xs font-medium text-foreground/70">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-3 rounded-full overflow-hidden border border-white/15 bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    style={{
                      boxShadow: hoveredSkill === skill.name
                        ? "0 0 16px rgba(255, 255, 255, 0.8)"
                        : "0 0 8px rgba(255, 255, 255, 0.5)",
                    }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-foreground/60">
                  <span>Proficiency</span>
                  <span>Growing with every build</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl border border-primary/20 glass-panel"
          >
            <p className="text-foreground/80 text-center">
              Always learning and exploring new technologies to stay at the cutting edge of development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
