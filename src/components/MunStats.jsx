import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WavyText } from "./textanimation";

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
    <div className="font-['Norwester'] w-full bg-[#f2eaea] py-12 px-6 sm:px-12 lg:px-24">
      {/* Section Heading */}
      <WavyText
        className="font-['Norwester'] text-center text-2xl font-bold text-black leading-snug"
        style={{
          fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", 
         
        }}
        text="Our Diverse Participants"
      />

      {/* Animated Stats Grid */}
      <motion.div
        ref={statsRef}
        className="w-full flex flex-col items-center text-center mt-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, ease: "easeInOut" },
          },
        }}
      >
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-14">
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
      const duration = 1500; // Animation duration
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * targetNumber);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Animated Number */}
      <h3
        className="font-semibold text-black"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        {count}+
        <span className="block w-14 sm:w-16 h-[2px] bg-black mt-2 mx-auto"></span>
      </h3>

      {/* Label */}
      <p
        className="text-gray-700 w-[110%] mt-5 font-medium tracking-tight"
        style={{
          fontSize: "clamp(1rem, 3vw, 1.6rem)",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        {label}
      </p>
    </motion.div>
  );
};

export default MunStats;
