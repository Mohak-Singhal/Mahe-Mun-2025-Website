import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WavyText } from "./textanimation";
import "/src/styles/MunStats.css"; // Absolute path

const stats = [
  { targetNumber: 250, label: "Delegates" },
  { targetNumber: 25, label: "Executive Board Members" },
  { targetNumber: 50, label: "Organizers" },
  { targetNumber: 40, label: "Volunteers" },
];

const MunStats = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="stats-section">
      {/* Background Overlay for Effect */}
      <div className="stats-bg"></div>

      {/* Section Heading with Glow Animation */}
      <WavyText
        className="section-title"
        text="Our Diverse Participants"
      />

      {/* Animated Stats Grid */}
      <motion.div
        ref={statsRef}
        className="stats-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} isInView={isInView} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const StatBox = ({ targetNumber, label, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const interval = 30;
      const increment = targetNumber / (duration / interval);

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, interval);

      return () => clearInterval(counter);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      className="stat-box"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Animated Number with Glow */}
      <h3 className="stat-number">
        {count}+
        <span className="underline"></span>
      </h3>

      {/* Label */}
      <p className="stat-label">{label}</p>
    </motion.div>
  );
};

export default MunStats;