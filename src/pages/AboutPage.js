import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./AboutPage.css";
import { AboutPageData } from "../data/AboutPageData";
import Navbar from "../components/Navbar";

function AboutPage() {
  const [curPageIndex, setCurPageIndex] = useState(0);

  const getPageIndex = (index) => {
    setCurPageIndex(index);
  };

  return (
    <div id="about">
      <header className="header">
        <Navbar />
        <div className="header-container">
          <h2>{AboutPageData[curPageIndex].title}</h2>
        </div>
      </header>

      <div className="aboutpage-container">
        <main>
          <Outlet />
        </main>
        <section id="sidebar">
          <article className="sidebar-container">
            <h3>About Gateway</h3>
            <ul className="list">
              {AboutPageData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="link"
                    onClick={() => getPageIndex(index)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
