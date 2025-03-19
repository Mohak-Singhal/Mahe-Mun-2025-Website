import React from "react";


import { WavyText } from "./textanimation";


const highlights = [
  {
    day: "Day 1",
    events: [
      {
        id: "1",
        title: "Opening Ceremony",
        description:
          "A grand opening ceremony filled with excitement and anticipation marked the start of the MAHE MUN conference.",
      },
      {
        id: "2",
        title: "Dance Performances",
        description:
          "Energetic dance performances by talented artists captivated the audience, adding a vibrant touch to the event.",
      },
      {
        id: "3",
        title: "Keynote Speeches",
        description:
          "Inspiring speeches from distinguished guests, including the President, Secretary-General, and Chief Guest, provided insightful perspectives on global issues.",
      },
    ],
  },
  {
    day: "Day 2",
    events: [
      {
        id: "1",
        title: "Committee Sessions",
        description:
          "The second day's core, committee sessions, allowed delegates to actively discuss and negotiate. Participants skillfully tackled global issues, demonstrating intelligence and passion.",
      },
      {
        id: "2",
        title: "Closing Ceremony",
        description:
          "MAHE MUN's closing celebrated award-winning delegates, featured a collaborative closing speech, and a group photo, marking a successful end.",
      },
    ],
  },
];

const ConferenceHighlights = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">


      
      <WavyText
        text="CONFERENCE HIGHLIGHTS"
        className="text-[50px] text-white text-left font-semibold leading-[1.1]"
      />


      {/* Day Highlights */}
      {highlights.map((dayHighlight) => (
        <div key={dayHighlight.day} className="max-w-6xl w-full mt-10">
          <h2 className="text-5xl font-bold mb-8">{dayHighlight.day} Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dayHighlight.events.map((event) => (
              <div key={event.id} className="bg-[#141414] p-6 rounded-xl flex flex-col items-start">
                {/* Number in square */}
                <div className="flex items-center justify-center bg-gray-800 text-white rounded-md w-10 h-10 mb-4">
                  {event.id}
                </div>

                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Bottom Button
      <div className="mt-12">
        <button className="bg-[#141414] text-white text-sm px-6 py-3 rounded-full font-semibold border border-gray-500 hover:scale-105 transition">
          Save your precious time for finding a solution. <br /> Contact us now
        </button>
      </div> */}
    </div>
  );
};

export default ConferenceHighlights;
