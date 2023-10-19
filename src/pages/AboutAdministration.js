import { profileData } from "../data/ApplicationData";
import "./AboutAdministration.css";

function AboutAdministration() {
  return (
    <section>
      <article className="leadership">
        <h1>Leadership</h1>
        <div className="profile-container">
          {profileData.map((data, index) => (
            <figure key={index}>
              <img src={data.image} alt={data.title} />
              <figcaption>
                <span>{data.title}</span>, {data.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
      <article className="staff"></article>
    </section>
  );
}

export default AboutAdministration;
