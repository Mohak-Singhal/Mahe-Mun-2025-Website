import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/mahe.jpg",
  "/mun0.jpg",
  "/mun1.jpg",
  "/mun2.jpg",
  "/mun3.jpg",
];

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const homeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);

  // Automatic Background Image Transition using GSAP Timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Foreground Animation Effects
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 1 }
    );

    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 1.5,
      }
    );
  }, []);

  return (
    <>
    <div ref={homeRef} className="relative h-screen w-full overflow-hidden">
      <Navbar classname="text-white"/>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 -z-1">
        <div
          className="w-full h-full transition-transform duration-1000"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex w-full h-full mt-[60%] sm:mt-[11%] justify-center text-white px-6">
        <div className="flex flex-col items-center text-center space-y-6 mt-8 md:mt-4">
          {/* Animated Title */}
          <h1
            ref={titleRef}
            className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[100px] uppercase tracking-wide 
      text-white drop-shadow-md"
          >
            MAHE MUN
          </h1>

          {/* Event Date & Location */}
          <p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide bg-gray-900/70 
      px-6 py-2 rounded-lg shadow-md border border-gray-600 backdrop-blur-md 
      text-gray-300"
          >
            <span className="font-semibold text-white">15-17 AUG</span> |
            <span className="text-white font-semibold"> MAHE MUN</span>
          </p>

          {/* Engaging Subtitle */}
          <p
            ref={subtitleRef}
            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Step into the world of diplomacy, debate, and global leadership at
            <span className="text-white font-semibold">
              {" "}
              MAHE Model United Nations.
            </span>
          </p>

          {/* Animated Logo */}
          <div ref={logoRef} className="mt-6 flex justify-center">
            <img
              src="/logo2.png"
              alt="MAHE MUN Logo"
              className="h-40 md:h-36 lg:h-48 transition-transform duration-500 hover:scale-105 drop-shadow-md"
            />
          </div>
        </div>
      </div>

      

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-center sm:text-right mt-4 sm:mt-8">
        Welcome to the MAHE version of the Model United Nations.
      </p>
    </div>
    </>
  );
};

export default HomeScreen;
