import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./ImageSlider.css";
import Hero from "./Hero";
import { heroSlides } from "../data/ApplicationData";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const description = heroSlides[currentIndex].description;

  const slideStyles = {
    backgroundImage: `url(${heroSlides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Code to run on component mount
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="sliderStyles">
      <div className="slideStyles" style={slideStyles}>
        <Hero description={description} />
        <div className="dot-container">
          {heroSlides.map((_, index) => (
            <div
              className={`dotStyle ${currentIndex === index ? "dot" : ""}`}
              key={index}
              onClick={() => goToSlide(index)}
            >
              •
            </div>
          ))}
        </div>
      </div>

      {/* LEFT AND RIGHT ARROWS */}
      <div className="left-arrow" onClick={goToPrevious}>
        <ChevronLeftIcon className="h-6 w-6" />
      </div>
      <div className="right-arrow" onClick={goToNext}>
        <ChevronRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
}

export default ImageSlider;
