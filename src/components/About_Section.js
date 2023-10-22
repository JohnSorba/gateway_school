import {
  ArrowRightIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  HomeModernIcon,
  LightBulbIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { aboutImages } from "../data/ApplicationData";
import { useSubpage } from "../Contexts/SubpageContext";

function About_Section() {
  const { setCurPageIndex } = useSubpage();

  const goToIndex = () => {
    setCurPageIndex(1);
  };

  var Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <h3 className="motto">
          <span>Motto:</span> Nothing Ventured, Nothing Gained
        </h3>
        <header>
          <h1 className="title">Gateway School</h1>
          <h2 className="subtitle">Empowering Young Minds, Shaping Futures</h2>
          <p className="intro">
            <span className="text-2xl">W</span>elcome to Gateway School, where
            knowledge meets opportunity and young minds flourish. As a beacon of
            educational excellence in Sierra Leone, Gateway School has been
            nurturing the leaders of tomorrow since 1990. Our commitment to
            holistic education, innovation, and community engagement sets us
            apart as a catalyst for lifelong learning.
          </p>

          <Link to="/about/history" className="btn" onClick={goToIndex}>
            <span>Our Story</span>
            <ArrowRightIcon className="h-6 w-6 link-arrow" />
          </Link>
        </header>

        <div className="img-grid">
          <div className="img-container img-1">
            <img src={aboutImages[0].url} alt={aboutImages[0].title} />
          </div>

          <div className="img-container img-2">
            <img src={aboutImages[1].url} alt={aboutImages[1].title} />
          </div>
          <div className="img-container img-3">
            <img src={aboutImages[2].url} alt={aboutImages[2].title} />
          </div>
          <div className="img-container img-4">
            {" "}
            <img src={aboutImages[3].url} alt={aboutImages[3].title} />
          </div>
          <div className="img-container img-5">
            <img src={aboutImages[4].url} alt={aboutImages[4].title} />
          </div>
        </div>

        <div className="mobile-grid">
          <Slider {...Settings}>
            <img src={aboutImages[0].url} alt={aboutImages[0].title} />
            <img src={aboutImages[1].url} alt={aboutImages[1].title} />{" "}
            <img src={aboutImages[2].url} alt={aboutImages[2].title} />{" "}
            <img src={aboutImages[3].url} alt={aboutImages[3].title} />{" "}
            <img src={aboutImages[4].url} alt={aboutImages[4].title} />
          </Slider>
        </div>

        <div className="values">
          <h1>Core Values</h1>
          <ul className="core-values-list">
            <li>
              <CheckBadgeIcon className="h-12 w-12 icon" />
              <span>Excellence</span>
            </li>
            <li>
              {" "}
              <HandRaisedIcon className="h-12 w-12 icon" />
              <span>Integrity</span>
            </li>
            <li>
              {" "}
              <HomeModernIcon className="h-12 w-12 icon" />
              <span>Community</span>
            </li>

            <li>
              {" "}
              <GlobeAltIcon className="h-12 w-12 icon" />
              <span>Diversity</span>
            </li>
            <li>
              {" "}
              <LightBulbIcon className="h-12 w-12 icon" />
              <span>Innovation</span>
            </li>
          </ul>
        </div>
      </div>{" "}
    </section>
  );
}

export default About_Section;

function Stats() {
  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stats">
          <LightBulbIcon className="h-24 w-24" />
          <span>400+</span>
          <p>Students</p>
        </div>
        <div className="stats">
          <TrophyIcon className="h-24 w-24" />
          <span>1</span>
          <p>Award</p>
        </div>
        <div className="stats">
          <UserIcon className="h-24 w-24" />
          <span>26</span>
          <p>Teachers</p>
        </div>
      </div>
    </div>
  );
}
