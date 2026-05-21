"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Only increment visits once per session to avoid counting dev reloads as multiple visits
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      fetch("/api/visit", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setVisits(data.visits);
          sessionStorage.setItem("hasVisited", "true");
        })
        .catch((err) => console.error("Failed to count visit", err));
    } else {
      fetch("/api/visit")
        .then((res) => res.json())
        .then((data) => setVisits(data.visits))
        .catch((err) => console.error("Failed to fetch visit count", err));
    }
  }, []);

  if (visits === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800"
    >
      <Eye className="w-4 h-4" />
      <span>
        <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">
          {visits.toLocaleString()}
        </strong>{" "}
        {visits === 1 ? "Visit" : "Visits"}
      </span>
    </motion.div>
  );
}
