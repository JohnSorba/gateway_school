import { Link } from "react-router-dom";
import "./StaffSlide.css";

const profileData = [
  {
    image:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ=",
    title: "John Doe",
    subject: "Mathematics Teacher",
    profileLink: "/profiles/john-doe",
  },
  {
    image:
      "https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.webp?b=1&s=612x612&w=0&k=20&c=fksVRgTE7PKY24Vq-aovymiZu6lBoyFmkGujM6nIgq4=",
    title: "Jane Smith",
    subject: "English Teacher",
    profileLink: "/profiles/jane-smith",
  },
  {
    image:
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=",
    title: "Michael Johnson",
    subject: "Social Studies Teacher",
    profileLink: "/profiles/michael-johnson",
  },
  {
    image:
      "https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.webp?b=1&s=612x612&w=0&k=20&c=MObQK8ZpTF2oL6a0mMlG2sJR-6aFMet2zz10WPUkgkE=",
    title: "Emily Brown",
    subject: "Biology Teacher",
    profileLink: "/profiles/emily-brown",
  },
];

function StaffSlide() {
  return (
    <section id="staff-section">
      <div className="staff-container">
        <h1>Management and Staff</h1>
        <h3>
          {" "}
          Meet the faces behind our educational mission and discover the impact
          they make in every pupil's life.
        </h3>
        <div className="staff-container-flex">
          {profileData.map((profile) => (
            <figure key={profile.title}>
              <img src={profile.image} alt={profile.title} />
              <figcaption>
                <p>{profile.title}</p>
                <p>{profile.subject}</p>
                <Link to={profile.profileLink} className="figcaption-link">
                  Learn More
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="speech-grid">
          <article>
            <img
              src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="
              alt="uncle Augustine"
            />
          </article>
          <article>
            <h3>Head Teacher's Remarks</h3>
            <blockquote>
              <span className="text-3xl">O</span>ur staff members are not just
              educators; they are mentors, guides, and role models who play a
              pivotal role in shaping the educational journey of our students.
              Committed to excellence, they go above and beyond to create a
              nurturing and inspiring learning environment. From our passionate
              teachers who impart knowledge and instill a love for learning to
              our dedicated support staff who ensure a safe and organized
              campus, every member of our team contributes to the holistic
              development of our students. Their unwavering dedication is the
              driving force behind our school's success, fostering a culture of
              innovation, growth, and academic achievement.
              <Link to="/about/headteacher_speech" className="read-more">
                {" "}
                Read More...
              </Link>
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StaffSlide;
//
