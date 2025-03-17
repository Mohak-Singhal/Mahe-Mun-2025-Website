import React, { useState, useEffect } from "react";
import {
  Megaphone,
  Globe,
  Users,
  Calendar,
  Layers,
  Target,
  ArrowUpRight,
} from "lucide-react"; // Lucide icons
import MunStats from "./MunStats";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { div, h1 } from "framer-motion/client";
import ConferenceHighlights from "./ConferenceHighlights";
import Home from "../pages/Home";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";

// ✅ HighlightBox Component
const HighlightBox = ({ icon, text }) => (
  <div className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg">
    {icon}
    <p className="mt-4 text-lg font-semibold">{text}</p>
  </div>
);

// ✅ LetterSection Component
const LetterSection = () => (
  <div className=" px-6 md:px-12 lg:px-10 w-full max-w-6xl mx-auto">
    {/* Title */}
    <h1 className="mt-12 text-4xl md:text-6xl lg:text-[70px] font-medium text-center md:text-left">
      Letter From The Secretary-General
    </h1>

    {/* Letter Content */}
    <p className="mt-6 text-gray-700 text-sm md:text-base  text-justify">
      <strong>Dearest Delegates,</strong>
      <br />
      <br />
      It is with immense pride and honor that I welcome you all to the inaugural
      National Conference of <strong>MAHE Model United Nations</strong>, taking
      place in <strong>August 2025</strong>. This conference marks a monumental
      milestone in our journey—what began as a vision has now become a reality,
      with hundreds of delegates from across the country coming together to
      engage in rigorous debate, diplomacy, and collaboration. Leading a
      Secretariat and Organizing Committee of over 150 dedicated individuals, we
      are committed to delivering an unparalleled MUN experience, setting a new
      benchmark for excellence.
      <br />
      <br />
      My name is <strong>Pedaballe Sashreek Reddy</strong>, and I have the
      privilege of serving as your Secretary-General for{" "}
      <strong>MAHE MUN 2025</strong>. My journey in Model United Nations began
      seven years ago, and throughout my time as a delegate, Executive Board
      member, and organizer, I have found myself continually drawn to the
      transformative power of this activity. The moment I dreamt of for
      years—the honor of standing before you all, striking the gavel to open
      this prestigious conference—has finally arrived. Having already had the
      opportunity to do so for our January conference, I am now thrilled to
      present an even grander vision for August: a national-level conference
      that could become one of the largest MUNs in India.
      <br />
      <br />
      With <strong>15 dynamic committees</strong> designed to challenge and
      inspire, this conference is set to be nothing short of remarkable. We aim
      to foster a space where critical thinking meets diplomacy, where
      innovative solutions are born, and where lifelong friendships are forged.
      One of my friends from the MUN circuit once shared a simple yet profound
      sentiment:{" "}
      <em>
        "Learn one new thing and make one new friend by the end of this
        conference."
      </em>{" "}
      I echo these words to you all and encourage you to embrace this
      philosophy.
      <br />
      <br />
      Our mission at MAHE MUN is not just to host a conference but to create an
      experience—one that leaves every delegate more confident, more
      knowledgeable, and more inspired than when they arrived. I eagerly await
      the spirited discussions, the groundbreaking resolutions, and the bonds
      that will be built over the course of these intense yet rewarding days.
      <br />
      <br />
      Should you have any questions or require assistance, please do not
      hesitate to reach out. The entire Secretariat and I are here to ensure
      that you have an unforgettable experience at{" "}
      <strong>MAHE MUN 2025</strong>.
      <br />
      <br />
      Looking forward to welcoming you all to Manipal in August!
      <br />
      <br />
      <strong>With immense gratitude and anticipation,</strong>
      <br />
      <strong>Pedaballe Sashreek Reddy</strong>
      <br />
      <strong>Secretary-General & Vice President</strong>
      <br />
      <strong>MAHE Model United Nations 2025</strong>
      <br />
      <a
        href="mailto:pedaballe.mitmpl2023@learner.manipal.edu"
        className="text-blue-600 hover:underline"
      >
        pedaballe.mitmpl2023@learner.manipal.edu
      </a>
    </p>
  </div>
);

// export default LetterSection;

