import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// SITE PAGES
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Academic from "../pages/Academic";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        {/* NAVIGATION */}
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about">
            <Route path="/about/our_story" Component={AboutPage} />
            <Route path="/about/values" element={<AboutPage />} />
            <Route path="/about/admin" element={<AboutPage />} />
            <Route path="/about/gallery" element={<AboutPage />} />
            <Route path="/about/headteacher_speech" element={<AboutPage />} />
          </Route>
          <Route path="/academic" element={<Academic />} />
          <Route path="/parent" />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
