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

    <div className="w-full bg-[#f2eaea] py-10 px-4 sm:px-8 lg:px-16">
      {/* Section Heading */}
      <WavyText className="text-center text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-black leading-tight"
        text="Our Diverse Participants"
      />

      {/* Animated Stats Grid */}
      <motion.div
        ref={statsRef}
        className="w-full flex flex-col items-center text-center mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-16 mt-6">
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
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      {/* Animated Number */}
      <h3 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] text-black font-medium">
        {count}+
        <span className="block w-16 sm:w-20 h-[2px] bg-black mt-2 mx-auto"></span>
      </h3>

      {/* Label */}
      <p className="text-gray-700 mt-3 sm:mt-4 text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] font-light tracking-tight">
        {label}
      </p>

    </motion.div>
  );
};

export default MunStats;
