import { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./Services.css";
import { NavLink } from "react-router-dom";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const details = [
    {
      title: "Daycare",
      descripiton: "A nurturing environment for early childhood development.",
      options: [
        "Infant Care",
        "Toddler Programs",
        "Early Learning",
        "Playgroup",
      ],
      link: "/daycare",
      image:
        "https://media.istockphoto.com/id/1427459436/photo/a-happy-female-teacher-sitting-and-playing-hand-games-with-a-group-of-little-schoolchildren.webp?b=1&s=612x612&w=0&k=20&c=GM4W4y1dFf0DJDFtzjzsYDfUkW-QacfZcPwSUwbxeBc=",
    },
    {
      title: "Nursery",
      descripiton: "Preparing young learners for a lifetime of discovery.",
      options: ["Preschool Curriculum", "Early Literacy", "Outdoor Activities"],
      link: "/nursery",
      image:
        "https://cdn.pixabay.com/photo/2017/04/05/08/18/kindergarten-2204239_640.jpg",
    },
    {
      title: "Primary School",
      descripiton: "Building a strong foundation for academic success.",
      options: [
        "Elementary Education",
        "WASSCE Prep",
        "Math & Science Focus",
        "Physical Education",
      ],
      link: "/primary-school",
      image:
        "https://cdn.pixabay.com/photo/2016/02/03/18/54/students-1177710_640.jpg",
    },
    {
      title: "High School",
      descripiton: "Empowering students to excel academically and beyond.",
      options: [
        "College Prep",
        "Extracurricular Activities",
        "Advanced Placement",
        "Career Counseling",
      ],
      link: "high-school",
      image:
        "https://media.istockphoto.com/id/1417921874/photo/young-woman-in-school-library.webp?b=1&s=612x612&w=0&k=20&c=zwmDdEkakJKmqY-W7dI00Jaa58dsudEwDQmbxKAJRkI=",
    },
  ];

  const currentDetail = details[currentIndex];

  const showNext = () => {
    if (currentIndex < details.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(details.length - 1);
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
            {details.map((detail, index) => (
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
                <NavLink to={currentDetail.link}>
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
              {" "}
              <img src={currentDetail.image} alt={currentDetail.title} />
              {/* <p>Lorem Ipsum</p> */}
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

export default Services;
