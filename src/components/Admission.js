import { Link } from "react-router-dom";
import "./Admission.css";

function Admission() {
  return (
    <section className="admission-home">
      <div className="admission-container-home">
        <h1>Join Us for a Remarkable Educational Experience!</h1>
        <button>
          <Link to="parent/admission" className="admission-link">
            Go To Admissions Page
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Admission;
