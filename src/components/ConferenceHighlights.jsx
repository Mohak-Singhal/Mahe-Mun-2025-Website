import React from "react";
import { Package, Layers, Smile, Command } from "lucide-react";

const highlights = [
  {
    id: "01",
    icon: <Package size={40} />,
    title: "Opening Ceremony",
    description: "Kickstarting the event with inspiring speeches and key announcements.",
  },
  {
    id: "02",
    icon: <Layers size={40} />,
    title: "Global Discussions",
    description: "Experts share insights on global trends and industry advancements.",
  },
  {
    id: "03",
    icon: <Smile size={40} />,
    title: "Delegate Networking",
    description: "An exclusive opportunity to connect with professionals worldwide.",
  },
  {
    id: "04",
    icon: <Command size={40} />,
    title: "Special Events",
    description: "Workshops, panels, and hands-on experiences to enhance knowledge.",
  },
];

const ConferenceHighlights = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
      {/* Title - Left aligned */}
      <div className="w-full max-w-6xl">
        <h1 className="text-[50px]  font-semibold leading-[1.1] ">CONFERENCE <br/>HIGHLIGHTS</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 max-w-6xl">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="bg-[#141414] rounded-xl p-8 w-72 h-80 flex flex-col justify-between"
          >
            <span className="text-gray-400 text-sm">{highlight.id}</span>
            <div className="text-white text-center mt-14">{highlight.icon}</div>
            <h2 className="text-lg font-semibold mt-4">{highlight.title}</h2>
            <p className="text-gray-400 text-sm ">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-12">
        <button className="bg-[#141414] text-white text-sm px-6 py-3 rounded-full font-semibold border border-gray-500 hover:scale-105 transition">
          Save your precious time for finding a solution. <br /> Contact us now
        </button>
      </div>
    </div>
  );
};

export default ConferenceHighlights;
