import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./AboutPage.css";
import { AboutPageData } from "../data/ApplicationData";
import Navbar from "../components/Navbar";
import { useSubpage } from "../Contexts/SubpageContext";

function AboutPage() {
  const { curPageIndex, getPageIndex } = useSubpage();
  return (
    <div id="about">
      <header className="header">
        {/* <Navbar /> */}
        <div className="header-container">
          <h2>{AboutPageData[curPageIndex].title}</h2>
        </div>
      </header>

      <div className="aboutpage-container">
        <main>
          {/* This Outlet displays the content of the linked component from the about-page sub-link */}
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
                    className={`link ${curPageIndex === index ? "active" : ""}`}
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
