import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { AcademicPageData } from "../data/ApplicationData";
import "./Academic.css";
import { useSubpage } from "../Contexts/SubpageContext";
import { useEffect } from "react";

function Academic() {
  const { academicPageIndex, getAcademicPageIndex } = useSubpage();
  const location = useLocation();

  // Access pathname from location.
  const currentPath = location.pathname;

  useEffect(() => {
    // Code to run on component mount

    // changes the content of the page based on the current URL path
    switch (currentPath) {
      case "/academic":
        return getAcademicPageIndex(0);
      case "/academic/daycare-nursery":
        return getAcademicPageIndex(1);
      case "/academic/primary-school":
        return getAcademicPageIndex(2);
      case "/academic/high-school":
        return getAcademicPageIndex(3);
    }
  }, [currentPath]);

  const styles = {
    backgroundImage: `url(${AcademicPageData[academicPageIndex].image})`,
  };
  return (
    <section className="academic">
      <header className="academic-header" style={styles}>
        <section>
          <h1>{AcademicPageData[academicPageIndex].title}</h1>
        </section>
      </header>
      <section className="academic-page-container">
        <main>
          <Outlet />
        </main>
        <section className="sidebar-content">
          <article className="sidebar-container">
            <h2>Browse Curriculum</h2>

            <ul>
              {AcademicPageData.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.url}
                    className={`link ${
                      academicPageIndex === index ? "active" : ""
                    }`}
                    onClick={() => getAcademicPageIndex(index)}
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </section>
  );
}

export default Academic;

/*
Creating a comprehensive academic curriculum for a school website requires thoughtful planning and organization. Here's a structured overview of the academic curriculum for Gateway School, covering daycare, nursery, primary school (grades 1 - 6), and high school (grades 7 - 9):

**Daycare and Nursery Curriculum:**

*Age Group: 3 to 5 years*

**1. Early Childhood Development:**
   - Focused on nurturing social and emotional development.
   - Encouraging curiosity, creativity, and self-expression.

**2. Basic Motor Skills:**
   - Activities to improve fine and gross motor skills.
   - Introduction to basic physical education.

**3. Early Literacy and Numeracy:**
   - Introduction to letters, numbers, and basic phonics.
   - Storytelling and early reading skills development.

**4. Creative Arts:**
   - Exploration of art, music, and creative expression.
   - Encouraging imaginative play and social interaction.

**Primary School Curriculum (Grades 1 - 6):**

*Age Group: 6 to 12 years*

**1. Core Subjects:**
   - English Language and Literature
   - Mathematics
   - Science
   - Social Studies
   - Local Language Studies

**2. Additional Subjects:**
   - Physical Education
   - Art and Music
   - Computer Studies
   - Health and Hygiene

**3. Cross-Curricular Skills:**
   - Critical thinking and problem-solving.
   - Communication and presentation skills.
   - Research and information literacy.

**4. Character Education:**
   - Values-based education promoting integrity, respect, and empathy.
   - Community involvement and service learning.

**High School Curriculum (Grades 7 - 9):**

*Age Group: 12 to 15 years*

**1. Expanded Core Subjects:**
   - Advanced English Language and Literature
   - Algebra, Geometry, and Advanced Mathematics
   - Biology, Chemistry, and Physics
   - Geography and History

**2. Elective Courses:**
   - Foreign Languages
   - Advanced Computer Studies
   - Visual and Performing Arts

**3. Advanced Skills Development:**
   - Critical analysis and research skills.
   - Leadership and team-building activities.
   - Career exploration and preparation.

**4. Examination Preparation:**
   - Preparing students for national and international examinations.
   - Fostering time management and study skills.

**5. Values and Leadership:**
   - Continued emphasis on character development.
   - Leadership training, mentoring, and community service projects.

**6. College and Career Guidance:**
   - College admission counseling and career guidance.
   - Preparing students for life beyond high school.

This curriculum overview provides a structured framework for the academic journey at Gateway School, with a focus on a well-rounded education that encompasses core subjects, skills development, and character education. The details of specific subjects and lesson plans can be further developed and organized for each grade level on the school's website. Additionally, you may want to mention any specialized programs or extracurricular activities that enrich the academic experience.

*/
