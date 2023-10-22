import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./AboutPage.css";
import { AboutPageData } from "../data/ApplicationData";
import { useSubpage } from "../Contexts/SubpageContext";

function AboutPage() {
  const { curPageIndex, getPageIndex } = useSubpage();

  const location = useLocation();

  // Access pathname from location.
  const currentPath = location.pathname;

  useEffect(() => {
    // Code to run on component mount

    switch (currentPath) {
      case "/about":
        return getPageIndex(0);
      case "/about/history":
        return getPageIndex(1);
      case "/about/mission":
        return getPageIndex(2);
      case "/about/administration":
        return getPageIndex(3);
      case "/about/gallery":
        return getPageIndex(4);
      case "/about/headteacher-speech":
        return getPageIndex(5);
    }

    return () => {
      // Code to run on component unmount
    };
  }, [currentPath]);

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
