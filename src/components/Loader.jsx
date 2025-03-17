import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen animate-[colorCycle_10s_infinite_ease-in-out]">
      <div className="flex space-x-2">
        <div className="w-[6px] h-[35px] bg-black rounded-full animate-[bounce_1.5s_infinite_ease-in-out] [animation-delay:-0.3s]"></div>
        <div className="w-[6px] h-[35px] bg-black rounded-full animate-[bounce_1.5s_infinite_ease-in-out] [animation-delay:-0.15s]"></div>
        <div className="w-[6px] h-[35px] bg-black rounded-full animate-[bounce_1.5s_infinite_ease-in-out]"></div>
      </div>

      {/* Hidden Keyframes in Tailwind */}
      <style>
        {`
          @keyframes colorCycle {
            0% { background-color: white; }
            20% { background-color: #c8e73a; } /* Light Green */
            40% { background-color: #ff5733; } /* Orange */
            60% { background-color: #3498db; } /* Blue */
            80% { background-color: #8e44ad; } /* Purple */
            100% { background-color: white; }
          }

          @keyframes bounce {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.7); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
