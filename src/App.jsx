import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import News from "./pages/News";
import Team from "./pages/team";
import Loader from "./components/Loader";
import ScrollUp from "./components/ScrollUp";
import AboutUs from "./pages/AboutUs";
import AugustConference from "./pages/AugustConference";
import LoadingScreen from "./components/Loader2";

const images = [
  "/mahe.jpg",
  "/mun0.jpg",
  "/mun1.jpg",
  "/mun2.jpg",
  "/mun3.jpg",
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadedImages = 0;
    const startTime = Date.now(); 

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          resolve();
        };
        img.onerror = resolve; 
      });
    };

    Promise.all(images.map((src) => loadImage(src))).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 3000 - elapsedTime); 

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    });
  }, []);

  return loading ? <LoadingScreen /> : (
    <Router>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/august-conference" element={<AugustConference />} />
      </Routes>
    </Router>
  );
};

export default App;

