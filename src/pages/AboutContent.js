import { Link } from "react-router-dom";
import "./AboutContent.css";
import { useSubpage } from "../Contexts/SubpageContext";

function AboutContent() {
  const { setCurPageIndex } = useSubpage();

  const goToDaycare = () => {
    setCurPageIndex(1);
  };

  const goToPrimary = () => {
    setCurPageIndex(2);
  };

  const goToHighSchool = () => {
    setCurPageIndex(3);
  };

  return (
    <section className="about-content">
      <header className="heading">
        <h1>Welcome to Gateway School</h1>
        <figure>
          <img src="/gateway_frontview.jpg" alt="gateway school" />
          <figcaption>
            <blockquote>
              <q className="italic text-sm">
                A front view of Gateway Daycare, Nursery, Preparatory and High
                School
              </q>
            </blockquote>
          </figcaption>
        </figure>
        <p>
          At Gateway School, we've been dedicated to excellence in education
          since our founding in 1990. Located in the vibrant city of Freetown,
          Sierra Leone, we have a rich history of providing high-quality
          education to the local community. Gateway School is dedicated to
          providing a nurturing and innovative educational experience for all
          pupils.
        </p>
      </header>
      <div className="about-text">
        <article className="aboutus">
          <h2>A Comprehensive Education Experience</h2>
          <p>
            We cater to students from their earliest years in{" "}
            <Link
              to="/academic/daycare-nursery"
              className="text-blue-700"
              onClick={goToDaycare}
            >
              Daycare and Nursery
            </Link>{" "}
            programs, guiding them through primary school and into the high
            school journey. Our holistic approach to education ensures that each
            child's learning experience is nurtured and enriched.
          </p>
        </article>
        <article className="values">
          <h2>Primary School Excellence</h2>
          <p>
            In the{" "}
            <Link
              to="/academic/primary-school"
              className="text-blue-700"
              onClick={goToPrimary}
            >
              Primary school
            </Link>
            , our students are prepared for the{" "}
            <em>National Primary School Examination (NPSE)</em>, a significant
            step in their educational journey. This examination opens doors to
            further education and qualification into our esteemed high school or
            a school of their choice.
          </p>
        </article>
        <article className="admin">
          <h2>The Gateway to High School</h2>
          <p>
            Our{" "}
            <Link
              to="/academic/high-school"
              className="text-blue-700"
              onClick={goToHighSchool}
            >
              High school
            </Link>{" "}
            offers a comprehensive program spanning three levels: Junior High
            School (JHS 1 - 3). Here, students receive a well-rounded education
            that prepares them for the{" "}
            <em>Basic Education Certificate Examination (BECE)</em> and other
            future challenges and opportunities.
          </p>
        </article>
        <article className="history-and-heritage">
          <h2>Accreditation and Affiliation</h2>
          <p>
            Gateway School is recognized by the{" "}
            <em>West African Examinations Council - Sierra Leone (WAEC-SL)</em>,
            and{" "}
            <em>
              <Link to="https://mbsse.gov.sl/">
                The Ministry of Basic and Senior Secondary Education - Sierra
                Leone (MBSSE-SL)
              </Link>
            </em>
            , reflecting our commitment to meeting rigorous educational
            standards. This recognition assures both parents and students of the
            quality of education they can expect.
          </p>
        </article>
        <article className="accreditation">
          <h2>Join Our Educational Journey</h2>
          <p>
            At Gateway School, we are more than just an educational institution;
            we are a community that fosters personal growth, academic
            excellence, and the development of essential values. We invite you
            to be a part of our educational journey, where every child's
            potential is realized.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutContent;
