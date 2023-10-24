import { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./Services.css";
import { NavLink } from "react-router-dom";
import { serviceDetails } from "../data/ApplicationData";
import { useSubpage } from "../Contexts/SubpageContext";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { getPageIndex } = useSubpage();

  const currentDetail = serviceDetails[currentIndex];

  const goToIndex = (index) => {
    if (currentIndex === 0) {
      getPageIndex(1);
    } else {
      getPageIndex(index);
    }
  };

  const showNext = () => {
    if (currentIndex < serviceDetails.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(serviceDetails.length - 1);
    }
  };

  const goToDetail = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="services-section">
      <div className="services-container">
        <header className="services-header">
          <h1>Explore Our Curriculum</h1>
          <div className="service-group">
            {serviceDetails.map((detail, index) => (
              <button
                key={detail.title}
                onClick={() => goToDetail(index)}
                className={`${currentIndex === index ? "active-index" : ""}`}
              >
                {detail.title}
              </button>
            ))}
          </div>
        </header>

        <div className="services-grid">
          <>
            <div className="service-description">
              <h2>{currentDetail.title}</h2>
              <p>{currentDetail.descripiton}</p>
              <ul>
                {currentDetail.options.map((option, index) => (
                  <li key={option[index]}>
                    <span>
                      <CheckBadgeIcon className="h-6 w-6 icon" />
                    </span>
                    {option}
                  </li>
                ))}
              </ul>
              <div className="flex-items">
                <NavLink
                  to={currentDetail.link}
                  onClick={() => goToIndex(currentIndex)}
                >
                  <button>Learn More</button>
                </NavLink>
                <div className="nav-btn-container">
                  <ChevronLeftIcon
                    className="w-8 h-8 icon"
                    onClick={showPrevious}
                  />
                  <ChevronRightIcon
                    className="w-8 h-8 icon"
                    onClick={showNext}
                  />
                </div>
              </div>

              <div className="circle"></div>
            </div>
            <div>
              <div className="img">
                {" "}
                <img src={currentDetail.image} alt={currentDetail.title} />
                {/* <p>Lorem Ipsum</p> */}
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

export default Services;
