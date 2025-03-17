import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <>
      <h2 className=" px-10 py-6 text-[3.5rem] text-left  text-black  font-semibold leading-[1.2]">
        Our Diverse Participants
      </h2>
      <motion.div
        ref={statsRef}
        className="w-full bg-[#f2eaea] py-10 px-3 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Stats Grid */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} isInView={isInView} />
          ))}
        </div>
      </motion.div>
    </>
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
    {/* Count with Centered White Underline */}
    <h3 className="text-[3.5rem] text-black font-medium relative">
      {count}+
      <span className="block w-20 h-[1px] bg-white mt-2 mx-auto"></span>
    </h3>
  
    {/* Label */}
    <p className="text-gray-700 mt-6 text-[32px] font-light tracking-tight">{label}</p>
  </motion.div>
  

  
  );
};

export default MunStats;
