import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const news = [
  {
    title: "New Website Launched",
    date: "Aug 15, 2023",
    summary:
      "We are excited to announce the launch of our new website. Explore the latest updates and features!",
    link: "/news/new-website-launched",
  },
  {
    title: "New Scholarship Program",
    date: "Sep 2, 2023",
    summary:
      "Introducing our new scholarship program to support aspiring students in their educational journey.",
    link: "/news/scholarship-program",
  },
  {
    title: "Daniel Ndanema",
    date: "Sep 2, 2023",
    summary:
      "Introducing our new scholarship program to support aspiring students in their educational journey.",
    link: "/news/scholarship-program",
  },
];

function SliderTest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const styles = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "5rem",
  };

  return (
    <div style={styles}>
      <Slider {...settings}>
        {news.map((news) => (
          <div>
            <p>
              <time datetime="2023-10-15T10:00:00">{news.date}</time>
            </p>
            <h2>{news.title}</h2>
            <p>{news.summary}</p>
            <Link to={news.link} className="news-btn">
              Learn More
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderTest;
