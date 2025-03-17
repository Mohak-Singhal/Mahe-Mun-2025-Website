import React from "react";

const HomeScreen = () => {
  return (
    <div 
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4 sm:px-8"
      style={{ backgroundImage: "url('/mahe.jpg')" }}
    >
      {/* Main Title & Logo Container */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center text-center sm:text-left">
        {/* Title */}
        <div className="flex flex-col">
          <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none">
            MAHE
          </h1>
          <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none">
            MUN
          </h1>
        </div>

        {/* Logo Image */}
        <img 
          src="/logo.jpg" 
          alt="Logo" 
          className="mt-6 sm:mt-0 sm:ml-12 h-24 sm:h-32 md:h-40 lg:h-48"
        />
      </div>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-center sm:text-right mt-4 sm:mt-8">
        Welcome to the MAHE version of the Model United Nations.
      </p>
    </div>
  );
};

export default HomeScreen;
