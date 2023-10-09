import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("dropdown activated");
  }

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <BrowserRouter>
        <HomePage
          isOpen={isOpen}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          toggleNavbar={toggleNavbar}
        />

        {/* NAVIGATION */}
        <Routes>
          <Route path="/" />
          <Route path="/about">
            <Route path="/about/our_story" />
            <Route path="/about/values" />
            <Route path="/about/admin" />
            <Route path="/about/gallery" />
            <Route path="/about/headteacher_speech" />
          </Route>
          <Route path="/activities" />
          <Route path="/parent" />
          <Route path="/events" />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
