import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [loadingIndex, setLoadingIndex] = useState(0);
  const loadingPhrases = [
    "Drafting resolutions...",
    "Building diplomatic alliances...",
    "Facilitating negotiations...",
    "Finalizing agreements...",
    "Representing global voices...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingIndex((prevIndex) => (prevIndex + 1) % loadingPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white overflow-hidden z-50">
      {/* Floating Background Glow */}
      <motion.div
        className="absolute w-96 h-96 bg-white/20 blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* "MAHE MUN" Animated Text */}
      <motion.h1
        className="font-['FlatterySerif'] text-6xl md:text-8xl font-bold tracking-wide bg-gradient-to-r from-gray-300 via-white to-gray-100 text-transparent bg-clip-text"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        MAHE MUN
      </motion.h1>

      {/* Glowing Circles with Image */}
      <motion.div className="relative w-48 h-48 flex items-center justify-center mt-5">
        {/* Rotating Rings */}
        <motion.div
          className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-gray-300/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[85%] h-[85%] rounded-full border-b-2 border-l-2 border-gray-400/60"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[70%] h-[70%] rounded-full border-t-2 border-l-2 border-white/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Glow */}
        <motion.div
          className="absolute inset-[10%] bg-gradient-to-br from-gray-400/20 via-white/20 to-gray-300/20 rounded-full blur-lg"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Centered Image */}
        <img
          src="/logo2.png"
          alt="Logo"
          className="absolute w-35 h-35 object-contain z-10"
        />
      </motion.div>

      {/* Floating Text Animations */}
      <motion.div className="mt-6 text-xl font-medium text-gray-300">
        <motion.span
          key={loadingIndex}
          className="font-['Inter']  bg-clip-text text-transparent font-['FlatterySerif'] bg-gradient-to-r from-gray-200 to-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {loadingPhrases[loadingIndex]}
        </motion.span>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-gray-300/20"
          initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ repeat: Infinity, duration: 6 + i * 0.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default LoadingScreen;
