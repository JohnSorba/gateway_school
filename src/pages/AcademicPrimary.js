import { academicCurriculum } from "../data/ApplicationData";

const data = academicCurriculum[1];

function AcademicPrimary() {
  return (
    <div>
      <h2>{data.grade}</h2>
      <span>{data.ageGroup}</span>
      <ul>
        {data.subjects.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Character Education</h3>
      <ul>
        {data.characterEducation.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </div>
  );
}

export default AcademicPrimary;
