import { useState, useEffect } from "react";
import "./Hero.css";

const names = ["Daycare", "Preparatory", "Primary", "High"];

function Hero() {
  const [nameIndex, setNameIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("drop-in");

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

  return (
    <section className="hero-section ">
      <div className="hero-container">
        <div>
          <h1 className="heading">
            <span>Welcome to</span>
            <br />
            <span className="school-title">
              Gateway{" "}
              <span className={`animated-text ${animationClass}`}>
                {names[nameIndex]}
              </span>
              <br />
              School
            </span>{" "}
          </h1>
          {/* <p>{description}</p> */}
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
