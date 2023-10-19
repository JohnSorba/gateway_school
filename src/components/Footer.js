import { Link } from "react-router-dom";
import { HashLink as FaqLink } from "react-router-hash-link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { AboutNavDropdownData } from "../data/AboutPageData";
import { useSubpage } from "../Contexts/SubpageContext";

function Footer() {
  const { getPageIndex } = useSubpage();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <article className="logo-col">
          <img src="/gateway_logo.png" alt="Gateway Logo" />
        </article>

        {/* OUR SCHOOL LINKS */}
        <article>
          <h3>Our School</h3>

          <ul>
            {AboutNavDropdownData.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.url}
                  className="link"
                  onClick={() => getPageIndex(index)}
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </article>

        {/* PARENTS LINKS */}
        <article>
          <h3>Parents</h3>
          <ul className="mb-8">
            <li>
              <Link to="parents/curriculum" className="link">
                Curriculum
              </Link>
            </li>
            <li>
              <Link to="parents/calendar" className="link">
                Calendar
              </Link>
            </li>
          </ul>

          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/events" className="link">
                Events/News
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
            <li>
              <FaqLink to="/contact#faq" className="link">
                FAQs
              </FaqLink>
            </li>
          </ul>
        </article>

        <article>
          <h3>Academic</h3>
          <ul>
            <li>
              <Link to="/academic/daycare" className="link">
                Daycare
              </Link>
            </li>
            <li>
              <Link to="/academic/nursery" className="link">
                Nursery
              </Link>
            </li>
            <li>
              <Link to="/academic/primary-school" className="link">
                Primary
              </Link>
            </li>
            <li>
              <Link to="/academic/high-school" className="link">
                High School
              </Link>
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
      </div>
      <article className="base">
        <div className="copyright">
          Gateway PreSchool &copy;
          <span className="year">{new Date().getFullYear()}</span>. All rights
          reserved.
        </div>
        <div className="social-links">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaInstagram size={24} />
        </div>
      </article>
      <div className="toTop text-center bg-blue-200" onClick={scrollToTop}>
        <ChevronUpIcon className="h-8 w-8" />
      </div>
    </footer>
  );
}

export default Footer;
