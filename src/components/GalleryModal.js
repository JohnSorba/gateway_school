import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import "./Gallery.css";

function GalleryModal({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <div>
      <div className="gallery-container">
        {/* <Slider {...settings}> */}
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(image, index)}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}{" "}
        {/* </Slider> */}
        {/* Modal for displaying the clicked image */}
        {isOpen && (
          <div className="gallery-modal">
            <span className="close-btn" onClick={closeModal}>
              <XCircleIcon className="h-12 w-12" />
            </span>
            <img src={currentImage} alt="Current" className="modal-content" />

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
  );
}

export default GalleryModal;
