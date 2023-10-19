import {
  CheckBadgeIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  HomeModernIcon,
  LightBulbIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import About_Slider from "./About_Slider";

function About_Section({ curPageIndex, setCurPageIndex, getPageIndex }) {
  const goToPage = () => {
    const index = curPageIndex;
    return index;
  };
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="title">About Us</h1>
        <div className="about-grid">
          <div>
            <h1>Introduction</h1>
            <p>
              <span className="text-2xl">W</span>elcome to Gateway School, where
              knowledge meets opportunity and young minds flourish. As a beacon
              of educational excellence in Sierra Leone, Gateway School has been
              nurturing the leaders of tomorrow since 1990. Our commitment to
              holistic education, innovation, and community engagement sets us
              apart as a catalyst for lifelong learning.
            </p>

            <Link
              to="/about/history"
              className="btn"
              onClick={() => goToPage()}
            >
              Our Story
            </Link>
          </div>
          <div>
            <h1>Mission</h1>
            <p>
              At Gateway School, our mission is to empower students with the
              knowledge, skills, and values needed to thrive in an ever-changing
              world. We strive to foster a dynamic learning environment that
              inspires curiosity, critical thinking, and creativity. Our
              dedicated educators are committed to guiding students on a journey
              of self-discovery and personal growth, preparing them to excel
              academically and contribute positively to society.
            </p>
          </div>

          <div>
            <h1>Core Values</h1>
            <ul className="core-values">
              <li>
                <div>
                  <CheckBadgeIcon className="h-12 w-12 icon" />
                  <span>Excellence</span>
                </div>
                <div>
                  {" "}
                  <HandRaisedIcon className="h-12 w-12 icon" />
                  <span>Integrity</span>
                </div>
                <div>
                  {" "}
                  <HomeModernIcon className="h-12 w-12 icon" />
                  <span>Community</span>
                </div>
              </li>
              <li>
                <div>
                  {" "}
                  <GlobeAltIcon className="h-12 w-12 icon" />
                  <span>Diversity</span>
                </div>
                <div>
                  {" "}
                  <LightBulbIcon className="h-12 w-12 icon" />
                  <span>Innovation</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="img">
            <About_Slider />
          </div>
        </div>
      </div>{" "}
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
    </section>
  );
}

export default About_Section;
