import { useState } from "react";
import "./Gallery.css";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Testimonials from "./Testimonials";

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    "/assembly.jpg",
    "/devotion.jpg",
    "/assemblyKid.jpg",
    "/uncAug.jpg",
    "/busKids.jpg",
    "/gateway_topview.jpg",
    "/backyard3.jpg",
    "/devotion2.jpg",
    "/teachers.jpg",
    "/awards_ceremony.jpg",
    "/awards_ceremony2.jpg",
  ];

  // Open the Modal and set the current image
  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the Modal
  const closeModal = () => {
    setCurrentImage(null);
    setCurrentIndex(null);
    setIsOpen(false);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="gallery">
      <div className="main-container">
        <header>
          <h2>Voices of Inspiration: Pupil's Speak</h2>
          <p>
            At Gateway School, life is a vibrant tapestry of learning,
            friendship, and personal growth. We foster an environment where
            every pupil is encouraged to explore their potential, discover their
            passions, and excel academically. Explore the voices of our pupils
            and get a glimpse of the enriching journey they embark on at Gateway
            School.
          </p>
        </header>

        <div className="gallery-main-container">
          <Testimonials />
          <div>
            <div className="gallery-container">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => openModal(image, index)}
                >
                  <img src={image} alt={`Image ${index}`} />
                </div>
              ))}{" "}
              {/* Modal for displaying the clicked image */}
              {isOpen && (
                <div className="gallery-modal">
                  <span className="close-btn" onClick={closeModal}>
                    <XCircleIcon className="h-12 w-12" />
                  </span>
                  <img
                    src={currentImage}
                    alt="Current"
                    className="modal-content"
                  />

                  {/* Previous and Next buttons */}

                  {currentIndex > 0 && (
                    <span className="prev" onClick={prev}>
                      <ChevronLeftIcon className="h-12 w-12" />
                    </span>
                  )}

                  {currentIndex < images.length - 1 && (
                    <span className="next" onClick={next}>
                      <ChevronRightIcon className="h-12 w-12" />
                    </span>
                  )}
                </div>
              )}
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
