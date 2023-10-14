import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const names = [
  { level: "Daycare", color: "green" },
  { level: "Preparatory", color: "yellow" },
  { level: "Primary", color: "blue" },
  { level: "High", color: "" },
];
const upcomingEvents = [
  {
    eventTitle: "Annual Science Fair",
    date: "October 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Gateway School Auditorium",
    description:
      "Explore the wonders of science with interactive exhibits, hands-on experiments, and inspiring presentations.",
    highlights:
      "Meet renowned scientists, participate in fun activities, and witness innovative student projects.",
    registrationLink: "https://example.com/register-science-fair",
  },
  {
    eventTitle: "Art Showcase: Expressions of Creativity",
    date: "November 5, 2023",
    time: "6:30 PM - 8:30 PM",
    location: "Gateway School Art Gallery",
    description:
      "Discover the world of art as our talented students showcase their creativity through paintings, sculptures, and more.",
    highlights:
      "Meet the artists, enjoy live music, and explore the world of visual arts.",
    registrationLink: "https://example.com/register-art-showcase",
  },
  {
    eventTitle: "Open House: Gateway School Tours",
    date: "December 10, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "Gateway School Campus",
    description:
      "Experience a day at Gateway School with guided tours, meet the faculty, and learn about our educational programs.",
    highlights:
      "Interact with current students and parents, and discover why Gateway is the perfect choice for your child's education.",
    registrationLink: "https://example.com/register-open-house",
  },
];

function Hero() {
  const [nameIndex, setNameIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("drop-in");
  const [eventAnimation, seteventAnimation] = useState("event-drop-in");

  const currentEvent = upcomingEvents[currentEventIndex];

  useEffect(() => {
    // Code to run on component mount
    const interval = setInterval(() => {
      setAnimationClass("drop-out");
      setTimeout(() => {
        setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        setAnimationClass("drop-in");
      }, 500);
    }, 5000);
    return () => {
      // Code to run on component unmount
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Code to run on component mount
    const slideshowTimer = setInterval(() => {
      seteventAnimation("event-drop-out");
      setTimeout(() => {
        setCurrentEventIndex(
          (prevIndex) => (prevIndex + 1) % upcomingEvents.length
        );
        seteventAnimation("event-drop-in");
      }, 500);
    }, 15000);
    return () => {
      // Code to run on component unmount
      clearInterval(slideshowTimer);
    };
  }, []);

  return (
    <section className="hero-section ">
      <div className="hero-container">
        <div>
          <h1 className="heading">
            <span>Welcome to</span>
            <br />
            <span className="school-title">
              Gateway{" "}
              <span
                className={`animated-text ${animationClass} ${names[nameIndex].color}`}
              >
                {names[nameIndex].level}
              </span>
              <br />
              School
            </span>{" "}
          </h1>
          {/* <p>{description}</p> */}
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
        <div className={`upcoming-events ${eventAnimation}`}>
          <h2>Upcoming Events</h2>

          <div className={`event`}>
            <h3>{currentEvent.eventTitle}</h3>
            <p>{currentEvent.date}</p>
            <p>{currentEvent.time}</p>
            <p>{currentEvent.location}</p>
            <p>{currentEvent.description}</p>
            {/* <p>{currentEvent.highlights}</p> */}
            <Link to={currentEvent.registrationLink} className="event-link">
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
