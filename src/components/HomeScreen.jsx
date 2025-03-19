// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";

// const images = [
//   "/mahe.jpg",
//   "/mun0.jpg",
//   "/mun1.jpg",
//   "/mun2.jpg",
//   "/mun3.jpg",
// ];

// const HomeScreen = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Automatically change the image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen">
//       {/* Background Image Carousel */}
//       <div
//         className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
//       >
//         <div
//           className="flex transition-transform duration-1000"
//           style={{
//             transform: `translateX(-${currentImageIndex * 100}vw)`,
//           }}
//         >
//           {images.map((img, index) => (
//             <div key={index} className="w-screen h-screen flex-shrink-0">
//               <img
//                 src={img}
//                 alt={`Background ${index + 1}`}
//                 className="w-full h-full object-cover opacity-80"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navbar */}
//       <Navbar className="relative z-20" />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-8">
//         {/* Main Title & Logo Container */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center text-center sm:text-left">
//           {/* Title */}
//           <div className="flex flex-col">
//             <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none">
//               MAHE
//             </h1>
//             <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none">
//               MUN
//             </h1>
//           </div>

//           {/* Logo Image */}
//           <img
//             src="/logo2.png"
//             alt="Logo"
//             className="mt-6 sm:mt-0 sm:ml-12 h-24 sm:h-32 md:h-40 lg:h-48"
//           />
//         </div>

//         {/* Subtitle */}
//         <p className="text-lg sm:text-xl md:text-2xl text-center sm:text-right mt-4 sm:mt-8">
//           Welcome to the MAHE version of the Model United Nations.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;
import React from "react";
import Navbar from "./Navbar";

const HomeScreen = () => {
  return (
    <>
      <Navbar classname="text-white z-10" />
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center text-white px-4 sm:px-8"
        // style={{ backgroundImage: "url('/mahe.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-0 "></div>
        {/* Container with left and right divisions */}
        <div className="flex w-full h-full z-10">
          
          {/* Left Division */}
          <div className="flex-1 flex items-start">
            <div className="pt-10 pl-4">
              <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none">
                MAHE
              </h1>
              <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none">
                MUN
              </h1>
            </div>
          </div>

          {/* Right Division */}
          <div className="flex-1 flex flex-col justify-between">
            
            {/* Upper Right Division - Logo */}
            <div className="flex justify-center mt-6">
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-24 sm:h-32 md:h-40 lg:h-64 "
              />
            </div>

            {/* Lower Right Division - Subtitle */}
            <div className="flex justify-center mt-4 mb-8">
              <p className="text-lg sm:text-xl md:text-3xl text-center sm:text-right">
                Welcome to the MAHE version of <br/> the Model United Nations.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default HomeScreen;
