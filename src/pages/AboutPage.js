import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AboutPage() {
  const { section } = useParams();

  useEffect(() => {
    // Scroll to the section based on the 'section' variable

    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div>
      <h1>Welcome to the About Us page</h1>
      <h1 className="text-2xl font-semibold">COMING SOON!</h1>
    </div>
  );
}

export default AboutPage;
