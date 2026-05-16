"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border border-border relative overflow-hidden">
          {/* Decorative Blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                  Let's Work <span className="text-primary">Together</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Ready to start your next project? Drop me a message and let's turn your vision into reality.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-primary" />, text: "vallechristianmark@gmail.com" },
                  { icon: <Phone className="text-primary" />, text: "+63-9533593321" },
                  { icon: <MapPin className="text-primary" />, text: "Cagayan de Oro City, Misamis Oriental, Philippines" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button className="w-full bg-primary text-primary-foreground font-medium py-4 rounded-xl hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
