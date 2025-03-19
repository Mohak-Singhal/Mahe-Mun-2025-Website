import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
export const WavyText = ({ text, className = "" }) => {
    return (
      <motion.h1
        className={`overflow-hidden flex ${className}`} // Allows external styling
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers animation on scroll
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 }, // Each letter starts lower and invisible
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.05, ease: "easeOut" },
              },
            }}
          >
            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
          </motion.span>
        ))}
      </motion.h1>
    );
  };
