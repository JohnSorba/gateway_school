import { useState } from "react";
import AppRouter from "./components/AppRouter";

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
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
