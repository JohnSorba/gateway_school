import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./ImageSlider.css";
import "./About_Slider.css";
import { slides } from "../data/ApplicationData";

function About_Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Code to run on component mount
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="sliderStyles">
      <div className="about-slideStyles" style={slideStyles}></div>
      <article className=" flex items-center justify-between px-6">
        <div className="dot-container">
          {slides.map((_, index) => (
            <div
              className={`about-dotStyle ${
                currentIndex === index ? "about-dot" : ""
              }`}
              key={index}
              onClick={() => goToSlide(index)}
            >
              •
            </div>
          ))}
        </div>

        {/* LEFT AND RIGHT ARROWS */}
        <div className="about-dot-container flex gap-2 justify-end py-2 px-4">
          <div className="about-left-arrow bg-blue-300" onClick={goToPrevious}>
            <ChevronLeftIcon className="h-6 w-6" />
          </div>
          <div className="about-right-arrow bg-blue-300" onClick={goToNext}>
            <ChevronRightIcon className="h-6 w-6" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default About_Slider;
