import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./ImageSlider.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/assembly.jpg",
      title: "Boat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut viverra enim. Donec volutpat, orci vitae tempor pharetra, turpis augue vehicula nulla, nec accumsan risus nisl vel orci. Duis diam augue, vulputate eu tincidunt id, pellentesque quis tellus. Maecenas eu sagittis dolor, placerat sollicitudin dui. ",
    },
    { url: "/assemblyKid.jpg", title: "Boat" },
    { url: "/Augustine_Family.jpg", title: "Boat" },
    { url: "/uncAug.jpg", title: "Boat" },
    { url: "/gateway_topview.jpg", title: "Boat" },
    { url: "/gateway_frontview.jpg", title: "Boat" },
    { url: "/busKids.jpg", title: "Boat" },
    { url: "/geometry_blackboard.jpg", title: "Boat" },
  ];

  const description = slides[currentIndex].description;

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
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="sliderStyles">
      <div className="slideStyles" style={slideStyles}>
        <Navbar />
        <Hero description={description} />
        <div className="dot-container">
          {slides.map((_, index) => (
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
