import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import AccApp from "../Accordion/AccApp";

function Contact() {
  return (
    <div>
      <Navbar />
      <div id="contact-page">
        {/* Banner Image */}
        <section id="header">
          <div className="header-container">
            <h1>Contact US</h1>
          </div>
        </section>
        {/* CONTACT DETAILS */}
        <section id="contact-details">
          <div className="contact-details-container">
            <div>
              <FaLocationArrow className="w-12 h-12 text-yellow-500" />
              <p>
                81c Fort Street, <br />
                Off Circular Rd. Freetown
              </p>
            </div>
            <div>
              <FaPhoneAlt className="w-12 h-12 text-green-500" />
              <p>00 (232) 34 243599</p>
            </div>
            <div>
              <GrMail className="w-12 h-12 text-blue-500" />
              <p>gateway1990@gmail.com</p>
            </div>
            <div>
              <BiTimeFive className="w-12 h-12 text-orange-500" />
              <p>
                Opening Hours: <br /> 8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </section>
        <section id="social-links">
          <h1>Follow Us</h1>
          <div className="social-container">
            <div>
              <FaFacebook className="w-12 h-12 text-blue-700" />
              <p>Visit Facebook</p>
            </div>
            <div>
              <FaInstagram className="w-12 h-12 text-pink-700" />
              <p>Visit Instagram</p>
            </div>
            <div>
              <FaTwitter className="w-12 h-12 text-blue-400" />
              <p>Visit Twitter</p>
            </div>
          </div>
        </section>{" "}
        {/* FAQ's */}
        <section id="faq">
          <div className="faq-container">
            <AccApp />
          </div>
        </section>
        {/* Google Maps */}
        <section id="google-map">
          <div className="map-container">
            <h1>
              Visit <br /> Us
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d967.7314567322055!2d-13.23494026543523!3d8.481954537967058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c3ccd63c3e69%3A0x9a14e86a41bcc908!2sGateway%20Daycare%2C%20Nursery%20%26%20Preparatory%20School!5e0!3m2!1sen!2sus!4v1697473744936!5m2!1sen!2sus"
              width="600"
              height="450"
              className="map"
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Media Links */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
