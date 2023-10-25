import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonials } from "../data/ApplicationData";
import "./Testimonials.css";

function Testimonials() {
  var Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h1>Voices of Inspiration: Pupil's Speak</h1>
        <div className="testimonial-flex-container">
          <Slider {...Settings}>
            {testimonials.map((testimony) => (
              <article className="testimony" key={testimony.statement}>
                <img src={testimony.image} alt={testimony.name} />
                <q>{testimony.statement}</q>
                <hr className=" bg-blue-600 w-64 line" />
                <h3>{testimony.name}</h3>
                <span>{testimony.title}</span>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
