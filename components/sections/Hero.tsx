"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-primary font-medium tracking-wider uppercase mb-2">
              Hello, I am Christian Mark S Valle
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              A Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
                Web Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            I build stunning, high-performance websites with a focus on modern design,
            smooth animations, and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-square rounded-3xl overflow-hidden glass p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-muted rounded-2xl relative overflow-hidden flex items-center justify-center">
              <img src="/images/mypic.png" alt="Hero" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
