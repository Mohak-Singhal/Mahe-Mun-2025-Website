import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import News from "./pages/News";
import Team from "./pages/team";
import Loader from "./components/Loader";
import ScrollUp from "./components/ScrollUp";
import AugustConference from "./pages/AugustConference";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <Loader /> 
  ) : (
    <Router>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/august-conference" element={<AugustConference />} />
      </Routes>
    </Router>
  );
};

export default App;

