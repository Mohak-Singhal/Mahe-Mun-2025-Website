import React, { useState, useEffect } from "react";
import { Megaphone, Globe, Users, Calendar, Layers, Target, ArrowUpRight } from "lucide-react"; // Lucide icons
import MunStats from "./MunStats";
import {motion, useScroll, useSpring, useTransform } from "framer-motion";
import { div, h1 } from "framer-motion/client";
import ConferenceHighlights from "./ConferenceHighlights";
import Home from "../pages/Home";

// ✅ HighlightBox Component
const HighlightBox = ({ icon, text }) => (
  <div className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg">
    {icon}
    <p className="mt-4 text-lg font-semibold">{text}</p>
  </div>
);

// ✅ LetterSection Component
const LetterSection = () => (
  <div className="p-6 w-11/12">
    <h1 className="mt-12 text-[70px] font-medium">Letter From The Secretary-General</h1>
  <p className=" mt-6 text-gray-700 text-sm leading-relaxed ">
    <strong className="">Dear Delegates and Faculty Advisors,</strong>
    <br /><br />
    My name is <strong className="">Amlan Ghosh</strong>, and as the Secretary-General, it is my distinct honor to invite you to the maiden edition of MAHE Model United Nations, taking place in February 2025. This marks the first time MAHE MUN will be held, and we are beyond excited to embark on this journey together, offering an experience that we believe will set a new standard for Model UN conferences in the region.
    <br /><br />
    As the inaugural conference, <strong className="">MAHE MUN 2025</strong> is pioneering effort aimed at bringing together passionate students from across the globe to engage in meaningful dialogue on some of the
most pressing global issues. Our team has worked tirelessly to ensure that this first-ever edition is packed with thought-provoking debates, innovative committee sessions, and opportunities
for delegates to develop their skills in diplomacy, leadership, and negotiation.
    <br /><br />
    In this first edition, we have meticulously designed our conference structure to accommodate a diverse range of interests and experience levels. From beginner-friendly General Assemblies to
advanced crisis committees, MAHE MUN offers something for every delegate. We have also curated
lineup of distinguished speakers and special events to make the experience not. just
educational, but truly memorable.
    <br /><br />
    On behalf of the entire Secretariat, I can say with confidence that this conference will not only be a platform for intellectual growth but also a celebration of the global community of young
leaders. The enthusiasm and dedication of each participant will play a crucial role in shaping the future of MAHE MUN as we establish its legacy in the years to come.
in
    <br /><br />
    We are thrilled to have you join us as we make history with the first-ever MAHE MUN in February 2025. Your participation will not only contribute to the success of this maiden conference but
also set the tone for all future editions
    <br /><br />
    <strong className="">Sincerely,</strong>
    <br />
    <strong className="">Amlan Ghosh</strong>
    <br />
    <strong className="">Secretary-General, MAHE MUN 2025</strong>
  </p>
  </div>
);

// ✅ ConferenceHighlights Component
// const ConferenceHighlights = () => (
//   <div>
//     <h1 className="mt-17 text-[70px] text-white ">Conference Highlights</h1>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <HighlightBox icon={<Megaphone size={40} />} text="News 1: Opening Ceremony" />
//     <HighlightBox icon={<Globe size={40} />} text="News 2: Global Discussions" />
//     <HighlightBox icon={<Users size={40} />} text="News 3: Delegate Networking" />
//     <HighlightBox icon={<Calendar size={40} />} text="News 4: Special Events" />
//   </div>
//   </div>
// );

// ✅ Stats Component
const MunStatjs = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 p-6 rounded-lg text-center">
    <StatBox icon={<Users size={40} />} number="295+" label="Delegates" />
    <StatBox icon={<Layers size={40} />} number="5+" label="Committees" />
    <StatBox icon={<Calendar size={40} />} number="1+" label="Days" />
    <StatBox icon={<Target size={40} />} number="0" label="Goals" />
  </div>
);
const StatBox = ({ icon, number, label }) => (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="text-xl font-bold">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
const FullImage = ({ src }) => {
    // Get scroll progress
    const { scrollYProgress } = useScroll();
  
    // Scale image based on scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Zooms from 1x to 1.2x
  
    return (
      <div className="w-screen overflow-hidden  top-0 left-0">
        <motion.img 
          src={src} 
          className=" object-cover rounded-t-[7%]"
          style={{ scale }} // Apply the scale effect
        />
      </div>
    );
  };

  const DelegatePage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#E5F3F1] rounded-t-[7%] text-black">
        {/* Top Text */}
        <p className="text-lg tracking-widest font-semibold">
          WANNA BECOME A DELEGATE 
        </p>
  
        {/* Main Heading */}
        <h1 className="text-8xl font-bold text-center leading-none mt-4">
          LET'S WORK
        </h1>
        <h1 className="text-8xl font-bold text-center leading-none">
          TOGETHER
        </h1>
  
        {/* Button */}
        <button className="mt-6 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
          GET IN TOUCH
          <ArrowUpRight size={24} />
        </button>
      </div>
    );
  };


// ✅ Sections Array with Components & Height Configuration
const sections = [
  // { id: 1, content: <Home />, classname: "bg-gray-200 h-screen p-8" },
  { id: 1, content: <LetterSection />, classname: "bg-gray-200 h-screen p-8" },
  { id: 2, content: <ConferenceHighlights />, classname: " bg-black h-screen p-8"  },
  { id: 3, content: <MunStats />, classname: "bg-[#f2eaea] h-[100vh] p-8" },
  { id: 4, content: <FullImage src="/mun.jpg" />, classname: "h-screen " },
  { id: 5, content: <DelegatePage />, classname: "h-screen " },
];

const StackedScroll = () => {
  const { scrollYProgress } = useScroll();

  // Control movements for each section
  const letterY = useTransform(scrollYProgress, [0, 0.25], ["0vh", "0vh"]); // LetterSection stays fixed
  const confY = useTransform(scrollYProgress, [0.2, 0.5], ["100vh", "0vh"]); // Conf moves to top
  const statsY = useTransform(scrollYProgress, [0.4, 0.7], ["100vh", "25vh"]); // MunStats stops at 25vh from top
  const imageY = useTransform(scrollYProgress, [0.6, 1], ["100vh", "0vh"]); // FullImage moves to top-0

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ul className="list-none p-0 grid grid-cols-1 gap-16 pb-[30vh]">
        {sections.map((section, index) => {
          let translateY;
          if (index === 0) translateY = letterY;
          else if (index === 1) translateY = confY;
          else if (index === 2) translateY = statsY;
          else if (index === 3) translateY = imageY;

          return (
            <motion.li
              key={section.id}
              className={`sticky ${index === 2 ? "top-[5vh]" : "top-0"} flex justify-center`}
              style={{ y: translateY }}
            >
              <div
                className={`border-blue-900 rounded-t-[7%] shadow-xl flex flex-col w-full ${section.classname} text-black`}
              >
                {section.content}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackedScroll;