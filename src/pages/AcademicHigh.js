import { academicCurriculum } from "../data/ApplicationData";

const data = academicCurriculum[2];

function AcademicHigh() {
  return (
    <div>
      <h2>{data.grade}</h2>
      <span>Age Group: {data.ageGroup}</span>
      <h3>Subjects</h3>
      <ul>
        {data.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <h3>Electives</h3>
      <ul>
        {data.electives.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Advanced Skills</h3>
      <ul>
        {data.advancedSkills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Examination Preparation</h3>
      <ul>
        {data.examinationPreparation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Values and Leadership</h3>
      <ul>
        {data.valuesAndLeadership.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>College and Career Guides</h3>
      <ul>
        {data.collegeAndCareerGuidance.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AcademicHigh;
