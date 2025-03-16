import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Layers, Calendar, Target } from "lucide-react";

const stats = [
  { icon: <Users size={40} />, targetNumber: 295, label: "Delegates" },
  { icon: <Layers size={40} />, targetNumber: 5, label: "Committees" },
  { icon: <Calendar size={40} />, targetNumber: 1, label: "Days" },
  { icon: <Target size={40} />, targetNumber: 0, label: "Goals" },
];

const MunStats = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={statsRef}
      className="w-full bg-gray-100 py-16 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <StatBox key={index} {...stat} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  );
};

const StatBox = ({ icon, targetNumber, label, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
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
      {/* {icon} */}
      <h3 className="text-4xl font-bold">{count}</h3>
      <p className="text-gray-600 text-3xl">{label}</p>
    </motion.div>
  );
};

export default MunStats;
