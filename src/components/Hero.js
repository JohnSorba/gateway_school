import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section ">
      <div className="hero-container">
        <div>
          <h1 className="heading">
            <span>Welcome to</span>
            <br />
            <span className="school-title">Gateway Pre-School</span>{" "}
          </h1>
          {/* <p>{description}</p> */}
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
