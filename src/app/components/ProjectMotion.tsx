"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import styles from "./ProjectMotion.module.css";

export default function ProjectMotion({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.card}
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reducedMotion ? 0 : 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
