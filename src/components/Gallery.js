import { useState } from "react";
import "./Gallery.css";
import Testimonials from "./Testimonials";
import { images } from "../data/ApplicationData";
import GalleryModal from "./GalleryModal";

function Gallery() {
  return (
    <section id="gallery">
      <div className="main-container">
        <header>
          <h2>Life at Gateway</h2>
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
          <GalleryModal images={images} />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
