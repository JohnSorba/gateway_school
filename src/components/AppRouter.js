import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

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

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      {/* NAVIGATION */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        {/* ABOUT PAGE ROUTES */}
        <Route path="about" element={<AboutPage />}>
          <Route index element={<AboutContent />} />
          <Route path="history" element={<AboutHistory />} />
          <Route path="mission" element={<AboutMission />} />
          <Route path="administration" element={<AboutAdministration />} />
          <Route path="gallery" element={<AboutGallery />} />
        </Route>

        {/* OTHER ROUTES */}
        <Route path="/academic" element={<Academic />} />
        <Route path="/parent" />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:section" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
