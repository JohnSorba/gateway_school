import { academicCurriculum } from "../data/ApplicationData";

console.log(academicCurriculum[0]);
const data = academicCurriculum[0];

function AcademicDaycare() {
  return (
    <div>
      <h2>{data.grade}</h2>
      <span>{data.ageGroup}</span>
      <ul>
        {data.subjects.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AcademicDaycare;