const FullImage = ({ src }) => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Scale image based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Zoom from 1x to 1.2x

  return (
    <div className="w-full h-screen overflow-hidden rounded-t-[7%]">
      <motion.img
        src={src}
        alt="Full View"
        className="w-full h-full object-cover"
        style={{ scale }} // Apply the scale effect
      />
    </div>
  );
};

const DelegatePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E5F3F1] rounded-t-[7%] text-black">
      {/* Top Text */}
      <p className="text-md sm:text-lg tracking-widest font-semibold">
        WANNA BECOME A DELEGATE
      </p>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-8xl font-bold text-center leading-none mt-4">
        LET'S WORK
      </h1>
      <h1 className="text-5xl sm:text-8xl font-bold text-center leading-none">
        TOGETHER
      </h1>

      <div className="flex">
        <button className="mt-6 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-md sm:text-lg font-semibold hover:scale-105 transition">
          GET IN TOUCH
        </button>
        <button className="mt-6 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-[60%] text-md sm:text-lg font-semibold hover:scale-105 transition">
          <ArrowUpRight size={24} />
        </button>
      </div>
    </div>
  );
};

// ✅ Sections Array with Components & Height Configuration
const sections = [
  {
    id: 1,
    content: <HomeScreen />,
    classname: "h-auto md:h-screen bg-cover bg-center",
  style: { backgroundImage: "url('/mahe.jpg')" }
  },
  { id: 2, content: <LetterSection />, classname: "rounded-t-[7%] bg-gray-200 p-4 sm:p-8" },
  {
    id: 3,
    content: <ConferenceHighlights />,
    classname: "rounded-t-[7%] bg-black h-auto md:h-screen p-4 sm:p-8",
  },
  {
    id: 4,
    content: <MunStats />,
    classname: "rounded-t-[7%] bg-[#f2eaea] h-auto md:h-screen p-4 sm:p-8",
  },
  {
    id: 5,
    content: <FullImage src="/mun.jpg" />,
    classname: "rounded-t-[7%] h-auto md:h-screen",
  },
  { id: 6, content: <DelegatePage />, classname: "h-auto md:h-screen" },
];

const StackedScroll = () => {
  const { scrollYProgress } = useScroll();

  // Motion animations for sections
  const homeY = useTransform(scrollYProgress, [0, 0.15], ["0vh", "0vh"]);
  const letterY = useTransform(scrollYProgress, [0.1, 0.3], ["120vh", "0vh"]);
  const confY = useTransform(scrollYProgress, [0.3, 0.5], ["100vh", "0vh"]);
  const statsY = useTransform(scrollYProgress, [0.5, 0.7], ["100vh", "25vh"]);
  const imageY = useTransform(scrollYProgress, [0.7, 0.85], ["100vh", "0vh"]);
  const delegateY = useTransform(scrollYProgress, [0.85, 1], ["100vh", "0vh"]);
  const footerOpacity = useTransform(scrollYProgress, [0.98, 1], [0, 1]); // Fade in AFTER delegate page
  const footerTranslateY = useTransform(scrollYProgress, [0.98, 1], [50, 0]); // Moves up smoothly


  return (
    <div className="min-h-screen max-w-full bg-gradient-to-b from-gray-50 to-white">
      <ul className="list-none p-0 grid grid-cols-1 gap-10 sm:gap-16 pb-[30vh]">
        {sections.map((section, index) => {
          let translateY;
          switch (index) {
            case 0:
              translateY = homeY;
              break;
            case 1:
              translateY = letterY;
              break;
            case 2:
              translateY = confY;
              break;
            case 3:
              translateY = statsY;
              break;
            case 4:
              translateY = imageY;
              break;
            case 5:
              translateY = delegateY;
              break;
            default:
              translateY = "0vh";
          }

          return (
            <motion.li
              key={section.id}
              className="sticky top-0 flex justify-center"
              style={{ y: translateY }}
            >
              <div
               style={section.style}
                className={`shadow-xl flex flex-col w-full ${section.classname} text-black`}
              >
                {section.content}
              </div>
            </motion.li>
          );
        })}
      </ul>
      <motion.div
        className="fixed bottom-0 w-full"
        style={{ opacity: footerOpacity, y: footerTranslateY }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default StackedScroll;
