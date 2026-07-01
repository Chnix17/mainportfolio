"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Table, X } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Custom Web & App Development",
    description: "Building tailored web applications and mobile solutions to meet your specific business needs. From concept to deployment, I create scalable, high-performance applications.",
    tools: "React, Next.js, TypeScript, Node.js, PHP, Python, MySQL",
    tasks: "Frontend Development, Backend Development, API Integration",
  },
  {
    icon: <Table className="w-6 h-6 text-primary" />,
    title: "Spreadsheet Management",
    description: "Expert spreadsheet solutions including data organization, automation, formulas, and reporting. Transform your data into actionable insights with professional Excel/Google Sheets management.",
    tools: "Google Sheets, Excel",
    tasks: "Data Entry, Organization, Automation",
    image: "/images/SAMPLE_WORK_VA (2).png",
  },
];

export function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              What I <span className="text-primary">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional services tailored to help your business grow and operate more efficiently.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              {service.image && (
                <div className="px-8 pb-6">
                  <img
                    src={service.image}
                    alt="Sample Work"
                    className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(service.image)}
                  />
                </div>
              )}

              <div className="px-8 pb-8 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Tools used:</p>
                  <p className="text-sm text-muted-foreground">{service.tools}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Tasks:</p>
                  <p className="text-sm text-muted-foreground">{service.tasks}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
