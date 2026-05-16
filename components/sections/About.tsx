"use client";

import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { Code, Palette, Zap } from "lucide-react";

const techStack = [
  "Java", "PHP", "MySQL", "JavaScript", "TypeScript", "React.js", "Next.js"
];

const skills = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Development",
    description: "Building robust, scalable applications using React, Next.js, and TypeScript.",
  },
  {
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: "Design",
    description: "Basic UI design using Tailwind CSS and Framer Motion, focused on clean and functional interfaces",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Performance",
    description: "Optimizing web experiences for speed, accessibility",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I am a passionate developer who bridges the gap between design and engineering.
              My goal is to create web applications that not only look incredible but also function flawlessly.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">
            My <span className="text-primary">Tech Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 glass rounded-xl text-sm font-medium border border-border/50 text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
