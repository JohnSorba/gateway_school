import { useState } from "react";
import AppRouter from "./components/AppRouter";
import { SubpageProvider } from "./Contexts/SubpageContext";
import ScrollToTop from "./components/ScrollToTop";

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
      <SubpageProvider>
        <AppRouter></AppRouter>
      </SubpageProvider>
    </div>
  );
}

export default App;
