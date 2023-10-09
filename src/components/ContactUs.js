import { NavLink } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
  return (
    <section id="contact">
      {/* PARALLAX CONTAINER */}
      <div className="parallax-container">
        <div className="parallax-background"></div>
      </div>

      {/* CONTACT CONTENT DISPLAYED */}
      <div className="contact-container">
        <div>
          {" "}
          <h1>Have a question?</h1>
          <h1>Get in touch with us.</h1>
          <NavLink to="/contact" className="contact-link">
            Contact Us
          </NavLink>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
