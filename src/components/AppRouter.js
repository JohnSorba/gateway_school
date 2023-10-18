import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// SITE PAGES
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Academic from "../pages/Academic";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

// ABOUT SUB-PAGES
import AboutContent from "../pages/AboutContent";
import AboutMission from "../pages/AboutMission";
import AboutHistory from "../pages/AboutHistory";
import AboutAdministration from "../pages/AboutAdministration";
import AboutGallery from "../pages/AboutGallery";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppRouter() {
  const [curPageIndex, setCurPageIndex] = useState(0);
  const getPageIndex = (index) => {
    setCurPageIndex(index);
  };

  useEffect(() => {
    // Code to run on component mount
    const savedIndex = localStorage.getItem("curPageIndex");
    if (savedIndex !== null) {
      setCurPageIndex(parseInt(savedIndex, 10));
    }
  }, []);

  useEffect(() => {
    // Code to run on component mount
    localStorage.setItem("curPageIndex", curPageIndex);
  }, [curPageIndex]);

  return (
    <div>
      {" "}
      <BrowserRouter>
        <Navbar curPageIndex={curPageIndex} getPageIndex={getPageIndex} />
        {/* NAVIGATION */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                curPageIndex={curPageIndex}
                getPageIndex={getPageIndex}
              />
            }
          />

          {/* ABOUT PAGE ROUTES */}
          <Route
            path="about"
            element={
              <AboutPage
                curPageIndex={curPageIndex}
                setCurPageIndex={setCurPageIndex}
                getPageIndex={getPageIndex}
              />
            }
          >
            <Route index element={<AboutContent />} />
            <Route path="history" element={<AboutHistory />} />
            <Route path="mission" element={<AboutMission />} />
            <Route path="administration" element={<AboutAdministration />} />
            <Route path="gallery" element={<AboutGallery />} />
          </Route>
          <Route path="/academic" element={<Academic />} />
          <Route path="/parent" />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
