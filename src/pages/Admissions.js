import "./AdmissionPage.css";
import { admissionProcess } from "../data/ApplicationData";
import AccApp from "../Accordion/AccApp";
import Accordion from "../Accordion/AccApp";

function Admissions() {
  return (
    <section className="admission-page">
      <div className="admission-header">
        <div className="admission-header-container">
          <h1>Admissions Page</h1>
          <p>Learn about the entire admissions process for each level.</p>
        </div>
      </div>
      <div className="admission-main">
        <article>
          <Accordion data={admissionProcess} />
        </article>
        <p className="footnote">
          <em>
            This detailed admissions process outlines the steps and requirements
            for each level, ensuring that both parents and students have a clear
            understanding of what is expected during the enrollment process at
            Gateway School. It's important to note that these processes can be
            further customized to the specific policies and procedures of the
            school.
          </em>
        </p>
      </div>
    </section>
  );
}

export default Admissions;
