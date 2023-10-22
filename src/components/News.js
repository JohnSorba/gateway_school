import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./News.css";

const content = {
  Announcement: [
    {
      title: "Upcoming Holiday Closure",
      date: "Sep 5, 2023",
      summary:
        "Please note that our office will be closed on September 5th for the holiday. Normal operations will resume on the following day.",
      link: "/events",
    },
    {
      title: "New Office Location",
      date: "Oct 10, 2023",
      summary:
        "We are relocating to a new office location to better serve our customers. Stay tuned for more details.",
      link: "/events",
    },
  ],
  Event: [
    {
      title: "Annual Charity Gala",
      date: "Oct 20, 2023",
      summary:
        "Join us for our annual charity gala, where we aim to make a positive impact on our community. Purchase your tickets now!",
      link: "/events",
    },
    {
      title: "Educational Seminar",
      date: "Nov 8, 2023",
      summary:
        "Attend our upcoming educational seminar featuring guest speakers and interactive workshops. Save the date!",
      link: "/events",
    },
    {
      title: "Quiz Competition",
      date: "Oct 25, 2023",
      summary:
        "Attend our upcoming educational seminar featuring guest speakers and interactive workshops. Save the date!",
      link: "/events",
    },
  ],
};

const news = [
  {
    title: "New Website Launched",
    date: "Aug 15, 2023",
    summary:
      "We are excited to announce the launch of our new website. Explore the latest updates and features!",
    link: "/events",
  },
  {
    title: "New Scholarship Program",
    date: "Sep 2, 2023",
    summary:
      "Introducing our new scholarship program to support aspiring students in their educational journey.",
    link: "/events",
  },
  {
    title: "Daniel Ndanema",
    date: "Sep 2, 2023",
    summary:
      "Introducing our new scholarship program to support aspiring students in their educational journey.",
    link: "/events",
  },
];

function News() {
  const [isEvent, setIsEvent] = useState(false);
  const [isAnnouncement, setIsAnnouncement] = useState(true);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
  };

  var announcementSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openAnnouncement = () => {
    setIsAnnouncement(true);
    setIsEvent(false);
  };
  const openEvent = () => {
    setIsEvent(true);
    setIsAnnouncement(false);
  };

  return (
    <section id="news-section">
      <div className="news-container">
        <div className="events">
          <header className="news-header">
            <h1
              onClick={openAnnouncement}
              className={`${isAnnouncement ? "announcement-open" : ""}`}
            >
              Announcements
            </h1>
            <h1
              onClick={openEvent}
              className={`${isEvent ? "event-open" : ""}`}
            >
              Events
            </h1>
          </header>
          <div className="event-details">
            {/* ANNOUNCEMENTS */}
            <Slider {...announcementSettings}>
              {isAnnouncement &&
                content.Announcement.map((announcement, index) => (
                  <div
                    className="announcement-details"
                    key={announcement.title}
                  >
                    <p>
                      <time dateTime="2023-10-15T10:00:00">
                        {announcement.date}
                      </time>
                    </p>
                    <h2>{announcement.title}</h2>
                    <p>{announcement.summary}</p>
                    <Link to={announcement.link} className="news-btn">
                      Read More
                    </Link>
                  </div>
                ))}
            </Slider>

            {/* EVENTS */}
            <Slider {...announcementSettings}>
              {isEvent &&
                content.Event.map((events, index) => (
                  <div className="event-detail" key={events.title}>
                    <p>
                      <time dateTime="2023-10-15T10:00:00">{events.date}</time>
                    </p>
                    <h2>{events.title}</h2>
                    <p>{events.summary}</p>
                    <Link to={events.link} className="news-btn">
                      Read More
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        {/* LATEST NEWS SECTION */}
        <div className="latest-news">
          <h1>Latest News</h1>
          <div className="latest-news-content">
            <Slider {...settings}>
              {news.map((news) => (
                <div className="news" key={news.title}>
                  <p>
                    <time dateTime="2023-10-15T10:00:00">{news.date}</time>
                  </p>
                  <h2>{news.title}</h2>
                  <p>{news.summary}</p>
                  <Link to={news.link} className="news-btn">
                    Read More
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default News;
