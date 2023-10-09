import "./Testimonials.css";

function Testimonials() {
  const Testimonials = [
    {
      title: "Pupil",
      name: "Emily Johnson",
      image:
        "https://images.pexels.com/photos/16160800/pexels-photo-16160800/free-photo-of-a-young-teenager-smiling.jpeg?auto=compress&cs=tinysrgb&w=400", // Replace with the image path
      statement:
        "Gateway School has been an incredible journey of discovery for me. The dedicated teachers and enriching programs have ignited my passion for learning.",
    },
    {
      title: "Pupil",
      name: "Daniel Smith",
      image:
        "https://images.pexels.com/photos/5905515/pexels-photo-5905515.jpeg?auto=compress&cs=tinysrgb&w=400", // Replace with the image path
      statement:
        "I've made lifelong friends at Gateway School. The supportive community here has not only nurtured my academic growth but also my personal development.",
    },
    {
      title: "Pupil",
      name: "Sophia Lee",
      image:
        "https://images.pexels.com/photos/5905859/pexels-photo-5905859.jpeg?auto=compress&cs=tinysrgb&w=400", // Replace with the image path
      statement:
        "Gateway School's focus on holistic education is truly inspiring. It's not just about grades; it's about character, creativity, and confidence.",
    },
    {
      title: "Pupil",
      name: "Michael Brown",
      image:
        "https://images.pexels.com/photos/7407120/pexels-photo-7407120.jpeg?auto=compress&cs=tinysrgb&w=400", // Replace with the image path
      statement:
        "I feel well-prepared for the future thanks to Gateway School's emphasis on critical thinking and problem-solving. It's a place where dreams take flight.",
    },
  ];

  return (
    <section id="testimonial-section">
      <div className="testimonial-container">
        {/* <h1>Testimonial</h1> */}
        <div className="testimonial-flex-container">
          {Testimonials.map((testimony) => (
            <article className="testimony" key={testimony.statement}>
              <img src={testimony.image} alt={testimony.name} />
              <q>{testimony.statement}</q>
              <h3>{testimony.name}</h3>
              <span>{testimony.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
