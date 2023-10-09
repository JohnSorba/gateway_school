import { NavLink } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  FaBeer,
  FaBible,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiBeerStein } from "react-icons/fa";
import "./Footer.css";

function Footer({ isOpen, setIsOpen, isDropdownOpen, toggleDropdown }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <article className="logo-col">
          <img src="/gateway_logo.png" alt="Gateway Logo" />
          <p className="copyright">
            <br /> Copyright &copy;
            <span className="year">2023</span>
            <br />
            Gateway Pre School.
            <br /> All rights reserved.
          </p>
        </article>
        <article>
          <h3>Navigation</h3>
          <ul
            className={`footer-nav-links flex flex-col gap-4 ${
              isOpen ? "open" : ""
            }`}
          >
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className={`relative`}>
              <NavLink
                to="/about"
                className="nav-link flex items-center justify-between"
                onClick={toggleDropdown}
              >
                <p>About Us</p>
                <ChevronDownIcon className="h-4 w-4" />
              </NavLink>
              {isDropdownOpen && (
                <ul className="footer-dropdown">
                  <li>
                    <NavLink to="/our_story" className="dropdown-nav-link">
                      Our Story
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/values" className="dropdown-nav-link">
                      School Values
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin" className="dropdown-nav-link">
                      Administration and Staff
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" className="dropdown-nav-link">
                      School Gallery
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className={`relative`}>
              <NavLink
                to="/parents"
                className="nav-link flex items-center justify-between"
                onClick={toggleDropdown}
              >
                Parents
                <ChevronDownIcon className="h-4 w-4" />
              </NavLink>
              {isDropdownOpen && (
                <ul className="footer-dropdown">
                  <li>
                    <NavLink to="curriculum" className="dropdown-nav-link">
                      Curriculum
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/activities" className="nav-link">
                Activities
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="nav-link">
                Events/News
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </article>
        <article className="address-col">
          <div className="mb-8">
            <h3>Visit Us</h3>
            <address>
              <p className="address">
                81c Fort Street, Off Circular Rd., Freetown
              </p>
            </address>
          </div>

          <div>
            <h3>Contact Us</h3>
            <address>
              <p>
                <span>Tel: </span>
                <a href="tel:0023276483409">076-483409</a>
                <br />
                <span>Email: </span>
                <a href="mailto:hello@gateway.com">hello@gateway.com</a>
              </p>
            </address>
          </div>
        </article>
        <article>
          <h3>Follow & Share</h3>
          <div className="social-links">
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
          </div>
        </article>
      </div>
      <div className="toTop text-center bg-blue-200" onClick={scrollToTop}>
        <ChevronUpIcon className="h-12 w-12" />
      </div>
    </footer>
  );
}

export default Footer;
