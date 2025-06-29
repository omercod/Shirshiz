import React from "react";
import { motion } from "framer-motion";

export default function AnimateOnScroll({ children, animation = "fade-in", delay = 0, className, style }) {
  const variants = {
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay } },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay, ease: "easeOut" } },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[animation]}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}