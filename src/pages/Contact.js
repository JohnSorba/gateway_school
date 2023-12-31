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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Accordion from "../Accordion/AccApp";
import { faqs } from "../data/ApplicationData";

function Contact() {
  const { section } = useParams();

  useEffect(() => {
    // Scroll to the section based on the 'section' variable
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div>
      <div id="contact-page">
        {/* Banner Image */}
        <header className="contact-header">
          <div className="contact-header-container">
            <span className="text-2xl text-blue-700 mb-4">Contact</span>
            <h1>Gateway School</h1>
            <div className="social-container">
              <FaFacebook className="w-6 h-6 text-blue-700" />
              <FaInstagram className="w-6 h-6 text-pink-700" />
              <FaTwitter className="w-6 h-6 text-blue-400" />{" "}
            </div>
          </div>
        </header>
        {/* CONTACT DETAILS */}
        <section id="contact-details">
          <div className="contact-details-container">
            <div>
              <FaLocationArrow className="w-12 h-12 text-yellow-500" />
              <div>
                <p className="text">Address</p>
                <p>
                  81c Fort Street, <br />
                  Off Circular Rd. Freetown
                </p>
              </div>
            </div>
            <div>
              <FaPhoneAlt className="w-12 h-12 text-green-500" />
              <div>
                <p className="text">Phone</p>
                <p>00 (232) 34 243599</p>
              </div>
            </div>
            <div>
              <GrMail className="w-12 h-12 text-blue-500" />
              <div>
                <p className="text">Email</p>
                <p>gateway1990@gmail.com</p>
              </div>
            </div>
            <div>
              <BiTimeFive className="w-12 h-12 text-orange-500" />
              <div>
                <p className="text">Opening Hours</p>
                <p>8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ's */}
        <section id="faq">
          <div className="faq-container">
            <h1 className="text-4xl text-center mb-16">
              Frequently Asked Questions
            </h1>
            <Accordion data={faqs} />
          </div>
        </section>
        {/* Google Maps */}
        <section id="google-map">
          <div className="map-container">
            <h1>Visit Us At This Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d967.7314567322055!2d-13.23494026543523!3d8.481954537967058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c3ccd63c3e69%3A0x9a14e86a41bcc908!2sGateway%20Daycare%2C%20Nursery%20%26%20Preparatory%20School!5e0!3m2!1sen!2sus!4v1697473744936!5m2!1sen!2sus"
              width="600"
              height="650"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Media Links */}
        </section>
      </div>
    </div>
  );
}

export default Contact;
