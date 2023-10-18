import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./Navbar.css";
import { AboutNavDropdownData } from "../data/AboutPageData";
import { AcademicNavDropdownData } from "../data/AboutPageData";

function Navbar({ getPageIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState([false, false]);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];

    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
    console.log("dropdown activated: ", updatedDropdownOpen);
  };

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    // Code to run on component mount
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Code to run on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "" : ""}`}>
      <div className="navbar-container">
        <h1>
          {" "}
          <NavLink to="/" className="text-3xl font-semibold text-white">
            Gateway
          </NavLink>
        </h1>

        <div className={`menu ${isOpen ? "show" : ""}`}>
          <h1 className="navbar-logo" onClick={toggleNavbar}>
            {" "}
            <NavLink to="/">Gateway</NavLink>
          </h1>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link" onClick={toggleNavbar}>
                Home
              </NavLink>
            </li>

            {/* ABOUT US DROPDOWN LINK */}
            <li>
              <NavLink
                className="nav-link dropdown-nav-link"
                onClick={() => toggleDropdown(0)}
              >
                <span className="dropdown-link-title">Our School</span>
                <ChevronDownIcon className="h-4 w-4" />
              </NavLink>
              <ul
                id="dropdown1"
                className={`dropdown ${dropdownOpen[0] ? "open" : ""}`}
              >
                {AboutNavDropdownData.map((data, index) => (
                  <li key={index} onClick={toggleNavbar}>
                    <NavLink
                      to={data.url}
                      className={data.style}
                      onClick={() => getPageIndex(index)}
                    >
                      {data.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* PARENT DROPDOWN LINK */}
            <li>
              <NavLink
                className="nav-link dropdown-nav-link"
                onClick={() => toggleDropdown(1)}
              >
                <span className="dropdown-link-title">Parents</span>
                <ChevronDownIcon className="h-4 w-4" />
              </NavLink>
              <ul
                id="dropdown2"
                className={`dropdown ${dropdownOpen[1] ? "open" : ""}`}
              >
                <li>
                  <NavLink to="curriculum" className="dropdown-link">
                    Calendar
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* ACADEMIC DROPDOWN LINK */}
            <li>
              <NavLink
                className="nav-link dropdown-nav-link"
                onClick={() => toggleDropdown(2)}
              >
                Academic
                <ChevronDownIcon className="h-4 w-4" />
              </NavLink>
              <ul
                id="dropdown3"
                className={`dropdown ${dropdownOpen[2] ? "open" : ""}`}
              >
                {AcademicNavDropdownData.map((data, index) => (
                  <li key={index} onClick={toggleNavbar}>
                    <NavLink
                      to={data.url}
                      className={data.style}
                      onClick={() => getPageIndex(index)}
                    >
                      {data.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* EVENTS/NEWS DROPDOWN LINK */}
            <li onClick={toggleNavbar}>
              <NavLink to="/events" className="nav-link">
                Events/News
              </NavLink>
            </li>

            {/* CONTACT DROPDOWN LINK */}
            <li onClick={toggleNavbar}>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>{" "}
          <div className="contact-info">
            <p>{`{81c Fort Street, Off Circular Rd., Freetown}`}</p>
            <p>{`{(076) 483 409}`}</p>
          </div>
        </div>

        {!isOpen ? (
          <button className="hamburger-menu nav-icon" onClick={toggleNavbar}>
            <Bars3Icon className="h-8 w-8" />
          </button>
        ) : (
          <div className="close-icon nav-icon" onClick={toggleNavbar}>
            <XMarkIcon className="h-8 w-8" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
